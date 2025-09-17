export default function InternationalOperations() {
  return (
    <section className="md:py-24 bg-white">
      <div className="mx-auto flex flex-col items-center  max-w-5xl px-6 text-center">
        <h2 className="hidden md:block text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          International <span className="text-green-700">Operations</span>
        </h2>

        <p className="hidden md:block text-gray-600 mb-10 w-2/3 text-center leading-relaxed">
          Our international presence is supported by procurement operations in Guangzhou, China, 
          managed through our own sourcing office, and a business facilitation office in the Dubai Free Zone, 
          enabling expansion across the Middle East, Africa, and Asia.
        </p>

        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="International Operations"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
