const ethers = require('ethers');
const {formatUnits} = require('ethers/lib/utils');

async function triggerSeigniorage() {
    //const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const wallet = new ethers.Wallet('ee63ac8bae6eeeb90c7d7df19e23e28a67995e0d8f1bbad10ded6d5656c5d5c1', provider);

    const {Treasury} = require('../deployments/deployments.json');
    const treasury = new ethers.Contract(Treasury.address, Treasury.abi, wallet);

    provider.on('ContributionPoolFunded', (timestamp, reserve) => {
        console.log('contributionpoolfunded');
    });

    try {
        const tx = await treasury.functions.allocateSeigniorage();
        await tx.wait();
    } catch (err) {
        console.log(err);
    }
}

triggerSeigniorage();
