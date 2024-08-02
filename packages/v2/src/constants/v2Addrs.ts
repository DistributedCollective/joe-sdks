import { Hex } from 'viem'
import { ChainId } from '@sovryn/joe-core'

/**
 * DEX v2 SDK
 */
export const MULTICALL_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.AVALANCHE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ARBITRUM_ONE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ARB_GOERLI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BNB_CHAIN]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BNB_TESTNET]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ETHEREUM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.MANTLE]: '0xcA11bde05977b3631167028862bE2a173976CA11'
}

export const LB_QUOTER_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x2644fE413b8Fe94D69c4706455108368fa36354F',
  [ChainId.AVALANCHE]: '0x9dbf1706577636941ab5f443d2aebe251ccd1648',
  [ChainId.ARBITRUM_ONE]: '0x7f281f22eDB332807A039073a7F34A4A215bE89e',
  [ChainId.ARB_GOERLI]: '0x42B0D9a10ee9B96a599C98a618205d0288636762',
  [ChainId.BNB_CHAIN]: '0x89c71F2065aA505956a86FCadAE4a625A5b5e842',
  [ChainId.BNB_TESTNET]: '0x0996216AE051fE4B1d3258fE75b682E75d66E4C0',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_QUOTER_V21_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0xd76019A16606FDa4651f636D9751f500Ed776250',
  [ChainId.AVALANCHE]: '0xd76019A16606FDa4651f636D9751f500Ed776250',
  [ChainId.ARBITRUM_ONE]: '0xd76019A16606FDa4651f636D9751f500Ed776250',
  [ChainId.ARB_GOERLI]: '0xd76019A16606FDa4651f636D9751f500Ed776250',
  [ChainId.BNB_CHAIN]: '0xd76019A16606FDa4651f636D9751f500Ed776250',
  [ChainId.BNB_TESTNET]: '0xd76019A16606FDa4651f636D9751f500Ed776250',
  [ChainId.ETHEREUM]: '0x4d6Dbd1b52807C71b9a148E222b167247a7cA789',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_QUOTER_V22_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x9A550a522BBaDFB69019b0432800Ed17855A51C3',
  [ChainId.AVALANCHE]: '0x9A550a522BBaDFB69019b0432800Ed17855A51C3',
  [ChainId.ARBITRUM_ONE]: '0x9A550a522BBaDFB69019b0432800Ed17855A51C3',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0xE25Dc29b856D5A6dF45B5D854ccF9223D716f46d'
}

export const LB_ROUTER_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x7b50046cEC8252ca835b148b1eDD997319120a12',
  [ChainId.AVALANCHE]: '0xE3Ffc583dC176575eEA7FD9dF2A7c65F7E23f4C3',
  [ChainId.ARBITRUM_ONE]: '0x7BFd7192E76D950832c77BB412aaE841049D8D9B',
  [ChainId.ARB_GOERLI]: '0x6E9603f925FB5A74f7321f51499d9633c1252893',
  [ChainId.BNB_CHAIN]: '0xb66A2704a0dabC1660941628BE987B4418f7a9E8',
  [ChainId.BNB_TESTNET]: '0xf7C6d73336f333b63144644944176072D94128F5',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_ROUTER_V21_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30',
  [ChainId.AVALANCHE]: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30',
  [ChainId.ARBITRUM_ONE]: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30',
  [ChainId.ARB_GOERLI]: '0x095EEe81B0eC73797424d67e24adab20D5A5D307',
  [ChainId.BNB_CHAIN]: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30',
  [ChainId.BNB_TESTNET]: '0x8FABE13D95F28f7478Dc655d8D4BA99935D50e02',
  [ChainId.ETHEREUM]: '0x9A93a421b74F1c5755b83dD2C211614dC419C44b',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_ROUTER_V22_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x18556DA13313f3532c54711497A8FedAC273220E',
  [ChainId.AVALANCHE]: '0x18556DA13313f3532c54711497A8FedAC273220E',
  [ChainId.ARBITRUM_ONE]: '0x18556DA13313f3532c54711497A8FedAC273220E',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0xAFb85a12Babfafabfe1a518594492d5a830e782a'
}

