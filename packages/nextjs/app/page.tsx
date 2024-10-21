"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const homeRef = useRef<HTMLDivElement>(null);
  const howToBuyRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

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
            <div className="text-4xl">Welcome to Charlie Cat. He is lovable, but watch out, </div>
            <div className="text-4xl italic">HE MAY BITE!</div>
          </div>
        </div>

        <div className="flex justify-center px-5 mb-10 mt-20 ml-20">
          <Image
            src="/CharlieLayingFlipped.png"
            alt="Charlie Laying"
            width={250}
            height={250}
            className="rounded-lg h-auto"
          />
        </div>
      </section>

      <hr className="border-t-2 border-blue-700 w-full" />

      <section id="how-to-buy" ref={howToBuyRef} className="pt-20 lg:pt-10">
        <div className="px-5">
          <div className="flex justify-center items-center mt-10" ref={logoContainerRef}>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/KrakenLogo.png"
                alt="Kraken Logo"
                width={75}
                height={75}
                className="rounded-lg mx-5 opacity-60"
              />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image src="/HTXLogo.png" alt="HTX Logo" width={75} height={75} className="rounded-lg mx-5 opacity-60" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/ByBitLogo.png"
                alt="ByBit Logo"
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
              <Image
                src="/AgniLogo.png"
                alt="Agni Logo"
                width={75}
                height={75}
                className="rounded-lg mx-5 opacity-60"
              />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/FusionXLogo.png"
                alt="Fusion X Logo"
                width={75}
                height={75}
                className="rounded-lg mx-5 opacity-60"
              />
            </a>
          </div>
          <div className="mt-10 p-4">
            <h1 className="text-center p-4 rounded-lg">
              <span className="block text-3xl font-bold">Owe, Charlie bit me!</span>
            </h1>
          </div>
          <div>
            <Image
              src="/charliebabie.jpg"
              alt="Charlie Baby"
              width={600}
              height={600}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-blue-700 w-full mt-10" />

      <section id="tokenomics" ref={tokenomicsRef} className="pt-[var(--header-height)] lg:pt-10">
        <div className="w-full px-5 py-10">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col items-center">
              <Image
                src="/CharleyCatSitting.png"
                alt="Charlie Cat Sitting"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <p className="m-2 text-center">Charlie loves to sit and watch!</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-blue-700 w-full mt-10" />

      <section id="roadmap" ref={roadmapRef} className="pt-[var(--header-height)] lg:pt-10">
        <div className="px-5 mt-10">
          <div className="flex justify-center items-center">
            <Image
              src="/CharleyCatHeadshot.JPG"
              alt="Charlie Cat Headshot"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row mt-5">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
