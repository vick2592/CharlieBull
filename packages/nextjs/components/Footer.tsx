import React from "react";
// import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
// import { Faucet } from "~~/components/scaffold-eth";
import Image from "next/image";
// import Link from "next/link";
import { hardhat } from "viem/chains";
// import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

// import { useGlobalState } from "~~/services/store/store";

export const Footer = () => {
  // const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="bg-base-100 min-h-0 py-10 px-1 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          {/* <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
        {nativeCurrencyPrice > 0 && (
          <div>
            <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
              <CurrencyDollarIcon className="h-4 w-4" />
              <span>{nativeCurrencyPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
        {isLocalNetwork && (
          <>
            <Faucet />
            <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
              <MagnifyingGlassIcon className="h-4 w-4" />
              <span>Block Explorer</span>
            </Link>
          </>
        )}
      </div> */}
          <SwitchTheme className={`pointer-events-auto ml-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
        </div>
      </div>
      <div className="px-5 mt-10 pb-5">
        <ul className="flex items-end justify-center space-x-4 lg:space-x-8">
          {/* Twitter Logo */}
          <li className="flex items-end">
            <a
              href="https://x.com/NFTLadyEve"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110 hover:-translate-y-1 duration-200"
            >
              <Image src="/TwitterXLogo.png" alt="Twitter Logo" width={75} height={75} className="rounded-lg" />
            </a>
          </li>

          {/* Charlie Cat Image */}
          <li className="flex items-center">
            <Image
              src="/CharleyCatHeadshot.JPG"
              alt="Charlie Cat Headshot"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </li>

          {/* Telegram Logo */}
          <li className="flex items-end">
            <a
              href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110 hover:-translate-y-1 duration-200"
            >
              <Image src="/TelegramLogo.png" alt="Telegram Logo" width={75} height={75} className="rounded-lg" />
            </a>
          </li>
        </ul>
      </div>
      {/* Copyright Text */}
      <p className="text-center mt-6 text-sm font-medium text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} by Charlie. All rights reserved!
      </p>
    </div>
  );
};
