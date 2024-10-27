"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AppConfig } from "../types/types";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

// Import the AppConfig interface

// Dynamically import SquidWidget with SSR disabled
const SquidWidget = dynamic(() => import("@0xsquid/widget").then(mod => mod.SquidWidget), { ssr: false });

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();
  const homeRef = useRef<HTMLDivElement>(null);
  const howToBuyRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  const config: AppConfig = {
    integratorId: process.env.NEXT_PUBLIC_SQUID || "", // Use the environment variable
    companyName: "Charlie",
    infiniteApproval: false,
    enableExpress: true,
    apiUrl: "https://apiplus.squidrouter.com/",
    comingSoonChainIds: [],
    titles: {
      swap: "Swap",
      settings: "Settings",
      wallets: "Wallets",
      tokens: "Select Token",
      chains: "Select Chain",
      history: "History",
      transaction: "Transaction",
      allTokens: "Select Token",
      destination: "Destination address",
      depositAddress: "Deposit address",
      seimetamask: "Important message!",
    },
    priceImpactWarnings: {
      warning: 3,
      critical: 5,
    },
    environment: "mainnet",
    showOnRampLink: true,
    defaultTokens: [],
    styleType: "dark",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    [homeRef, howToBuyRef, tokenomicsRef, roadmapRef, logoContainerRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);

        if (ref.current.getBoundingClientRect().top < window.innerHeight) {
          ref.current.classList.add("fade-in");
          observer.unobserve(ref.current);
        }
      }
    });

    return () => {
      [homeRef, howToBuyRef, tokenomicsRef, roadmapRef, logoContainerRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-base-100 flex flex-col flex-grow">
      <section id="home" ref={homeRef} className="pt-[calc(var(--header-height)+2.5rem)] lg:pt-10">
        <div className="flex flex-col mt-10 items-center">
          <h1 className="text-center rounded-lg">
            <span className="font-creambeige font-bold leading-tight text-5xl">$CHAR</span>
          </h1>
          <div className="mx-5 md:mx-20 p-3 text-center">
            <div className="text-4xl text-center">Welcome to Charlie Cat,</div>
            <div className="text-4xl text-center font-bold">The first Cross-Chain meme coin!</div>
          </div>
        </div>

        <div className="flex justify-center px-5 mb-10 ml-20">
          <Image
            src="/CharleyRelaxing.gif"
            alt="Charlie Laying"
            width={400}
            height={400}
            className="rounded-lg h-auto"
            unoptimized // Add this property
          />
        </div>

        <div className="flex justify-center items-center" ref={logoContainerRef}>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/ETHLogo.png"
              alt="Ethereum Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-60"
            />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/AvaxLogo.png"
              alt="Avalanche Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-60"
            />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/ArbLogo.png"
              alt="Arbitrum Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-60"
            />
          </a>
        </div>
        <div className="flex justify-center items-center mt-10" ref={logoContainerRef}>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/MantleLogo.png"
              alt="Mantle Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-60"
            />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image src="/BaseLogo.png" alt="Base Logo" width={75} height={75} className="rounded-lg mx-5 opacity-60" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/LineaLogo.png"
              alt="Linea Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-60"
            />
          </a>
        </div>
        <div className="flex justify-center items-center mt-10 mb-20" ref={logoContainerRef}>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/BlastLogo.png"
              alt="Blast Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-60"
            />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/PolLogo.png"
              alt="Polygon Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-75"
            />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/BNBLogo.png"
              alt="Binance Chain Logo"
              width={75}
              height={75}
              className="rounded-lg mx-5 opacity-75"
            />
          </a>
        </div>
      </section>

      <hr className="border-t-2 border-blue-700 w-full" />

      <section id="how-to-buy" ref={howToBuyRef} className="pt-20 lg:pt-10">
        <div className="px-5">
          <div className="text-4xl text-center font-bold">Buy it now</div>
          <div className="flex justify-center items-center pt-10">
            <div className="block lg:hidden">
              <RainbowKitCustomConnectButton />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-lg font-semibold p-5">Token address:</p>
              <Address address="0x5FbDB2315678afecb367f032d93F642f64180aa3" disableAddressLink={true} format="short" />
            </div>
          </div>
          <div className="flex justify-center items-center p-20">
            <SquidWidget
              config={config} // Use the config object
            />
            {/* <SquidWidget
              config={{
                integratorId: process.env.NEXT_PUBLIC_SQUID || "", // Use the environment variable
                slippage: 3,
              }}
            /> */}
          </div>
          <div className="flex justify-center items-center pb-10" ref={logoContainerRef}>
            <div className="text-3xl text-gray-600 dark:text-gray-300">Powered by</div>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/AxelarLogo.png"
                alt="Axelar Logo"
                width={75}
                height={75}
                className="rounded-lg mx-5 opacity-85"
              />
            </a>
            <div className="text-3xl text-gray-600 dark:text-gray-300"> & </div>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/SquidLogo.png"
                alt="Squid Logo"
                width={75}
                height={75}
                className="rounded-lg mx-5 opacity-85"
              />
            </a>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-blue-700 w-full mt-10" />

      <section id="tokenomics" ref={tokenomicsRef} className="pt-20 lg:pt-10">
        <div className="text-4xl pb-5 text-center font-bold">Tokenomics</div>
        <div>
          <Image src="/Tokenomics.png" alt="Tokenomics" width={600} height={600} className="rounded-lg w-full h-auto" />
        </div>
        <div className="text-4xl text-center pt-2.5 italic">Owe, Charlie!</div>
        <div className="text-4xl text-center pb-2.5 italic">That really hurt.</div>
        <div>
          <Image
            src="/CharlieBaby2.jpg"
            alt="Charlie Baby"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </section>

      <hr className="border-t-2 border-blue-700 w-full mt-10" />

      {/* <section id="roadmap" ref={roadmapRef} className="pt-[var(--header-height)] lg:pt-10"> */}
      <section id="roadmap" ref={roadmapRef} className="pt-20 lg:pt-10">
        <div className="w-full px-5">
          <div className="text-4xl text-center pb-5 font-bold">Roadmap</div>
          <div className="text-4xl text-center p-5 italic">Step 1: Buy</div>
          <div className="text-4xl text-center p-5 italic">Step 2: HODL</div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col items-center">
              <Image
                src="/CharlieWaging.gif"
                alt="Charlie Cat Sitting"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="text-4xl text-center p-5 italic">Step 3: Lambo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
