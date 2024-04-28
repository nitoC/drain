import { CssBaseline, GeistProvider } from '@geist-ui/core';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
// @ts-ignore
import '../styles/globals.css';

// Imports
import {
  configureChains,
  createConfig,
  mainnet,
  // createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { arbitrum, bsc, gnosis, optimism, polygon } from 'viem/chains';
import { z } from 'zod';
import { useIsMounted } from '../hooks';

const walletConnectProjectId = z
  .string()
  .parse(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID);

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, bsc, gnosis],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'Drain',
  projectId: walletConnectProjectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider coolMode chains={chains}>
          <NextHead>
            <title>
              Moonbeam | Cross&#x2d;Chain Connected Smart Contract Platform
            </title>
            <meta
              name="description"
              content="Send all tokens from one wallet to another"
            />
            <link rel="icon" href="/favicon.ico" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
            />
          </NextHead>
          <GeistProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </GeistProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default App;
