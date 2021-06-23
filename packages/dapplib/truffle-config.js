require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note muscle code install casino slot giant'; 
let testAccounts = [
"0xb7f5d470b97ff08d1fabca6040776f3df22cbd9dbe01577b56fc84fff7a13cb4",
"0xc1006b979ae7bb141cda0d9b7530635fa538dc2f894ecf5cec0fbe8f6fe4cca3",
"0x085fc70c87b4970d2319a05b621a8b04692aaa8bbc978aa93b8a8bfb75e6e8c6",
"0xe9ede0e1df034911e0877b2bca8fe33e0be67d13816918b7cdfb1dd32f580517",
"0x100f21e37ebf4be5546c33343720ef0770778b94485233771b6c05e75d6e8ebf",
"0xd80d1a2248eed560cb4095952933b5cea44788c8998b98543ee59bde3d72762f",
"0x401489e3995d0768b1d267a6ccd7c8a893c14b8e84e47b60bcd3867a12e113f7",
"0xfade98e3f5cade83d10a47e22c067a10d8045c74b72df7496bd7666b60ee6cb9",
"0xbc7194ac70b3f679f0d5241f72338c3eb5df655b464de773d2419f1cf162ac35",
"0x679527a85de6d8ba1a2b52aba0706d7f5c890e7b947534cb3671cba109456a15"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

