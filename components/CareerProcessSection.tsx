"use client";

import Image from "next/image";

const images = [
  "/career_img6.jpg",
  "/career_img2.jpg",
  "/career_img3.jpg",
  "/career_img4.jpg",
  "/career_img5.jpg",
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative w-full h-64 overflow-hidden rounded-lg shadow-md ${
                index >= 3 ? "hidden md:block" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Process step ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative block md:hidden w-full max-w-5xl mt-10 mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="International Operations"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