export const LB_FACTORY_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x6B8E020098cd1B3Ec9f811024bc24e51C660F768',
  [ChainId.AVALANCHE]: '0x6E77932A92582f504FF6c4BdbCef7Da6c198aEEf',
  [ChainId.ARBITRUM_ONE]: '0x1886D09C9Ade0c5DB822D85D21678Db67B6c2982',
  [ChainId.ARB_GOERLI]: '0xC8Af41e49e2C03eA14706C7aa9cEE60454bc5c03',
  [ChainId.BNB_CHAIN]: '0x43646A8e839B2f2766392C1BF8f60F6e587B6960',
  [ChainId.BNB_TESTNET]: '0xE082a032Fa1cE68b24594bee0fC57DfE819D107c',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_FACTORY_V21_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.AVALANCHE]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.ARBITRUM_ONE]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.ARB_GOERLI]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.BNB_CHAIN]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.BNB_TESTNET]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.ETHEREUM]: '0xDC8d77b69155c7E68A95a4fb0f06a71FF90B943a',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_FACTORY_V22_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0xb43120c4745967fa9b93E79C149E66B0f2D6Fe0c',
  [ChainId.AVALANCHE]: '0xb43120c4745967fa9b93E79C149E66B0f2D6Fe0c',
  [ChainId.ARBITRUM_ONE]: '0xb43120c4745967fa9b93E79C149E66B0f2D6Fe0c',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0xa6630671775c4EA2743840F9A5016dCf2A104054'
}

export const DEXLENS_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.AVALANCHE]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.ARBITRUM_ONE]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.ARB_GOERLI]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.BNB_CHAIN]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.BNB_TESTNET]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.ETHEREUM]: '0x3008D2C0A3b7C676ff8bd948fdE9B5fC6a26A56f',
  [ChainId.MANTLE]: '0x511914365607075C12696b713F3Eda20F27a86B3'
}

export const LB_REWARDER_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x3e031f1486a27c997e85c5a2af2638ee3a4c28a1',
  [ChainId.AVALANCHE]: '0x624C5b9BEB13af6893e715932c26e2b7A59c410a',
  [ChainId.ARBITRUM_ONE]: '0x624C5b9BEB13af6893e715932c26e2b7A59c410a',
  [ChainId.ARB_GOERLI]: '0x3ca426d8743d46b99814cbf0929912a3ae398238',
  [ChainId.BNB_CHAIN]: '0x624C5b9BEB13af6893e715932c26e2b7A59c410a',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const VAULT_FACTORY_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xA3D87597fDAfC3b8F3AC6B68F90CD1f4c05Fa960',
  [ChainId.ARBITRUM_ONE]: '0xA3D87597fDAfC3b8F3AC6B68F90CD1f4c05Fa960',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0xA3D87597fDAfC3b8F3AC6B68F90CD1f4c05Fa960',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0xA3D87597fDAfC3b8F3AC6B68F90CD1f4c05Fa960'
}

export const LIQUIDITY_AMOUNTS_HELPER_ADDRESS: {
  [chainId in ChainId]: Hex
} = {
  [ChainId.FUJI]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.AVALANCHE]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.ARBITRUM_ONE]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.ARB_GOERLI]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.BNB_CHAIN]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.BNB_TESTNET]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.ETHEREUM]: '0x01A0f1D2a6E123b8ff909A2DdcE124973DAC121a',
  [ChainId.MANTLE]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D'
}

export const LIMIT_ORDER_MANAGER_ADDRESS: {
  [chainId in ChainId]: Hex
} = {
  [ChainId.FUJI]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D',
  [ChainId.AVALANCHE]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D',
  [ChainId.ARBITRUM_ONE]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D',
  [ChainId.ARB_GOERLI]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D',
  [ChainId.BNB_CHAIN]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D',
  [ChainId.BNB_TESTNET]: '0x46bA84780f9a7b34C8B0E24Df07a260Fa952195D',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const APT_FARM_LENS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x92a11f6E3d8b907F29d540E76D3C10Caa50279e6',
  [ChainId.AVALANCHE]: '0xeb84FA19b7912Fe2821f9fA4f5717A311B776C63',
  [ChainId.ARBITRUM_ONE]: '0xeb84FA19b7912Fe2821f9fA4f5717A311B776C63',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0xeb84FA19b7912Fe2821f9fA4f5717A311B776C63',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x0000000000000000000000000000000000000000'
}

export const LB_HOOKS_LENS_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x6124086B90AB910038E607aa1BDD67b284C31c98',
  [ChainId.AVALANCHE]: '0x6124086B90AB910038E607aa1BDD67b284C31c98',
  [ChainId.ARBITRUM_ONE]: '0x6124086B90AB910038E607aa1BDD67b284C31c98',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000000',
  [ChainId.MANTLE]: '0x93185784e04D8B5a0aDe98d80C48AA06B9689Ee8'
}
