import heroBg from "../assets/rindial_hero_bg.webp";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[620px] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:px-10">
        <div className="max-w-[620px] text-white">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Powering <span className="text-red-500">Campaigns</span> with
            <br />
            Expert Phone Banking
            <br />
            Services
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/85 md:text-xl">
            Boost voter engagement and maximize outreach with our cutting-edge
            phone banking solution tailored for political campaigns.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded bg-red-600 px-6 py-3 hover:bg-red-700">
              Get Started
            </button>

            <button className="rounded border border-gray-400 px-6 py-3 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}