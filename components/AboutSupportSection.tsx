import Image from "next/image";

export default function SupportDelivery() {
  return (
    <section className="hidden md:block w-full bg-black">
      <div className="flex">
        <div className="relative h-80 w-2/4 md:h-[26rem] ">
          <Image
            src="/about_img2.jpg"   
            alt="Warehouse tech support"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-[#10562CD9]/80 w-1/4 text-white flex flex-col gap-6 justify-start p-8">
          <h3 className="text-3xl w-2/3 font-medium mb-4">24/7 Tech Support</h3>
          <p className="text-sm leading-relaxed">
            We believe in providing unparalleled support to our clients. Our
            technical expertise is available around the clock to ensure seamless
            operations and address any challenges that arise.
          </p>
        </div>

        <div className="bg-[#10562CD9]/60 w-1/4 text-white flex flex-col gap-6 justify-start p-8">
          <h3 className="text-3xl w-2/3 font-medium mb-12">Delivery</h3>
          <p className="text-sm leading-relaxed">
            Timeliness is at the heart of our business. We understand the
            importance of prompt delivery and work tirelessly to ensure our
            products reach our customers on time, every time.
          </p>
        </div>
      </div>
    </section>
  );
}
