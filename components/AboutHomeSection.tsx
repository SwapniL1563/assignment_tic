import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="bg-white w-full px-6 md:px-16 py-24">
      <div className="w-full md:max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start justify-between">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
          <p className="hidden md:block uppercase text-sm tracking-wide text-black mb-2">
            SABA GROUP
          </p>
          <p className="block md:hidden text-sm tracking-wide text-black mb-2">
            Legacy
          </p>
          <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold text-gray-900 mb-6 w-2/3 md:w-3/4">
            With over <span className="text-[#10562C]">37+ Years</span> of Experience
          </h2>
          <p className="text-black text-center md:text-start leading-relaxed mb-4 text-sm md:text-base w-6/7 md:w-2/3">
            We are dedicated to being a trusted and strong partner for multinational
            manufacturers across various industries specializing in a wide range of
            products, including Adhesives, chemicals, release agents, pigments, and
            footwear accessories, is your reliable partner in driving industry
            excellence and growth.
          </p>
          <p className="text-black text-center md:text-start leading-relaxed text-sm md:text-base w-6/7 md:w-2/3">
            Our customers are our priority. We focus on building long-term relationships
            by understanding their unique needs and consistently exceeding their
            expectations.
          </p>
        </div>

        <div className="relative w-full h-96 md:h-[28rem]">
          <Image
            src="/about_img1.jpg"
            alt="Company building"
            fill
            className="hidden md:block object-cover rounded-2xl shadow-md"
            priority
          />
           <Image
            src="/about_m_img2.jpg"
            alt="Company building"
            fill
            className="block md:hidden object-cover rounded-2xl shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
