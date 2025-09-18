import Image from "next/image";

export default function HomeAboutSection() {
  return (
    <section className="w-full py-10 md:py-16 px-4 md:px-20">
      <div className="grid md:grid-cols-2 bg-white overflow-hidden shadow-lg">
        <div className="bg-[#10562C] text-white px-5 md:px-6 py-10 md:py-20 flex flex-col items-center md:items-start justify-center rounded-2xl md:rounded-tr-none rounded-tr-2xl md:rounded-bl-2xl   rounded-bl-none rounded-br-none">
          <p className="uppercase text-center md:text-start text-xs md:text-sm font-medium tracking-wider mb-6">
            About Saba Group
          </p>

          <h2 className="hidden md:block mt-4 text-xl md:text-4xl md:w-3/4 font-bold leading-snug">
            Pioneers in the Chemical Industry Since 1988
          </h2>
           <h2 className="block md:hidden mt-4 text-base text-center md:text-start font-bold leading-snug">
            Saba Group companies are the Pioneers in the field of Specialty Chemicals, Basic Chemicals and Solvents. 
          </h2>

          <p className="hidden md:block mt-4 text-sm md:text-base leading-relaxed ">
            Saba Group of Companies stands as a trusted leader in the field of
            Specialty Chemicals, Basic Chemicals, and Solvents, with a legacy
            spanning over three decades. Established in 1988, we have been at
            the forefront of supplying high-quality chemicals to the Leather,
            Footwear, and related manufacturing sectors across India and
            internationally.
          </p>
          <p className="hidden md:block mt-4 text-sm md:text-base leading-relaxed">
            With a dedicated workforce of over 600 professionals and a team of
            technically qualified experts, our strength lies in deep industry
            expertise, a customer-centric approach, and a wide-reaching
            commercial network.
          </p>

          <p className="block md:hidden mt-4 text-xs md:text-base leading-relaxed text-center">
            We have been a leading provider of Chemical for Leather industry, Shoe industry and Industrial chemicals across diverse sectors since 1988
          </p>
          <p className="block md:hidden mt-4 text-xs md:text-base leading-relaxed text-center">
            Our international operations are based in Guangzhou, China, where we manage chemical and machinery procurement supported by our own local agent. We focus on trading and manufacturing high-quality chemicals sourced globally from Europe and South America.  
          </p>
          
          <button className="mt-14 md:mt-6 bg-white text-black w-[40%] px-6 py-2 rounded-md hover:bg-gray-200 transition text-sm md:text-base cursor-pointer">
            View More
          </button>
        </div>

        <div className="relative h-64 md:h-auto overflow-hidden hidden md:block">
          <Image
            src="/home_img1.jpg"
            alt="About Saba Group"
            fill
            className="object-cover scale-[230%] object-right"
          />
        </div>
      </div>
    </section>
  );
}
