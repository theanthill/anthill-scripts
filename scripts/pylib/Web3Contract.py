import json
import os
from . import Web3Utils
from web3 import Web3


class Web3Contract:
    def __init__(self, name: str, address: str, abi: str, provider: Web3):
        self.name = name
        self.address = address.lower()
        self.contract = provider.eth.contract(abi=abi)

    def __is_own_address(self, address: str) -> bool:
        return address.lower() == self.address

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
        if (only_known and not Web3Utils.is_known_address(transaction["from"])):
            return

        contractAddress = Web3Utils.translate_address(
            transaction["contractAddress"])
        if (contractAddress):
            action = self.decode_contract_creation(transaction)
        else:
            action = self.decode_function_call(transaction)

        fromAddress = Web3Utils.translate_address(transaction["from"])
        toAddress = Web3Utils.translate_address(transaction["to"])

        description = "[" + transaction["blockNumber"] + \
            "]\tFrom=" + fromAddress + "\t"

        if (not self.__is_own_address(toAddress) and toAddress):
            description += "\tTo=" + toAddress

        description += "\t" + action

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


def __create_contract(name: str, address: str, abi: str, provider: Web3) -> Web3Contract:
    return Web3Contract(name, address, abi, provider)


def create_contract(name: str, deployments: dict, provider: Web3) -> Web3Contract:
    return __create_contract(name, deployments[name]["address"], deployments[name]["abi"], provider)


def create_custom_contract(name: str, address: str, abi_name: str, provider: Web3) -> Web3Contract:
    with open(os.path.join(os.path.dirname(__file__), "abi/" + abi_name + ".json"), "r") as pair_abi_file:
        pair_abi = json.loads(pair_abi_file.read())

    return __create_contract(name, address, pair_abi, provider)


def create_router_contract(name: str, address: str, provider: Web3) -> Web3Contract:
    return create_custom_contract(name, address, "IPancakeRouterV2", provider)


def create_pair_contract(name: str, address: str, provider: Web3) -> Web3Contract:
    return create_custom_contract(name, address, "IUniswapV2Pair", provider)
