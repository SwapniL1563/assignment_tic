"use client";

import React, { useEffect, useRef } from "react";

type Testimonial = {
  stars: number;
  title: string;
  quote: string;
  name: string;
  date: string;
};

type Props = {
  items: Testimonial[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
};

export const InfiniteMovingCards = ({
  items,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    const scrollTrack = scrollRef.current;
    if (!container || !scrollTrack) return;

    scrollTrack.innerHTML += scrollTrack.innerHTML;

    let pos = 0;
    let speedPx = speed === "fast" ? 1 : speed === "slow" ? 0.3 : 0.5;
    if (direction === "right") speedPx = -speedPx;

    const step = () => {
      pos += speedPx;
      const scrollWidthHalf = scrollTrack.scrollWidth / 2;

      if (direction === "left" && pos >= scrollWidthHalf) pos = 0;
      if (direction === "right" && pos <= 0) pos = scrollWidthHalf;

      scrollTrack.style.transform = `translateX(-${pos}px)`;
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    const handleMouseEnter = () => pauseOnHover && cancelAnimationFrame(animationRef.current!);
    const handleMouseLeave = () => pauseOnHover && (animationRef.current = requestAnimationFrame(step));

    if (pauseOnHover) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationRef.current!);
      if (pauseOnHover) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [items, speed, direction, pauseOnHover]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full relative">
      <div ref={scrollRef} className="flex gap-6 will-change-transform">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-md"
          >
            <div className="flex text-green-600 mb-3 text-lg">
              {"★".repeat(item.stars)}
              {"☆".repeat(5 - item.stars)}
            </div>
            <h3 className="font-semibold md:text-lg mb-2 text-gray-900">{item.title}</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{item.quote}</p>
            <div className="mt-6 flex flex-col text-gray-500">
              <span className="text-sm md:text-base text-black">{item.name}</span>
              <span className="text-xs">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
