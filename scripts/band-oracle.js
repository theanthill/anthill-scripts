const { Client } = require("@bandprotocol/bandchain.js");

// BandChain's Proof-of-Authority REST endpoint
const endpoint = "https://api-gm-lb.bandchain.org";
const client = new Client(endpoint);

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
    const rate = await client.getReferenceData([
        "BNB/BUSD",
        "DAI/BUSD",
        "BUSD/USDT",
        "BUSD/USDC",
    ]);
    return rate;
}

(async () => {
    console.log(await exampleGetReferenceData());
})();
