'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import Image from 'next/image';
import Link from 'next/link';

export default function Address() {
  return (
    <div className={''}>
      <header
        style={{
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          id="logo"
          href="/"
          data-supplied-ml-starting-dark="false"
          data-supplied-ml-starting="false"
          data-supplied-ml="false"
        >
          <Image
            width={200}
            height={100}
            alt="Moonbeam"
            src="/wp-content/uploads/2020/03/Moonbeam-Logo-Final-500px.png"
          />
        </Link>
        <Link href="/">Back</Link>
      </header>
      <div
        style={{
          padding: '2rem',
          minHeight: '5vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ConnectButton />
      </div>

      <main
        style={{
          minHeight: '60vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GetTokens />
        <SendTokens />
      </main>
    </div>
  );
}
