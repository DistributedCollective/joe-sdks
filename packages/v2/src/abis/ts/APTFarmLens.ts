export const APTFarmLensABI = [
  {
    inputs: [
      {
        internalType: 'contract IVaultFactory',
        name: '_vaultFactory',
        type: 'address'
      },
      {
        internalType: 'contract IAPTFarm',
        name: '_aptFarm',
        type: 'address'
      },
      {
        internalType: 'contract IJoeDexLens',
        name: '_dexLens',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'aptFarm',
    outputs: [{ internalType: 'contract IAPTFarm', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'dexLens',
    outputs: [
      { internalType: 'contract IJoeDexLens', name: '', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllVaults',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IBaseVault',
            name: 'vault',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.VaultType',
            name: 'vaultType',
            type: 'uint8'
          },
          {
            internalType: 'contract IStrategy',
            name: 'strategy',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.StrategyType',
            name: 'strategyType',
            type: 'uint8'
          },
          {
            internalType: 'bool',
            name: 'isDepositsPaused',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'isInEmergencyMode',
            type: 'bool'
          },
          { internalType: 'address', name: 'lbPair', type: 'address' },
          {
            internalType: 'uint256',
            name: 'lbPairBinStep',
            type: 'uint256'
          },
          { internalType: 'address', name: 'tokenX', type: 'address' },
          { internalType: 'address', name: 'tokenY', type: 'address' },
          {
            internalType: 'uint256',
            name: 'tokenXBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'tokenYBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vaultBalanceUSD',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'hasFarm', type: 'bool' },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'farmId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'joePerSec',
                type: 'uint256'
              },
              {
                internalType: 'contract IRewarder',
                name: 'rewarder',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'aptBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aptBalanceUSD',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmData',
            name: 'farmData',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultData[]',
        name: 'vaultsData',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getAllVaultsIncludingUserInfo',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract IBaseVault',
                name: 'vault',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.VaultType',
                name: 'vaultType',
                type: 'uint8'
              },
              {
                internalType: 'contract IStrategy',
                name: 'strategy',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.StrategyType',
                name: 'strategyType',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'isDepositsPaused',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'isInEmergencyMode',
                type: 'bool'
              },
              {
                internalType: 'address',
                name: 'lbPair',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'lbPairBinStep',
                type: 'uint256'
              },
              {
                internalType: 'address',
                name: 'tokenX',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'tokenY',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'tokenXBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'tokenYBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'totalSupply',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'vaultBalanceUSD',
                type: 'uint256'
              },
              { internalType: 'bool', name: 'hasFarm', type: 'bool' },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              }
            ],
            internalType: 'struct IAPTFarmLens.VaultData',
            name: 'vaultData',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'userBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'userBalanceUSD',
            type: 'uint256'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              },
              {
                internalType: 'uint256',
                name: 'userBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'userBalanceUSD',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingJoe',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingBonusToken',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmDataWithUserInfo',
            name: 'farmDataWithUserInfo',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultDataWithUserInfo[]',
        name: 'vaultsDataWithUserInfo',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllVaultsWithFarms',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IBaseVault',
            name: 'vault',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.VaultType',
            name: 'vaultType',
            type: 'uint8'
          },
          {
            internalType: 'contract IStrategy',
            name: 'strategy',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.StrategyType',
            name: 'strategyType',
            type: 'uint8'
          },
          {
            internalType: 'bool',
            name: 'isDepositsPaused',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'isInEmergencyMode',
            type: 'bool'
          },
          { internalType: 'address', name: 'lbPair', type: 'address' },
          {
            internalType: 'uint256',
            name: 'lbPairBinStep',
            type: 'uint256'
          },
          { internalType: 'address', name: 'tokenX', type: 'address' },
          { internalType: 'address', name: 'tokenY', type: 'address' },
          {
            internalType: 'uint256',
            name: 'tokenXBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'tokenYBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vaultBalanceUSD',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'hasFarm', type: 'bool' },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'farmId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'joePerSec',
                type: 'uint256'
              },
              {
                internalType: 'contract IRewarder',
                name: 'rewarder',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'aptBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aptBalanceUSD',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmData',
            name: 'farmData',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultData[]',
        name: 'farmsData',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getAllVaultsWithFarmsIncludingUserInfo',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract IBaseVault',
                name: 'vault',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.VaultType',
                name: 'vaultType',
                type: 'uint8'
              },
              {
                internalType: 'contract IStrategy',
                name: 'strategy',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.StrategyType',
                name: 'strategyType',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'isDepositsPaused',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'isInEmergencyMode',
                type: 'bool'
              },
              {
                internalType: 'address',
                name: 'lbPair',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'lbPairBinStep',
                type: 'uint256'
              },
              {
                internalType: 'address',
                name: 'tokenX',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'tokenY',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'tokenXBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'tokenYBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'totalSupply',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'vaultBalanceUSD',
                type: 'uint256'
              },
              { internalType: 'bool', name: 'hasFarm', type: 'bool' },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              }
            ],
            internalType: 'struct IAPTFarmLens.VaultData',
            name: 'vaultData',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'userBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'userBalanceUSD',
            type: 'uint256'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              },
              {
                internalType: 'uint256',
                name: 'userBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'userBalanceUSD',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingJoe',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingBonusToken',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmDataWithUserInfo',
            name: 'farmDataWithUserInfo',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultDataWithUserInfo[]',
        name: 'farmsDataWithUserInfo',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'enum IVaultFactory.VaultType',
        name: 'vaultType',
        type: 'uint8'
      },
      { internalType: 'uint256', name: 'startId', type: 'uint256' },
      { internalType: 'uint256', name: 'pageSize', type: 'uint256' }
    ],
    name: 'getPaginatedVaultsFromType',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IBaseVault',
            name: 'vault',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.VaultType',
            name: 'vaultType',
            type: 'uint8'
          },
          {
            internalType: 'contract IStrategy',
            name: 'strategy',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.StrategyType',
            name: 'strategyType',
            type: 'uint8'
          },
          {
            internalType: 'bool',
            name: 'isDepositsPaused',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'isInEmergencyMode',
            type: 'bool'
          },
          { internalType: 'address', name: 'lbPair', type: 'address' },
          {
            internalType: 'uint256',
            name: 'lbPairBinStep',
            type: 'uint256'
          },
          { internalType: 'address', name: 'tokenX', type: 'address' },
          { internalType: 'address', name: 'tokenY', type: 'address' },
          {
            internalType: 'uint256',
            name: 'tokenXBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'tokenYBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vaultBalanceUSD',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'hasFarm', type: 'bool' },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'farmId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'joePerSec',
                type: 'uint256'
              },
              {
                internalType: 'contract IRewarder',
                name: 'rewarder',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'aptBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aptBalanceUSD',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmData',
            name: 'farmData',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultData[]',
        name: 'vaultsData',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      {
        internalType: 'enum IVaultFactory.VaultType',
        name: 'vaultType',
        type: 'uint8'
      },
      { internalType: 'uint256', name: 'startId', type: 'uint256' },
      { internalType: 'uint256', name: 'pageSize', type: 'uint256' }
    ],
    name: 'getPaginatedVaultsIncludingUserInfo',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract IBaseVault',
                name: 'vault',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.VaultType',
                name: 'vaultType',
                type: 'uint8'
              },
              {
                internalType: 'contract IStrategy',
                name: 'strategy',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.StrategyType',
                name: 'strategyType',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'isDepositsPaused',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'isInEmergencyMode',
                type: 'bool'
              },
              {
                internalType: 'address',
                name: 'lbPair',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'lbPairBinStep',
                type: 'uint256'
              },
              {
                internalType: 'address',
                name: 'tokenX',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'tokenY',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'tokenXBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'tokenYBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'totalSupply',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'vaultBalanceUSD',
                type: 'uint256'
              },
              { internalType: 'bool', name: 'hasFarm', type: 'bool' },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              }
            ],
            internalType: 'struct IAPTFarmLens.VaultData',
            name: 'vaultData',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'userBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'userBalanceUSD',
            type: 'uint256'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              },
              {
                internalType: 'uint256',
                name: 'userBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'userBalanceUSD',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingJoe',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingBonusToken',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmDataWithUserInfo',
            name: 'farmDataWithUserInfo',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultDataWithUserInfo[]',
        name: 'vaultsDataWithUserInfo',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'startId', type: 'uint256' },
      { internalType: 'uint256', name: 'pageSize', type: 'uint256' }
    ],
    name: 'getPaginatedVaultsWithFarms',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IBaseVault',
            name: 'vault',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.VaultType',
            name: 'vaultType',
            type: 'uint8'
          },
          {
            internalType: 'contract IStrategy',
            name: 'strategy',
            type: 'address'
          },
          {
            internalType: 'enum IVaultFactory.StrategyType',
            name: 'strategyType',
            type: 'uint8'
          },
          {
            internalType: 'bool',
            name: 'isDepositsPaused',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'isInEmergencyMode',
            type: 'bool'
          },
          { internalType: 'address', name: 'lbPair', type: 'address' },
          {
            internalType: 'uint256',
            name: 'lbPairBinStep',
            type: 'uint256'
          },
          { internalType: 'address', name: 'tokenX', type: 'address' },
          { internalType: 'address', name: 'tokenY', type: 'address' },
          {
            internalType: 'uint256',
            name: 'tokenXBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'tokenYBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vaultBalanceUSD',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'hasFarm', type: 'bool' },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'farmId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'joePerSec',
                type: 'uint256'
              },
              {
                internalType: 'contract IRewarder',
                name: 'rewarder',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'aptBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'aptBalanceUSD',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmData',
            name: 'farmData',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultData[]',
        name: 'farmsData',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'startId', type: 'uint256' },
      { internalType: 'uint256', name: 'pageSize', type: 'uint256' }
    ],
    name: 'getPaginatedVaultsWithFarmsIncludingUserInfo',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract IBaseVault',
                name: 'vault',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.VaultType',
                name: 'vaultType',
                type: 'uint8'
              },
              {
                internalType: 'contract IStrategy',
                name: 'strategy',
                type: 'address'
              },
              {
                internalType: 'enum IVaultFactory.StrategyType',
                name: 'strategyType',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'isDepositsPaused',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'isInEmergencyMode',
                type: 'bool'
              },
              {
                internalType: 'address',
                name: 'lbPair',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'lbPairBinStep',
                type: 'uint256'
              },
              {
                internalType: 'address',
                name: 'tokenX',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'tokenY',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'tokenXBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'tokenYBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'totalSupply',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'vaultBalanceUSD',
                type: 'uint256'
              },
              { internalType: 'bool', name: 'hasFarm', type: 'bool' },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              }
            ],
            internalType: 'struct IAPTFarmLens.VaultData',
            name: 'vaultData',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'userBalance',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'userBalanceUSD',
            type: 'uint256'
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'farmId',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'joePerSec',
                    type: 'uint256'
                  },
                  {
                    internalType: 'contract IRewarder',
                    name: 'rewarder',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalance',
                    type: 'uint256'
                  },
                  {
                    internalType: 'uint256',
                    name: 'aptBalanceUSD',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct IAPTFarmLens.FarmData',
                name: 'farmData',
                type: 'tuple'
              },
              {
                internalType: 'uint256',
                name: 'userBalance',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'userBalanceUSD',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingJoe',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'pendingBonusToken',
                type: 'uint256'
              }
            ],
            internalType: 'struct IAPTFarmLens.FarmDataWithUserInfo',
            name: 'farmDataWithUserInfo',
            type: 'tuple'
          }
        ],
        internalType: 'struct IAPTFarmLens.VaultDataWithUserInfo[]',
        name: 'farmsDataWithUserInfo',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vaultFactory',
    outputs: [
      {
        internalType: 'contract IVaultFactory',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const
