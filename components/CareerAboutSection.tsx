import Image from "next/image";

export default function CareerAboutSection() {
  return (
    <section className="bg-white w-full px-6 md:px-16 pt-14 pb-6 md:py-24 hidden md:block">
      <div className="relative w-full md:max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-12 items-start justify-between">
        <div className="relative w-full h-[500px]">
          <Image
            src="/career_img1.jpg"
            alt="Company building"
            fill
            className="hidden md:block object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

        <div className="py-16 px-10 w-2/3 leading-loose absolute bg-white right-0 top-12 rounded-2xl">
            <p className="text-xl w-3/4 mb-4">At <b>Saba Group</b>, we believe that our people are our greatest strength. Since <b>1988</b>, we have built a dynamic organization grounded in integrity, innovation, and inclusivity—and we continue to grow by investing in talent that shares our vision.</p>
            <p className="text-xl w-3/4 mb-4">Whether you are an experienced professional or a fresh graduate eager to learn, Saba Group offers exciting career opportunities across diverse industries—from chemicals and manufacturing to infrastructure, wellness, and sustainable farming.</p>
        </div>
      </div>
    </section>
  );
}
