"use client";

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="px-6 py-14 lg:px-20 bg-white w-full">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="hidden md:block relative w-[40%] h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about_img3.jpg"
            alt="Lab Worker"
            fill
            className="object-cover object-right"
          />
        </div>

        <div className="w-full md:w-[60%] px-4 md:px-10 text-center md:text-left">
          <p className="text-sm capitalize md:uppercase text-black font-normal">
            Our Mission
          </p>
          <h2 className="hidden md:block text-2xl lg:text-3xl font-bold mt-4 leading-snug">
            Driving <span className="text-[#10562C]">Innovation</span> Through{" "}
            <span className="text-[#10562C]">High-Quality</span> Chemical
            Solutions
          </h2>
          <h2 className="block md:hidden text-2xl font-bold text-gray-900 mt-4 mb-4">
            With <span className="text-[#10562C]">37+ Years</span> of Experience
          </h2>
          <p className="text-sm md:text-base mt-4 text-black leading-relaxed">
            At Saba Group, our mission is to provide high-quality specialty
            chemicals, basic chemicals, and solvents that drive innovation and
            efficiency across industries. We are committed to delivering
            reliable and sustainable solutions to the leather, shoe, and
            industrial sectors while maintaining strong partnerships with
            globally renowned brands. Through continuous research, development,
            and strategic expansion, we aim to enhance our customers’ processes
            and contribute to their success.
          </p>
        </div>
      </div>

      <div className="block md:hidden relative w-full h-[300px] rounded-xl overflow-hidden shadow-md mt-12 mb-12">
        <Image
          src="/about_m_img3.jpg"
          alt="Factory Worker"
          fill
          className="object-cover object-top scale-200"
        />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-10 w-full rounded-2xl p-8 shadow-sm">
        <div className="w-full md:w-3/4 flex flex-col justify-center">
          <h3 className="text-xl lg:text-3xl font-semibold mb-8">
            Our <span className="text-[#10562C]">state-of-the-art</span>{" "}
            facilities have the annual capacity to produce
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <p className="md:text-2xl font-bold text-gray-900">600 +</p>
              <p className="text-gray-500 text-sm md:text-base">Employees</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <p className="md:text-2xl font-bold text-gray-900">15 lakh</p>
              <p className="text-gray-500 text-sm md:text-base">Projects</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <p className="md:text-2xl font-bold text-gray-900">12.5 lakh</p>
              <p className="text-gray-500 text-sm md:text-base">Lorem Ipsum</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <p className="md:text-2xl font-bold text-gray-900">2 lakh</p>
              <p className="text-gray-500 text-sm md:text-base">Lorem Ipsum</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative w-full md:w-1/4 h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about_img4.jpg"
            alt="Factory Worker"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="block md:hidden relative w-full h-[300px] rounded-xl overflow-hidden shadow-md mt-12 ">
        <Image
          src="/about_m_img4.jpg"
          alt="Factory Worker"
          fill
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
