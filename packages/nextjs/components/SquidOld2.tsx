"use client";

import { useMemo, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const SquidComponent = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Create URL with your configuration parameters
  const widgetUrl = useMemo(() => {
    // Use the base widget URL
    const url = new URL("https://swap.squidrouter.com");

    // Add parameters
    url.searchParams.set("integration", "swap-v2");
    url.searchParams.set("theme", "dark");
    url.searchParams.set("integratorId", process.env.NEXT_PUBLIC_SQUID_INTEGRATOR_ID || "squid-swap-widget-v2");
    url.searchParams.set("defaultColorTheme", "dark");
    url.searchParams.set("primaryColor", "9E79D2");
    url.searchParams.set("secondaryColor", "521b92");
    url.searchParams.set("fromChain", "1");
    url.searchParams.set("toChain", "56");
    url.searchParams.set("fromToken", "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");

    return url;
  }, []);

  // Error handling callbacks
  const handleIframeError = () => {
    console.error("iFrame failed to load");
    setHasError(true);
  };

  const handleIframeLoad = () => {
    console.log("iFrame loaded successfully");
    setIsLoading(false);
  };

  // Error state
  if (hasError) {
    return (
      <div className="p-6 border-2 border-red-300 rounded-lg text-center">
        <p>Widget temporarily unavailable.</p>
        <button
          onClick={() => {
            setHasError(false);
            setIsLoading(true);
          }}
          className="mt-2 px-3 py-1 bg-primary text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <div className="p-6 border-2 border-red-300 rounded-lg text-center">
          <p>Something went wrong with the widget.</p>
          <button
            onClick={() => {
              setHasError(false);
              setIsLoading(true);
            }}
            className="mt-2 px-3 py-1 bg-primary text-white rounded"
          >
            Retry
          </button>
        </div>
      }
    >
      <div className="w-full border rounded-lg overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-base-200 bg-opacity-70 z-10">
            <div className="animate-pulse text-center">
              <p>Loading Squid Widget...</p>
            </div>
          </div>
        )}

        <iframe
          src={widgetUrl.toString()}
          title="Squid Exchange Widget V2"
          width="100%"
          height="600px"
          className="border-0"
          onError={handleIframeError}
          onLoad={handleIframeLoad}
          allow="clipboard-write"
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        />
      </div>
    </ErrorBoundary>
  );
};

export default SquidComponent;
