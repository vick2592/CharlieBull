"use client";

import { useEffect, useState } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ErrorBoundary({
  children,
  fallback = (
    <div className="p-6 border-2 border-red-300 rounded-lg">
      <p>Something went wrong loading this component.</p>
    </div>
  ),
}: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      console.error("Error caught in boundary:", event);
      setHasError(true);
      event.preventDefault();
    };

    window.addEventListener("error", handler);
    return () => window.removeEventListener("error", handler);
  }, []);

  if (hasError) {
    return (
      <div className="p-6 border-2 border-red-300 rounded-lg text-center">
        {fallback}
        <button onClick={() => setHasError(false)} className="mt-2 px-3 py-1 bg-primary text-white rounded">
          Try Again
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
