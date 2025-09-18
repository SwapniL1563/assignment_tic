"use client";

import Image from "next/image";

export default function JoinUsSection() {
  return (
    <section className="w-full bg-white py-16 hidden md:block">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-[#1F9B5A] text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
            <p className="mb-3 text-sm">
              If you're driven, curious, and ready to make a difference, we’d
              love to hear from you. Send your resume to:{" "}
              <a
                href="mailto:careers@sabagroup.in"
                className="font-semibold underline"
              >
                careers@sabagroup.in
              </a>{" "}
              or check out current openings below.
            </p>
            <p className="mb-6 text-sm">
              Shape your future with Saba Group where every career is a journey
              of growth and impact.
            </p>
            <button className="bg-white text-[#1F9B5A] hover:bg-gray-200 cursor-pointer font-semibold px-5 py-2 rounded-full w-fit transition">
              Apply Now
            </button>
          </div>

          <div className="relative w-full h-80 md:h-full">
            <Image
              src="/career_img9.jpg" 
              alt="Join our team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
