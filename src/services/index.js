import onboard from 'bnc-onboard'
import notify from 'bnc-notify'
import Web3 from 'web3'

const INFURA_KEY = '16dfd66c4a1a4a9da5724254c97c93e6'
const BLOCKNATIVE_KEY = 'ac2e16a1-29ee-4bd1-be1e-9f2ecf668c24'
const NETWORK_ID = 3 //1

const wallets = [
  { walletName: 'metamask', preferred: true },
  {
    walletName: 'walletConnect',
    infuraKey: INFURA_KEY,
    preferred: true
  },
  {
    walletName: 'portis',
    apiKey: 'd7d72646-709a-45ab-aa43-8de5307ae0df',
    preferred: true
  },
  {
    walletName: 'fortmatic',
    apiKey: 'pk_test_886ADCAB855632AA',
    preferred: true
  },
  { walletName: 'coinbase', preferred: true },
  //   { walletName: 'authereum', preferred: true, disableNotifications: true },
  { walletName: 'torus', preferred: true },
  { walletName: 'trust', preferred: true }
]

const walletChecks = [
  { checkName: 'connect' },
  { checkName: 'accounts' },
  { checkName: 'network' },
  { checkName: 'balance', minimumBalance: '0' }
]

export function initOnboard (subscriptions) {
  return onboard({
    dappId: BLOCKNATIVE_KEY,
    networkId: NETWORK_ID,
    subscriptions,
    walletSelect: {
      wallets: wallets
    },
    walletCheck: walletChecks
  })
}

export function initNotify () {
  return notify({
    dappId: BLOCKNATIVE_KEY,
    networkId: NETWORK_ID,
    desktopPosition: 'topRight'
  })
}
