const ethers = require("ethers");

async function triggerSeigniorage() {
    const hours = [8, 12, 16, 20, 23];

    const date = new Date();
    const currentHour = date.getHours();

    console.log(`[${date}]`);

    if (!hours.includes(currentHour)) {
        console.log(`Waiting for next hour (Target hours = [${hours}])`);
        return;
    }

    try {
        const provider = new ethers.providers.JsonRpcProvider(
            "https://arb-rinkeby.g.alchemy.com/v2/I5TkoZm3LljH40hBPQc6a0YNbO6eo8Hy"
        );
        //const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
        const wallet = new ethers.Wallet("ee63ac8bae6eeeb90c7d7df19e23e28a67995e0d8f1bbad10ded6d5656c5d5c1", provider);

        const deployments = require("../deployments/arb-rinkeby.deployments.json");
        const { Treasury } = deployments.contracts;

        const treasury = new ethers.Contract(Treasury.address, Treasury.abi, wallet);

        console.log("Allocating seigniorage...");
        const tx = await treasury.functions.allocateSeigniorage();
        console.log("Waiting for confirmation...");
        await tx.wait();
        console.log("DONE!");
    } catch (err) {
        console.log(err);
    }
}

triggerSeigniorage();
