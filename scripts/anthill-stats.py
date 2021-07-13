import asyncio
import json
from web3 import Web3
from bscscan import BscScan
from pylib import Web3Utils, Web3Contract

BSCSCAN_API_KEY = "WWF867FGVC1F5QA4UMFTVWBAMA63MD54HB"

KnownAddresses = {"0xc892cfd3e75cf428bdd25576e9a42d515697b2c7": "Deployer Account                          ",
                  "0xf9d5169aa864c1ddda2aba931edf722f98b2d159": "Treasury Account                          ",
                  "0x8a612956abaf09c37e4372d7890835294080eb30": "Operator Account                          ",
                  "0x47ce08590bdb1162eade736efaabf2aa2d5c8c92": "HQ Account                                ",
                  "0x5c8c6e3eb6aa9d0e7ae6882045b1924deb4ece94": "Roberto Test Account                      ",
                  "0x1442a544fddea9fd70c51ba603b86586aee28019": "Gigi Test Account                         "}


def read_deployments(filename: str) -> dict:
    with open(filename, "r") as deploymentsFile:
        deployments = json.loads(deploymentsFile.read())
    return deployments


def create_provider() -> Web3:
    return Web3(Web3.HTTPProvider(
        'https://data-seed-prebsc-1-s1.binance.org:8545'))


async def decode_transactions(contract: Web3Contract, startblock: int, endblock: int, only_known: bool = False):
    print("[" + contract.name + " Transactions START]\n")
    async with BscScan(BSCSCAN_API_KEY, testnet=True, debug=True) as bscscan:
        transactions = await bscscan.get_normal_txs_by_address(address=contract.address, startblock=startblock, endblock=endblock, sort="asc")
        contract.decode_transactions(transactions, only_known)

    print("\n[" + contract.name + " Transactions END]\n")


async def main():
    for address, name in KnownAddresses.items():
        Web3Utils.add_known_address(name, address)

    deployments = read_deployments("../deployments/deployments.json")
    provider = create_provider()

    token_faucet = Web3Contract.create_contract(
        "TokenFaucet", deployments, provider)
    busd_ant_lp_helper = Web3Contract.create_contract(
        "BUSDANTLPHelper", deployments, provider)
    bnb_ant_lp_helper = Web3Contract.create_contract(
        "BNBANTLPHelper", deployments, provider)
    ant_busd_pair = Web3Contract.create_pair_contract(
        "ANT-BUSD-LPToken", "0x74d6515065FFEd48A1AcB958EB637dFAba855Ff6", provider)
    pancake_router = Web3Contract.create_router_contract(
        "PancakeRouter", "0xD99D1c33F9fC3444f8101754aBC46c52416550D1", provider)

    await decode_transactions(contract=token_faucet, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=busd_ant_lp_helper, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=bnb_ant_lp_helper, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=ant_busd_pair, startblock=10210573, endblock=99999999)
    await decode_transactions(contract=pancake_router, startblock=10210573, endblock=99999999, only_known=True)

if __name__ == "__main__":
    asyncio.run(main())
