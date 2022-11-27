import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import {
  // ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {SiBlockchaindotcom} from "react-icons/si"

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum,chain.goerli, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [chain.goerli] : [])],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID })]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
