import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import { useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl } from '@solana/web3.js'

function MyApp({ Component, pageProps }: AppProps) {
  const wallets = [new PhantomWalletAdapter()]

  const [endpoint, setEndPoint] = useState(clusterApiUrl('devnet'))

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default MyApp;
