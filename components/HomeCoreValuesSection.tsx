import Image from "next/image";

export default function CoreValues() {
  return (
    <section className="flex flex-col justify-center items-center p-6 py-24 md:p-20 cursor-default">
      <div className="flex flex-col md:flex-row md:justify-between items-start w-full md:w-[80%] gap-10">
        
        <div className="flex flex-col w-full md:w-1/2 gap-5">
          <p className="uppercase text-center text-xs md:text-sm md:tracking-widest text-gray-500">Core Values</p>
          <h1 className="text-xl w-full md:text-4xl text-center md:text-start font-bold leading-snug">
            The <span className="text-green-700">Core</span> of Engineering <br className="hidden md:block"/>
            and Manufacturing <br className="hidden md:block" />
            <span className="text-green-700">Synergy.</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-6 w-full md:w-1/2">
          <div className="bg-gray-50 rounded-2xl p-3 md:p-6 shadow-sm hover:shadow-md transition">
            <Image src="/home_core_logo.png" alt="core_values" height={40} width={100} className="w-4 md:w-5 mb-2"/>
            <h2 className="font-semibold md:text-lg mb-2">Quality</h2>
            <p className="text-[#848282] text-xs md:text-sm">
              We deliver chemical solutions that meet global standards, with strict quality checks ensuring 
              safety, reliability, and consistency in every batch.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-3 md:p-6 shadow-sm hover:shadow-md transition">
                        <Image src="/home_core_logo.png" alt="core_values" height={40} width={100} className="w-4 md:w-5 mb-2"/>
            <h2 className="font-semibold md:text-lg mb-2">Technology</h2>
            <p className="text-[#848282] text-xs md:text-sm">
              Using advanced processes and modern tools, we optimize performance, safety, and scalability 
              across all stages of production.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-3 md:p-6 shadow-sm hover:shadow-md transition">
                        <Image src="/home_core_logo.png" alt="core_values" height={40} width={100} className="w-4 md:w-5 mb-2"/>
            <h2 className="font-semibold md:text-lg mb-2">Innovation</h2>
            <p className="text-[#848282] text-xs md:text-sm">
              Driven by research and insights, we create formulations and processes that address today’s 
              needs and anticipate future opportunities.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-3 md:p-6 shadow-sm hover:shadow-md transition">
                        <Image src="/home_core_logo.png" alt="core_values" height={40} width={100} className="w-4 md:w-5 mb-2"/>
            <h2 className="font-semibold md:text-lg mb-2">Sustainability</h2>
            <p className="text-[#848282] text-xs md:text-sm">
              With eco-friendly practices and greener formulations, we reduce environmental impact while 
              supporting clients sustainability goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
