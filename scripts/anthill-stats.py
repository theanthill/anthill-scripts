import asyncio
import json
from web3 import Web3, contract
from bscscan import BscScan
from eth_abi import decode_single, decode_abi
import web3

BSCSCAN_API_KEY = "WWF867FGVC1F5QA4UMFTVWBAMA63MD54HB"

KNOWN_ADDRESSES = {"0xf9d5169aa864c1ddda2aba931edf722f98b2d159": "Treasury Account                          ",
                   "0x8a612956abaf09c37e4372d7890835294080eb30": "Operator Account                          ",
                   "0x47ce08590bdb1162eade736efaabf2aa2d5c8c92": "HQ Account                                ",
                   "0x5c8c6e3eb6aa9d0e7ae6882045b1924deb4ece94": "Roberto Test Account                      "}


def is_known_address(address: str) -> bool:
    return (address.lower() in KNOWN_ADDRESSES)


def translate_address(address: str) -> str:
    address_lower = address.lower()
    if (is_known_address(address_lower)):
        return KNOWN_ADDRESSES[address_lower]
    return address_lower


class Contract:
    def __init__(self, name: str, address: str, abi: str, provider: Web3):
        self.name = name
        self.address = address
        self.contract = provider.eth.contract(abi=abi)

    def decode_function_call(self, transaction: dict) -> str:
        input = transaction["input"]

        func_obj, func_params = self.contract.decode_function_input(input)

        result = func_obj.function_identifier + "("
        for index, param_name in enumerate(func_params):
            result += param_name + "=" + str(func_params[param_name])
            if (index != len(func_params)-1):
                result += ", "
        result += ")"

        return result

    def decode_contract_creation(self, transaction: dict) -> str:
        return "CONTRACT CREATION [" + transaction["contractAddress"] + "]"

    def decode_transaction(self, transaction: dict, only_known: bool = False) -> str:
        fromAddress = translate_address(transaction["from"])
        toAddress = translate_address(transaction["to"])
        contractAddress = translate_address(transaction["contractAddress"])

        if (only_known and not is_known_address(transaction["from"])):
            return

        if (contractAddress):
            action = self.decode_contract_creation(transaction)

            description = "[" + transaction["blockNumber"] + "]\tFrom=" + \
                fromAddress + "\tTo=" + \
                contractAddress + "\t" + action

        else:
            action = self.decode_function_call(transaction)

            description = "[" + transaction["blockNumber"] + "]\tFrom=" + \
                fromAddress + "\tTo=" + \
                toAddress + "\t" + action

        return description

    def decode_transactions(self, transactions: dict, only_known: bool = False):
        origins = {}

        print("BLOCK\t\tDescription")
        print("-----\t\t-----------")
        for transaction in transactions:
            description = self.decode_transaction(transaction, only_known)
            if (not description):
                continue

            print(description)

            origins[transaction["from"]] = True

        print("\nUnique origin accounts: " + str(len(origins)))


def _create_contract(name: str, address: str, abi: str, provider: Web3) -> Contract:
    return Contract(name, address, abi, provider)


def create_contract(name: str, deployments: dict, provider: Web3) -> Contract:
    return _create_contract(name, deployments[name]["address"], deployments[name]["abi"], provider)


def create_custom_contract(name: str, address: str, abi_name: str, provider: Web3) -> Contract:
    with open("../abi/" + abi_name + ".json", "r") as pair_abi_file:
        pair_abi = json.loads(pair_abi_file.read())

    return _create_contract(name, address, pair_abi, provider)


def create_router_contract(name: str, address: str, provider: Web3) -> Contract:
    return create_custom_contract(name, address, "IPancakeRouterV2", provider)


def create_pair_contract(name: str, address: str, provider: Web3) -> Contract:
    return create_custom_contract(name, address, "IUniswapV2Pair", provider)


def read_deployments(filename: str) -> dict:
    with open(filename, "r") as deploymentsFile:
        deployments = json.loads(deploymentsFile.read())
    return deployments


def create_provider() -> Web3:
    return Web3(Web3.HTTPProvider(
        'https://data-seed-prebsc-1-s1.binance.org:8545'))


async def decode_transactions(contract: Contract, startblock: int, endblock: int, only_known: bool = False):
    print("[" + contract.name + " Transactions START]\n")
    async with BscScan(BSCSCAN_API_KEY, testnet=True, debug=True) as bscscan:
        transactions = await bscscan.get_normal_txs_by_address(address=contract.address, startblock=startblock, endblock=endblock, sort="asc")
        contract.decode_transactions(transactions, only_known)

    print("\n[" + contract.name + " Transactions END]\n")


async def main():
    deployments = read_deployments("../deployments/deployments.json")
    provider = create_provider()

    token_faucet = create_contract("TokenFaucet", deployments, provider)
    busd_ant_lp_helper = create_contract(
        "BUSDANTLPHelper", deployments, provider)
    bnb_ant_lp_helper = create_contract(
        "BNBANTLPHelper", deployments, provider)
    ant_busd_pair = create_pair_contract(
        "ANT-BUSD-LPToken", "0x74d6515065FFEd48A1AcB958EB637dFAba855Ff6", provider)
    pancake_router = create_router_contract(
        "PancakeRouter", "0xD99D1c33F9fC3444f8101754aBC46c52416550D1", provider)

    await decode_transactions(contract=token_faucet, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=busd_ant_lp_helper, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=bnb_ant_lp_helper, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=ant_busd_pair, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=pancake_router, startblock=10210573, endblock=99999999, only_known=True)

if __name__ == "__main__":
    asyncio.run(main())
