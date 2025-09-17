"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonials = [
    { stars: 5, title: "Industry Leaders You Can Trust!", quote: "Saba Group has been a game-changer for our business. Their high-quality specialty chemicals and solvents consistently meet our standards.", name: "Enthusiast Mike", date: "08/28/2023" },
    { stars: 5, title: "Unmatched Quality & Reliability", quote: "We've been sourcing basic and specialty chemicals from Saba Group for years, and their reliability is second to none.", name: "TechCarGeek", date: "12/10/2022" },
    { stars: 5, title: "Innovation at Its Best", quote: "Saba Group doesn’t just supply chemicals—they provide innovative solutions tailored to our needs.", name: "BusyBizExec", date: "02/18/2023" },
    { stars: 5, title: "Industry Leaders You Can Trust!", quote: "Saba Group has been a game-changer for our business. Their high-quality specialty chemicals and solvents consistently meet our standards.", name: "Enthusiast Mike", date: "08/28/2023" },
    { stars: 5, title: "Unmatched Quality & Reliability", quote: "We've been sourcing basic and specialty chemicals from Saba Group for years, and their reliability is second to none.", name: "TechCarGeek", date: "12/10/2022" },
    { stars: 5, title: "Innovation at Its Best", quote: "Saba Group doesn’t just supply chemicals—they provide innovative solutions tailored to our needs.", name: "BusyBizExec", date: "02/18/2023" },
  ];

  return (
    <section className="flex flex-col items-center  md:py-16 bg-gray-50">
      <h2 className="text-xl md:text-4xl font-bold mb-10">What our <span className="text-[#10562C]">Clients Say</span></h2>
      <InfiniteMovingCards items={testimonials} speed="normal" direction="left" pauseOnHover />
    </section>
  );
}
