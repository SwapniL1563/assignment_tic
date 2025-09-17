"use client";

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="px-6 py-24 lg:px-20 bg-white w-full">
      <div className="flex  gap-8 items-center">
        <div className="relative w-[40%] h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about_img3.jpg" 
            alt="Lab Worker"
            fill
            className="object-cover object-right"
          />
        </div>

        <div className="w-[60%] px-10">
          <p className="text-sm uppercase text-black font-normal">
            Our Mission
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mt-4 leading-snug">
            Driving{" "}
            <span className="text-[#10562C]">Innovation</span> Through{" "}
            <span className="text-[#10562C]">High-Quality</span> Chemical
            Solutions
          </h2>
          <p className="mt-4 text-black leading-relaxed">
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

      <div className="mt-16 flex  gap-10 w-full rounded-2xl p-8 shadow-sm">
       <div className="w-3/4 flex flex-col justify-center">
         <h3 className="text-xl lg:text-3xl font-semibold text-start mb-8 w-3/4">
          Our <span className="text-[#10562C]">state-of-the-art</span> facilities
          have the annual capacity to produce
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-6 bg-white rounded-xl shadow-2xl">
            <p className="text-2xl font-bold text-gray-900">600 +</p>
            <p className="text-gray-500">Employees</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-2xl">
            <p className="text-2xl font-bold text-gray-900">15 lakh</p>
            <p className="text-gray-500">Projects</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-2xl">
            <p className="text-2xl font-bold text-gray-900">12.5 lakh</p>
            <p className="text-gray-500">Lorem Ipsum</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-2xl">
            <p className="text-2xl font-bold text-gray-900">2 lakh</p>
            <p className="text-gray-500">Lorem Ipsum</p>
          </div>
        </div>
       </div>

        <div className="mt-12 flex items-start justify-start w-1/4">
          <div className="relative w-full md:w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about_img4.jpg"
              alt="Factory Worker"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
