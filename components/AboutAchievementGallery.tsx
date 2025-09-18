"use client";

import Image from "next/image";

export default function AchievementsGallery() {
  const achievements = [
    { id: 1, imageSrc: "/about_img12.png" },
    { id: 2, imageSrc: "/about_img13.png" },
    { id: 3, imageSrc: "/about_img14.png" },
    { id: 4, imageSrc: "/about_img15.png" },
    { id: 5, imageSrc: "/about_img16.png" },
    { id: 6, imageSrc: "/about_img17.png" },
  ];

  return (
    <section className="px-6 py-12 lg:px-20 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-[#10562C]">Achievements</span> of Saba Group
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="grid grid-cols-2 gap-2 md:gap-6 md:col-span-2">
            <div className="relative rounded-xl overflow-hidden h-[220px] md:h-[300px]">
              <Image src={achievements[0].imageSrc} alt="" fill className="object-cover hover:scale-105 transition" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[220px] md:h-[300px]">
              <Image src={achievements[1].imageSrc} alt="" fill className="object-cover hover:scale-105 transition" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[220px] md:h-[300px] col-span-2">
              <Image src={achievements[2].imageSrc} alt="" fill className="object-cover hover:scale-105 transition" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[220px] md:h-[300px]">
              <Image src={achievements[3].imageSrc} alt="" fill className="object-cover hover:scale-105 transition" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[220px] md:h-[300px]">
              <Image src={achievements[4].imageSrc} alt="" fill className="object-cover hover:scale-105 transition" />
            </div>
          </div>

          <div className="flex items-end  gap-6">
            <div className="flex items-end justify-end">
              <a href="#" className="text-sm font-semibold hover:underline">
                View more +
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
