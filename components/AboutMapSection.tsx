"use client";

import { useState } from "react";
import Image from "next/image";

export default function RepresentationSection() {
  const [activeTab, setActiveTab] = useState<"global" | "national">("global");

  return (
    <section className="px-6  md:py-12 lg:px-20 bg-white">
      <div className="hidden md:flex justify-center mb-8">
        <div className="flex border rounded-full overflow-hidden shadow-sm">
          <button
            onClick={() => setActiveTab("global")}
            className={`px-6 py-2 text-sm font-medium transition ${
              activeTab === "global"
                ? "bg-[#10562C] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Global representation
          </button>
          <button
            onClick={() => setActiveTab("national")}
            className={`px-6 py-2 text-sm font-medium transition ${
              activeTab === "national"
                ? "bg-[#10562C] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            National representation
          </button>
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] bg-[#559CFF61] rounded-xl overflow-hidden">
        <Image
          src="/map.png" 
          alt="World Map"
          fill
          className="object-cover "
        />

        {activeTab === "global" && (
          <>
            <div className="absolute top-[39%] right-[27%] md:top-[10%] md:right-[25%] h-3 w-3 md:w-5 md:h-5 bg-green-600 rounded-full border-2 border-white"></div>
            <div className="absolute top-[37%] right-[30%] md:top-[20%] md:right-[32%] h-3 w-3 md:w-5 md:h-5 bg-green-600 rounded-full border-2 border-white"></div>
            <div className="absolute top-[33%] right-[25%] md:top-[22%] md:right-[28%] h-3 w-3 md:w-5 md:h-5 bg-green-600 rounded-full border-2 border-white"></div>
          </>
        )}

        {activeTab === "national" && (
          <>
            <div className="absolute top-[22%] right-[28%] w-5 h-5 bg-red-600 rounded-full border-2 border-white"></div>
          </>
        )}
      </div>
    </section>
  );
}
