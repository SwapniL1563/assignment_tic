"use client";

import Image from "next/image";

type Director = {
  id: string | number;
  name: string;
  title: string;
  imageSrc: string;
};

export default function BoardOfDirectors({ items }: { items: Director[] }) {
  return (
    <section className="px-6 py-12 lg:px-20 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-bold w-1/3">
            Board
            <span className="ml-2 text-[#10562C]">of</span>
            <span className="ml-2">Directors</span>
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((d) => (
            <div key={d.id} className="relative rounded-xl overflow-hidden shadow-md">
              <div className="relative h-[420px] sm:h-[380px] lg:h-[460px] bg-gray-100">
                <Image src={d.imageSrc} alt={d.name} fill className="object-cover hover:scale-105 transition" />
              </div>
              <div className="absolute left-4 bottom-4 text-white">
                <p className="text-lg sm:text-xl font-bold drop-shadow-md">{d.name}</p>
                <p className="text-sm sm:text-base drop-shadow-md">{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
