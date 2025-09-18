"use client";

import Image from "next/image";

export default function InternshipSection() {
  return (
    <section className="w-full bg-white py-16 hidden md:block">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/career_img7.jpg" 
              alt="Internships and campus hiring"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#10562C] mb-4">
              Internships & Campus Hiring
            </h2>
            <p className="text-[#727272] mb-6 leading-relaxed">
              We actively collaborate with academic institutions to provide
              internships, industrial training, and entry-level positions for
              students and recent graduates. If you’re eager to start your career
              in a growth-driven environment, Saba Group is the place for you.
            </p>
            <button className="border border-[#10562C] text-[#10562C] hover:bg-[#10562C] hover:text-white cursor-pointer font-medium px-6 py-2 rounded-full transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
