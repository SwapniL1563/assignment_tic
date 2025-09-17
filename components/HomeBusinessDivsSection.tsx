import Image from "next/image";

export default function BusiDivSection(){
    const divisions = [
    {
      title: "Leather Chemical Division",
      img: "/home_b1.jpg",
      button: true,
      wide: true,
    },
    {
      title: "Herbal",
      img: "/home_b2.jpg",
      button: true,
    },
    {
      title: "Risa Farm",
      img: "/home_b3.jpg",
      button: true,
    },
    {
      title: "Infra",
      img: "/home_b4.jpg",
      button: true,
    },
    {
      title: "Shoe Division",
      img: "/home_b5.jpg",
      button: true,
    },
   ];

   return (
    <section className="w-full py-16 px-6 md:px-20 cursor-default">
      <div className="hidden md:block text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Business <span className="text-[#10562C]">Divisions</span>
        </h2>
        <p className="mt-4 max-w-4xl text-lg mx-auto">
          Saba Group is the exclusive India agent for leading global chemical
          and machinery manufacturers. We deliver high-quality, sustainable, and
          innovative solutions to the Indian market.
        </p>
      </div>

      <div className="py-8 block md:hidden">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Industries <span className="text-[#10562C]">we support</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative rounded-2xl overflow-hidden md:col-span-2 h-64 md:h-80">
          <Image
            src={divisions[0].img}
            alt={divisions[0].title}
            fill
            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 md:bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col md:flex-row justify-between items-center md:items-end">
            <h3 className="text-white cursor-default text-2xl md:text-lg font-bold md:font-semibold pb-4 md:pb-0">{divisions[0].title}</h3>
            <button className="bg-[#10562C] cursor-pointer md:bg-white text-white  md:text-[#10562C] text-sm px-6 py-2 md:px-4 md:py-1 mb-6 md:mb-0 rounded-full font-medium hover:bg-gray-200 transition">
              View more
            </button>
          </div>
        </div>

        {divisions.slice(1).map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden h-80"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 md:bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col md:flex-row justify-between items-center md:items-end">
              <h3 className="text-white cursor-default text-xl md:text-lg font-bold md:font-semibold pb-4 md:pb-0">{item.title}</h3>
              <button className="bg-[#10562C] cursor-pointer md:bg-white text-white  md:text-[#10562C] text-sm px-6 py-2 md:px-4 md:py-1 mb-6 md:mb-0 rounded-full font-medium hover:bg-gray-200 transition">
                View more
              </button>
            </div>
          </div>
        ))}

        </div>
    </section>
   )
}