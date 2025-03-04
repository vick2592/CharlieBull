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
  // const aiRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  // config.ts
  const config: AppConfig = {
    integratorId: "squid-swap-widget-v2",
    theme: {
      borderRadius: {
        "button-lg-primary": "1.25rem",
        "button-lg-secondary": "1.25rem",
        "button-lg-tertiary": "1.25rem",
        "button-md-primary": "0.9375rem",
        "button-md-secondary": "0.9375rem",
        "button-md-tertiary": "0.9375rem",
        container: "1.25rem",
        input: "0.9375rem",
        "menu-sm": "0.65rem",
        "menu-lg": "0.65rem",
        modal: "1.25rem",
      },
      fontSize: {
        caption: "0.875rem",
        "body-small": "1.14375rem",
        "body-medium": "1.40625rem",
        "body-large": "1.75625rem",
        "heading-small": "2.1875rem",
        "heading-medium": "3.08125rem",
        "heading-large": "4.40625rem",
      },
      fontWeight: {
        caption: "400",
        "body-small": "400",
        "body-medium": "400",
        "body-large": "400",
        "heading-small": "400",
        "heading-medium": "400",
        "heading-large": "400",
      },
      fontFamily: {
        "squid-main": "Geist, sans-serif",
      },
      boxShadow: {
        container: "0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px 5px 50px -1px rgba(0, 0, 0, 0.33)",
      },
      color: {
        "grey-100": "#FBFBFD",
        "grey-200": "#EDEFF3",
        "grey-300": "#eaeaea",
        "grey-400": "#A7ABBE",
        "grey-500": "#d5d5d5",
        "grey-600": "#929292",
        "grey-700": "#4C515D",
        "grey-800": "#005392",
        "grey-900": "#521b92",
        "royal-300": "#D9BEF4",
        "royal-400": "#B893EC",
        "royal-500": "#9E79D2",
        "royal-600": "#8353C5",
        "royal-700": "#6B45A1",
        "status-positive": "#7AE870",
        "status-negative": "#FF4D5B",
        "status-partial": "#F3AF25",
        "highlight-700": "#E4FE53",
        "animation-bg": "#9E79D2",
        "animation-text": "#FBFBFD",
        "button-lg-primary-bg": "#9E79D2",
        "button-lg-primary-text": "#FBFBFD",
        "button-lg-secondary-bg": "#FBFBFD",
        "button-lg-secondary-text": "#292C32",
        "button-lg-tertiary-bg": "#292C32",
        "button-lg-tertiary-text": "#D1D6E0",
        "button-md-primary-bg": "#9E79D2",
        "button-md-primary-text": "#FBFBFD",
        "button-md-secondary-bg": "#FBFBFD",
        "button-md-secondary-text": "#292C32",
        "button-md-tertiary-bg": "#292C32",
        "button-md-tertiary-text": "#D1D6E0",
        "input-bg": "#919191",
        "input-placeholder": "#d5d5d5",
        "input-text": "#D1D6E0",
        "input-selection": "#D1D6E0",
        "menu-bg": "#000000",
        "menu-text": "#FBFBFDA8",
        "menu-backdrop": "#FBFBFD1A",
        "modal-backdrop": "#17191C54",
      },
    },
    themeType: "dark",
    apiUrl: "https://apiplus.squidrouter.com",
    priceImpactWarnings: {
      warning: 3,
      critical: 5,
    },
    initialAssets: {
      from: {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        chainId: "1",
      },
    },
    degenMode: true, // Added and enabled the new property
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
            <div className="text-4xl text-center m-1">Welcome to Charlie Bull,</div>
            <div className="text-4xl text-center font-bold">The first Cross-Chain AI pup on Ethereum!</div>
          </div>
        </div>

        <div className="flex justify-center px-5 mb-10">
          <Image
            src="/PantingCharlie2.gif"
            alt="Charlie Panting"
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

      <hr className="border-t-2 border-secondary w-full" />

      <section id="buy-it-now" ref={howToBuyRef} className="pt-20 lg:pt-10">
        <div className="px-5">
          <div className="text-4xl text-center font-bold">Buy it Now</div>
          <div className="flex justify-center items-center pt-10">
            <div className="block lg:hidden">
              <RainbowKitCustomConnectButton />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-lg font-semibold p-5">Charlie Bull Token address:</p>
              <Address address="0x5FbDB2315678afecb367f032d93F642f64180aa3" disableAddressLink={true} format="short" />
            </div>
          </div>
          <div id="SquidWidget" className="flex justify-center items-center p-20">
            <SquidWidget
              config={config} // Use the config object
            />
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

      {/* <hr className="border-t-2 border-secondary w-full" />

      <section id="ai-integration" ref={aiRef} className="pt-20 lg:pt-10">
        <div className="px-5">
          <div className="text-4xl text-center font-bold">Charlie X AI16Z</div>
        </div>
      </section> */}

      <hr className="border-t-2 border-secondary w-full mt-10" />

      <section id="tokenomics" ref={tokenomicsRef} className="pt-20 lg:pt-10">
        <div className="text-4xl pb-5 text-center font-bold">Tokenomics</div>
        <div className="flex justify-center">
          <Image
            src="/Tokenomics.png"
            alt="Tokenomics"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto max-w-md"
          />
        </div>
        <div className="text-4xl text-center pt-2.5 italic">Ouch, Charlie!</div>
        <div className="text-4xl text-center pb-2.5 italic">That really hurt.</div>
        <div className="flex justify-center">
          <Image
            src="/OuchCharlie.png"
            alt="Charlie Baby"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto max-w-md"
          />
        </div>
      </section>

      <hr className="border-t-2 border-secondary w-full mt-10" />
      {/* <section id="roadmap" ref={roadmapRef} className="pt-[var(--header-height)] lg:pt-10"> */}
      <section id="roadmap" ref={roadmapRef} className="pt-20 lg:pt-10">
        <div className="w-full px-5">
          <div className="text-4xl text-center pb-5 font-bold">Roadmap</div>
          <div className="text-4xl text-center p-5 italic">Step 1: Buy</div>
          <div className="text-4xl text-center p-5 italic">Step 2: HODL</div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col items-center">
              <Image
                src="/WaggingCharlie.gif"
                alt="Charlie Bull Wagging Tail"
                width={600}
                height={600}
                className="rounded-lg w-full h-auto max-w-md"
                unoptimized
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
