"use client";

import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({
  scene,
  className,
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const el = containerRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [isClient]);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-black text-white ${className || ""}`}
      >
        <p>3D scene unavailable</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {isClient && shouldLoad ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-black text-white">
              Loading 3D...
            </div>
          }
        >
          <SplineWrapper
            scene={scene}
            onError={() => setHasError(true)}
          />
        </Suspense>
      ) : null}
    </div>
  );
}

function SplineWrapper({
  scene,
  onError,
}: {
  scene: string;
  onError: () => void;
}) {
  try {
    return (
      <Spline
        scene={scene}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  } catch (error) {
    console.error("Spline crashed:", error);

    onError();

    return null;
  }
}