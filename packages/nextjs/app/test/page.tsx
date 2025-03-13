"use client";

import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import type { NextPage } from "next";

const SimplePage: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a flag to confirm client-side rendering is working
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center lg:pt-10 justify-center min-h-screen p-20">
      <h1 className="text-5xl font-bold mb-8">$CHAR</h1>
      <div className="text-2xl text-center mb-8">
        Charlie Bull is coming soon! {isLoaded ? "(Client rendered)" : "(Server rendered)"}
      </div>
      <Image
        src="/PantingCharlie2.gif"
        alt="Charlie Bull"
        width={400}
        height={400}
        className="rounded-lg"
        unoptimized
      />
    </div>
  );
};

export default SimplePage;
