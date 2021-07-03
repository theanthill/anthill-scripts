// Service addresses
const ChainlinkAddresses = {
    testnet: {
        "ADA/USD": {
            decimals: 8,
            address: "0x5e66a1775BbC249b5D51C13d29245522582E671C",
        },
        "BAKE/USD": {
            decimals: 8,
            address: "0xbe75E0725922D78769e3abF0bcb560d1E2675d5d",
        },
        "BCH/USD": {
            decimals: 8,
            address: "0x887f177CBED2cf555a64e7bF125E1825EB69dB82",
        },
        "BNB/USD": {
            decimals: 8,
            address: "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526",
        },
        "BTC/ETH": {
            decimals: 18,
            address: "0x1a602D4928faF0A153A520f58B332f9CAFF320f7",
        },
        "BTC/USD": {
            decimals: 8,
            address: "0x5741306c21795FdCBb9b265Ea0255F499DFe515C",
        },
        "BTC/IV": {
            decimals: 8,
            address: "0x86Be1a485Cdce02157A525dFc1c09f355a167075",
        },
        "BUSD/ETH": {
            decimals: 18,
            address: "0x5ea7D6A33D3655F661C298ac8086708148883c34",
        },
        "BUSD/USD": {
            decimals: 8,
            address: "0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa",
        },
        "CAKE/USD": {
            decimals: 8,
            address: "0x81faeDDfeBc2F8Ac524327d70Cf913001732224C",
        },
        "CREAM/USD": {
            decimals: 8,
            address: "0xB8eADfD8B78aDA4F85680eD96e0f50e1B5762b0a",
        },
        "DAI/BNB": {
            decimals: 18,
            address: "0x0630521aC362bc7A19a4eE44b57cE72Ea34AD01c",
        },
        "DAI/USD": {
            decimals: 8,
            address: "0xE4eE17114774713d2De0eC0f035d4F7665fc025D",
        },
        "DODO/USD": {
            decimals: 8,
            address: "0x2939E0089e61C5c9493C2013139885444c73a398",
        },
        "DOGE/USD": {
            decimals: 8,
            address: "0x963D5e7f285Cc84ed566C486c3c1bC911291be38",
        },
        "DOT/USD": {
            decimals: 8,
            address: "0xEA8731FD0685DB8AeAde9EcAE90C4fdf1d8164ed",
        },
        "EQZ/USD": {
            decimals: 8,
            address: "0x6C2441920404835155f33d88faf0545B895871b1",
        },
        "ETH/USD": {
            decimals: 8,
            address: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7",
        },
        "FIL/USD": {
            decimals: 8,
            address: "0x17308A18d4a50377A4E1C37baaD424360025C74D",
        },
        "FRONT/USD": {
            decimals: 8,
            address: "0x101E51C0Bc2D2213a9b0c991A991958aAd3fF96A",
        },
        "INJ/USD": {
            decimals: 8,
            address: "0x58b299Fa027E1d9514dBbEeBA7944FD744553d61",
        },
        "LINK/USD": {
            decimals: 8,
            address: "0x1B329402Cb1825C6F30A0d92aB9E2862BE47333f",
        },
        "LTC/USD": {
            decimals: 8,
            address: "0x9Dcf949BCA2F4A8a62350E0065d18902eE87Dca3",
        },
        "MATIC/USD": {
            decimals: 8,
            address: "0x957Eb0316f02ba4a9De3D308742eefd44a3c1719",
        },
        "REEF/USD": {
            decimals: 8,
            address: "0x902fA2495a8c5E89F7496F91678b8CBb53226D06",
        },
        "SFP/USD": {
            decimals: 8,
            address: "0x4b531A318B0e44B549F3b2f824721b3D0d51930A",
        },
        "SXP/USD": {
            decimals: 8,
            address: "0x678AC35ACbcE272651874E782DB5343F9B8a7D66",
        },
        "TWT/USD": {
            decimals: 8,
            address: "0x7671d7EDb66E4C10d5FFaA6a0d8842B5d880F0B3",
        },
        "USDC/USD": {
            decimals: 8,
            address: "0x90c069C4538adAc136E051052E14c1cD799C41B7",
        },
        "USDT/USD": {
            decimals: 8,
            address: "0xEca2605f0BCF2BA5966372C99837b1F182d3D620",
        },
        "VAI/USD": {
            decimals: 8,
            address: "0xdb398f7B5927b92ec52C0Ae5D3090DB147eAedA5",
        },
        "XRP/USD": {
            decimals: 8,
            address: "0x4046332373C24Aed1dC8bAd489A04E187833B28d",
        },
        "XVS/USD": {
            decimals: 8,
            address: "0xCfA786C17d6739CBC702693F23cA4417B5945491",
        },
    },
    mainnet: {
        "APL/USD": {
            decimals: 8,
            address: "0xb7Ed5bE7977d61E83534230f3256C021e0fae0B6",
        },
        "AAVE/USD": {
            decimals: 8,
            address: "0xA8357BF572460fC40f4B0aCacbB2a6A61c89f475",
        },
        "ADA/BNB": {
            decimals: 18,
            address: "0x2d5Fc41d1365fFe13d03d91E82e04Ca878D69f4B",
        },
        "ADA/USD": {
            decimals: 8,
            address: "0xa767f745331D267c7751297D982b050c93985627",
        },
        "ALPHA/BNB": {
            decimals: 18,
            address: "0x7bC032A7C19B1BdCb981D892854d090cfB0f238E",
        },
        "AMZN/USD": {
            decimals: 8,
            address: "0x51d08ca89d3e8c12535BA8AEd33cDf2557ab5b2a",
        },
        "ARKK/USD": {
            decimals: 8,
            address: "0x234c7a1da64Bdf44E1B8A25C94af53ff2A199dE0",
        },
        "ATOM/USD": {
            decimals: 8,
            address: "0xb056B7C804297279A9a673289264c17E6Dc6055d",
        },
        "AUTO/USD": {
            decimals: 8,
            address: "0x88E71E6520E5aC75f5338F5F0c9DeD9d4f692cDA",
        },
        "BAND/BNB": {
            decimals: 18,
            address: "0x3334bF7ec892Ca03D1378B51769b7782EAF318C4",
        },
        "BCH/BNB": {
            decimals: 18,
            address: "0x2a548935a323Bb7329a5E3F1667B979f16Bc890b",
        },
        "BCH/USD": {
            decimals: 8,
            address: "0x43d80f616DAf0b0B42a928EeD32147dC59027D41",
        },
        "BIDU/USD": {
            decimals: 8,
            address: "0xb9344e4Ffa6d5885B2C5830adc27ddF3FdBF883c",
        },
        "BNB/USD": {
            decimals: 8,
            address: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",
        },
        "BTC/ARS": {
            decimals: 8,
            address: "0x26C31ac71010aF62E6B486D1132E266D6298857D",
        },
        "BTC/BNB": {
            decimals: 18,
            address: "0x116EeB23384451C78ed366D4f67D5AD44eE771A0",
        },
        "BTC/USD": {
            decimals: 8,
            address: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",
        },
        "BUSD/BNB": {
            decimals: 18,
            address: "0x87Ea38c9F24264Ec1Fff41B04ec94a97Caf99941",
        },
        "BUSD/USD": {
            decimals: 8,
            address: "0xcBb98864Ef56E9042e7d2efef76141f15731B82f",
        },
        "BZRX/USD": {
            decimals: 8,
            address: "0xFc362828930519f236ad0c8f126B7996562a695A",
        },
        "CAKE/BNB": {
            decimals: 8,
            address: "0xcB23da9EA243f53194CBc2380A6d4d9bC046161f",
        },
        "CAKE/USD": {
            decimals: 18,
            address: "0xB6064eD41d4f67e353768aA239cA86f4F73665a1",
        },
        "CFX/USD": {
            decimals: 8,
            address: "0xe3cA2f3Bad1D8327820f648C759f17162b5383ae",
        },
        "COIN/USD": {
            decimals: 8,
            address: "0x2d1AB79D059e21aE519d88F978cAF39d74E31AEB",
        },
        "COMP/USD": {
            decimals: 8,
            address: "0x0Db8945f9aEf5651fa5bd52314C5aAe78DfDe540",
        },
        "CREAM/BNB": {
            decimals: 18,
            address: "0x6f55DFAf098a813d87BB4e6392275b502360Bb9D",
        },
        "DAI/BNB": {
            decimals: 18,
            address: "0x8EC213E7191488C7873cEC6daC8e97cdbAdb7B35",
        },
        "DAI/USD": {
            decimals: 8,
            address: "0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA",
        },
        "DF/USD": {
            decimals: 8,
            address: "0x1b816F5E122eFa230300126F97C018716c4e47F5",
        },
        "DOGE/USD": {
            decimals: 8,
            address: "0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8",
        },
        "DOT/BNB": {
            decimals: 18,
            address: "0xBA8683E9c3B1455bE6e18E7768e8cAD95Eb5eD49",
        },
        "DOT/USD": {
            decimals: 8,
            address: "0xC333eb0086309a16aa7c8308DfD32c8BBA0a2592",
        },
        "DPI/USD": {
            decimals: 8,
            address: "0x7ee7E7847FFC93F8Cf67BCCc0002afF9C52DE524",
        },
        "EOS/BNB": {
            decimals: 18,
            address: "0xed93F3764334788f2f6628b30e505fe1fc5d1D7b",
        },
        "EOS/USD": {
            decimals: 8,
            address: "0xd5508c8Ffdb8F15cE336e629fD4ca9AdB48f50F0",
        },
        "ETH/BNB": {
            decimals: 18,
            address: "0x63D407F32Aa72E63C7209ce1c2F5dA40b3AaE726",
        },
        "ETH/USD": {
            decimals: 8,
            address: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e",
        },
        "EUR/USD": {
            decimals: 8,
            address: "0x0bf79F617988C472DcA68ff41eFe1338955b9A80",
        },
        "FIL/USD": {
            decimals: 8,
            address: "0xE5dbFD9003bFf9dF5feB2f4F445Ca00fb121fb83",
        },
        "GOOGL/USD": {
            decimals: 8,
            address: "0xeDA73F8acb669274B15A977Cb0cdA57a84F18c2a",
        },
        "ICP/USD": {
            decimals: 8,
            address: "0x84210d9013A30C6ab169e28840A6CC54B60fa042",
        },
        "JPY/USD": {
            decimals: 8,
            address: "0x22Db8397a6E77E41471dE256a7803829fDC8bC57",
        },
        "LINA/USD": {
            decimals: 8,
            address: "0x38393201952f2764E04B290af9df427217D56B41",
        },
        "LINK/BNB": {
            decimals: 18,
            address: "0xB38722F6A608646a538E882Ee9972D15c86Fc597",
        },
        "LINK/USD": {
            decimals: 8,
            address: "0xca236E327F629f9Fc2c30A4E95775EbF0B89fac8",
        },
        "LIT/USD": {
            decimals: 8,
            address: "0x83766bA8d964fEAeD3819b145a69c947Df9Cb035",
        },
        "LTC/BNB": {
            decimals: 18,
            address: "0x4e5a43A79f53c0a8e83489648Ea7e429278f8b2D",
        },
        "LTC/USD": {
            decimals: 8,
            address: "0x74E72F37A8c415c8f1a98Ed42E78Ff997435791D",
        },
        "MATIC/USD": {
            decimals: 8,
            address: "0x7CA57b0cA6367191c94C8914d7Df09A57655905f",
        },
        "ONT/USD": {
            decimals: 8,
            address: "0x887f177CBED2cf555a64e7bF125E1825EB69dB82",
        },
        "PACB/USD": {
            decimals: 8,
            address: "0xe9bEC24f14AB49b0a81a482a4224e7505d2d29e9",
        },
        "PAXG/USD": {
            decimals: 8,
            address: "0x7F8caD4690A38aC28BDA3D132eF83DB1C17557Df",
        },
        "QQQ/USD": {
            decimals: 8,
            address: "0x9A41B56b2c24683E2f23BdE15c14BC7c4a58c3c4",
        },
        "RAMP/USD": {
            decimals: 8,
            address: "0xD1225da5FC21d17CaE526ee4b6464787c6A71b4C",
        },
        "REEF/USD": {
            decimals: 8,
            address: "0x46f13472A4d4FeC9E07E8A00eE52f4Fa77810736",
        },
        "SOL/USD": {
            decimals: 8,
            address: "0x0E8a53DD9c13589df6382F13dA6B3Ec8F919B323",
        },
        "SPCE/USD": {
            decimals: 8,
            address: "0xC861a351b2b50985b9061a5b68EBF9018e7FfB7b",
        },
        "SPY/USD": {
            decimals: 8,
            address: "0xb24D1DeE5F9a3f761D286B56d2bC44CE1D02DF7e",
        },
        "SXP/USD": {
            decimals: 8,
            address: "0xE188A9875af525d25334d75F3327863B2b8cd0F1",
        },
        "TRX/USD": {
            decimals: 8,
            address: "0xF4C5e535756D11994fCBB12Ba8adD0192D9b88be",
        },
        "TSLA/USD": {
            decimals: 8,
            address: "0xEEA2ae9c074E87596A85ABE698B2Afebc9B57893",
        },
        "TWT/BNB": {
            decimals: 18,
            address: "0x7E728dFA6bCa9023d9aBeE759fDF56BEAb8aC7aD",
        },
        "UNI/USD": {
            decimals: 8,
            address: "0xb57f259E7C24e56a1dA00F66b55A5640d9f9E7e4",
        },
        "USDC/BNB": {
            decimals: 18,
            address: "0x45f86CA2A8BC9EBD757225B19a1A0D7051bE46Db",
        },
        "USDC/USD": {
            decimals: 8,
            address: "0x51597f405303C4377E36123cBc172b13269EA163",
        },
        "USDN/USD": {
            decimals: 8,
            address: "0x7C0BC703Dc56645203CFeBE1928E34B8e885ae37",
        },
        "USDT/BNB": {
            decimals: 8,
            address: "0xD5c40f5144848Bd4EF08a9605d860e727b991513",
        },
        "USDT/USD": {
            decimals: 8,
            address: "0xB97Ad0E74fa7d920791E90258A6E2085088b4320",
        },
        "VAI/USD": {
            decimals: 8,
            address: "0x058316f8Bb13aCD442ee7A216C7b60CFB4Ea1B53",
        },
        "WING/USD": {
            decimals: 8,
            address: "0xf7E7c0ffCB11dAC6eCA1434C67faB9aE000e10a7",
        },
        "WOO/USD": {
            decimals: 8,
            address: "0x02Bfe714e78E2Ad1bb1C2beE93eC8dc5423B66d4",
        },
        "WTI/USD": {
            decimals: 8,
            address: "0xb1BED6C1fC1adE2A975F54F24851c7F410e27718",
        },
        "XAG/USD": {
            decimals: 8,
            address: "0x817326922c909b16944817c207562B25C4dF16aD",
        },
        "XAU/USD": {
            decimals: 8,
            address: "0x86896fEB19D8A607c3b11f2aF50A0f239Bd71CD0",
        },
        "XRP/BNB": {
            decimals: 18,
            address: "0x798A65D349B2B5E6645695912880b54dfFd79074",
        },
        "XRP/USD": {
            decimals: 8,
            address: "0x93A67D414896A280bF8FFB3b389fE3686E014fda",
        },
        "XTZ/BNB": {
            decimals: 18,
            address: "0x8264d6983B219be65C4D62f1c82B3A2999944cF2",
        },
        "XTZ/USD": {
            decimals: 8,
            address: "0x9A18137ADCF7b05f033ad26968Ed5a9cf0Bf8E6b",
        },
        "XVS/USD": {
            decimals: 8,
            address: "0xBF63F430A79D4036A5900C19818aFf1fa710f206",
        },
        "YFI/BNB": {
            decimals: 8,
            address: "0xF841761481DF19831cCC851A54D8350aE6022583",
        },
        "YFI/USD": {
            decimals: 8,
            address: "0xD7eAa5Bf3013A96e3d515c055Dbd98DbdC8c620D",
        },
        "YFII/USD": {
            decimals: 8,
            address: "0xC94580FAaF145B2FD0ab5215031833c98D3B77E4",
        },
        "ZIL/USD": {
            decimals: 8,
            address: "0x3e3aA4FC329529C8Ab921c810850626021dbA7e6",
        },
    },
};

ChainlinkAddresses["local-mainnet"] = ChainlinkAddresses["mainnet"];
ChainlinkAddresses["local-testnet"] = ChainlinkAddresses["testnet"];

// Contract ABI
const ChainlinkV3Interface = [
    {
        inputs: [],
        name: "decimalss",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "description",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "getRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
];

function getChainlinkPair(base, quote, network) {
    return ChainlinkAddresses[network][`${base}/${quote}`];
}

module.exports = {
    getChainlinkPair,
    ChainlinkV3Interface,
};
