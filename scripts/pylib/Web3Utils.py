KNOWN_ADDRESSES = {}


def add_known_address(name: str, address: str):
    KNOWN_ADDRESSES[address] = name


def is_known_address(address: str) -> bool:
    return (address.lower() in KNOWN_ADDRESSES)


def translate_address(address: str) -> str:
    address_lower = address.lower()
    if (is_known_address(address_lower)):
        return KNOWN_ADDRESSES[address_lower]
    return address_lower
