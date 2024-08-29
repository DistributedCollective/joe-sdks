import { ChainId } from '@sovryn/joe-core'

export const DEX_V2_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2',
  [ChainId.ARBITRUM_ONE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-arbitrum',
  [ChainId.ARB_GOERLI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-arb-goerli',
  [ChainId.BNB_CHAIN]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-bnb',
  [ChainId.BNB_TESTNET]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-bnbtest',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BOB_TESTNET_LEGACY]: 'http://localhost:8000/subgraphs/name/joe-v2',
  [ChainId.BOB_TESTNET]:
    'https://bob-joe-subgraph.sovryn.app/subgraphs/name/joe-v2'
}

export const DEXCANDLES_SUBGRAPH_V2: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dex-candles-v2-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dex-candles-v2',
  [ChainId.ARBITRUM_ONE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-v2-arbitrum',
  [ChainId.ARB_GOERLI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-v2-arb-goerli',
  [ChainId.BNB_CHAIN]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-v2-bnb',
  [ChainId.BNB_TESTNET]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-v2-bnbtest',
  [ChainId.ETHEREUM]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-v2-eth',
  [ChainId.MANTLE]: '',
  [ChainId.BOB_TESTNET_LEGACY]: '',
  [ChainId.BOB_TESTNET]: ''
}
