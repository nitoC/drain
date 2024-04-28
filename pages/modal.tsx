'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Modal() {
  useEffect(() => {
    const button = document.querySelector('button');

    if (button) {
      console.log(button);
      button.click();
      button.addEventListener('click', () => console.log('click'));
      true;
    }
  }, []);
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
          padding: '5rem',
          minHeight: '40vh',
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
      ></main>
      {/* <GetTokens />
    <SendTokens /> */}
    </div>
  );
}
