require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain hour gesture forest force section'; 
let testAccounts = [
"0xfce281b5ecb1300dd4e55cde146aaa8f64f36e3556b0e3e6df57ad50392d0948",
"0xad5e129f4575c02d4ad0df7e3b360ebd0191e46113726ef3368c8f0c0e254173",
"0x5f4d8484a9a8402bd8cb76f300f7c2b9fcc2df08081e85be2549510acbad95c6",
"0x5a8ef9a45ff98b9b47dba0e60d229e72a16e8498b5991078fa4349eb609b313e",
"0xcd9e96b39667fb9c6b05f7ee4e7a997b052882d1e491251e5a64469934dc8ffc",
"0xe3d1291c24bdb71c9d06fa02ccc9ee6574bb7a5aa9b1645cdf8b87454f1229a2",
"0xc098721bebb7022916b65467887b389fabe14a6638dbb766269c106640a44638",
"0x3538783db164c5ccc43166d8237cecf3d579b092fb4792b4288afafd1ccb008c",
"0x46c89207f422497a78914de3e23fa64b61b0ec26b47a716a608ada980d8a1046",
"0x3e898b0740d5b7597a13fd6cb4955640938b49df711bc7482b6616989d2e60a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

