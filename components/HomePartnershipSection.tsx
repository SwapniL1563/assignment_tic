import Image from "next/image";

export default function GlobalPartnerships() {
  const logos = [
    { src: "/comp1 (1).jpg", alt: "Trumpler" },
    { src: "/comp1 (2).jpg", alt: "PielColor" },
    { src: "/comp1 (6).png", alt: "T&J" },
    { src: "/comp1 (5).png", alt: "Henkel" },
    { src: "/comp1 (4).png", alt: "ACI" },
    { src: "/comp1 (3).png", alt: "Quinn Italiana" },
    { src: "/comp1 (2).png", alt: "Protima" },
    { src: "/comp1 (1).png", alt: "Essebi" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-16">Global Partnerships</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={80} height={20}
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
