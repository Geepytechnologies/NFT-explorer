import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Navbar } from '../components/Navbar';
import Hero from '../components/Hero';
import Topcollections from '../components/Topcollections';
import Footer from '../components/Footer';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID })]
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


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT hub</title>
        <meta name="description" content="Super NFT Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Topcollections />
      <Footer />
    </div>
  )
}
