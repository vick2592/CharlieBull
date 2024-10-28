"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
};

export const menuLinks: HeaderMenuLink[] = [
  { label: "Home", href: "#home" },
  { label: "Buy it Now", href: "#buy-it-now" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = document.querySelector(".header")?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {menuLinks.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <a
              href={href}
              onClick={e => handleClick(e, href)}
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-lg rounded-full gap-2 grid grid-flow-col`}
            >
              <span>{label}</span>
            </a>
          </li>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  useEffect(() => {
    const setHeaderHeight = () => {
      const headerHeight = document.querySelector(".header")?.clientHeight || 0;
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return (
    <div className="header fixed lg:sticky top-0 left-0 right-0 bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar">
        <div className="navbar-start w-auto lg:w-1/2">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="flex relative w-20 h-20">
              <Image alt="Charlie" className="cursor-pointer" fill src="/logo.svg" />
            </div>
            <div className="flex flex-col">
              <span className="font-creambeige font-bold leading-tight mt-6 ml-2 text-3xl">Charlie</span>
            </div>
          </a>
          <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2 ml-4">
            <HeaderMenuLinks />
          </ul>
        </div>
        <div className="navbar-end flex-grow mr-4">
          <div className="hidden lg:block">
            <RainbowKitCustomConnectButton />
          </div>
          <div className="lg:hidden dropdown dropdown-end" ref={burgerMenuRef}>
            <label
              tabIndex={0}
              className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
              onClick={() => {
                setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
              }}
            >
              <div className="w-10 h-10 relative">
                <Bars3Icon
                  className={`h-10 w-10 transition-all ${
                    isDrawerOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <XMarkIcon
                  className={`h-10 w-10 transition-all absolute top-0 left-0 ${
                    isDrawerOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </label>
            {isDrawerOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <HeaderMenuLinks />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
