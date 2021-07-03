const ethers = require("ethers");

const { formatUnits } = require("ethers/lib/utils");

const {
    getChainlinkPair,
    ChainlinkV3Interface,
} = require("./chainlink-library");

async function getRoundData() {
    const BNBUSDPair = getChainlinkPair("BUSD", "USD", "testnet");

    const provider = new ethers.providers.JsonRpcProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
    );
    //const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const wallet = new ethers.Wallet(
        "ee63ac8bae6eeeb90c7d7df19e23e28a67995e0d8f1bbad10ded6d5656c5d5c1",
        provider
    );

    const ChainlinkOracle = new ethers.Contract(
        BNBUSDPair.address,
        ChainlinkV3Interface,
        wallet
    );

    const roundData = await ChainlinkOracle.latestRoundData();
    console.log(formatUnits(roundData.answer, BNBUSDPair.decimals));
}

getRoundData();
