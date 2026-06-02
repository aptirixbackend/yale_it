"use client";

import { useEffect, useState } from "react";

const IMAGES = [
  "https://assets.fixr.com/cost_guides/smart-lock-installation/smart-lock-installation-5f621d39adf66.png",
  "https://cdn.shopify.com/s/files/1/0422/3985/2711/files/All_Pages-10_e72fb2c2-84d6-4db9-9940-847e8bc32c9a_533x.jpg?v=1774609085",
  "https://www.heavenautomation.com/assets/images/news/img1111.png",
];

const OVERLAY =
  "linear-gradient(to top, rgba(8,8,15,0.82) 0%, rgba(8,8,15,0.32) 45%, rgba(8,8,15,0.18) 100%)";

export function LeftPanel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % IMAGES.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Crossfading slideshow */}
      {IMAGES.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: idx === i ? 1 : 0,
            backgroundImage: `${OVERLAY}, url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#0b0b14",
          }}
        />
      ))}

      {/* LazyRabbit brand — top left */}
      <div className="absolute left-8 top-7 z-10 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.lazyrabbit.in/rabbit_icon.png"
            alt="LazyRabbit"
            className="h-full w-full object-contain"
          />
        </span>
        <span className="font-display text-lg font-semibold text-white drop-shadow">LazyRabbit</span>
      </div>

      {/* Tagline + slideshow dots — bottom left */}
      <div className="absolute bottom-14 left-10 right-10 z-10">
        <h2 className="font-display text-5xl font-bold leading-[1.05] text-white drop-shadow-lg">
          Automate
          <br />
          everything.
        </h2>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-white/85 drop-shadow">
          From lead to done — Yale service handled in just a few clicks.
        </p>
        <div className="mt-6 flex gap-1.5">
          {IMAGES.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-7 bg-white" : "w-2.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
