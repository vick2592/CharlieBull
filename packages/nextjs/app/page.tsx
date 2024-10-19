"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const imageRef = useRef<HTMLDivElement>(null);
  const headshotRef = useRef<HTMLDivElement>(null);
  const sittingCatRef = useRef<HTMLDivElement>(null);
  const blockExplorerRef = useRef<HTMLDivElement>(null);

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

    [imageRef, headshotRef, sittingCatRef, blockExplorerRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);

        // Fallback to ensure animation is applied if the element is already in the viewport
        if (ref.current.getBoundingClientRect().top < window.innerHeight) {
          ref.current.classList.add("fade-in");
          observer.unobserve(ref.current);
        }
      }
    });

    return () => {
      [imageRef, headshotRef, sittingCatRef, blockExplorerRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 relative" ref={imageRef}>
          <div className="absolute top-0 left-0 right-0 z-10 p-4">
            <h1 className="text-center p-4 rounded-lg">
              <span className="block text-4xl font-bold text-white">Owe, Charlie bit me!</span>
            </h1>
          </div>
          <Image
            src="/CharleyBaby.JPG"
            alt="Charlie Baby"
            width={600}
            height={600}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="flex-grow bg-base-300 w-full mt-10 px-5 py-10">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col items-center" ref={sittingCatRef}>
              <Image
                src="/CharleyCatSitting.png"
                alt="Charlie Cat Sitting"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <p className="m-2 text-center">Charlie loves to sit and watch!</p>
            </div>
            {/* <div
              className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl"
              ref={blockExplorerRef}
            >
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div> */}
          </div>
        </div>

        <div className="px-5 mt-10">
          <div className="flex justify-center items-center" ref={headshotRef}>
            <Image
              src="/CharleyCatHeadshot.JPG"
              alt="Charlie Cat Headshot"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
