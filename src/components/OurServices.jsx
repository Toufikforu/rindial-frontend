export default function OurServices() {
  const services = [
    {
      icon: "📞",
      title: "Phone Banking",
      description:
        "Mobilize volunteers to make targeted calls to voters and engage them in meaningful conversations.",
    },
    {
      icon: "📣",
      title: "Voter Outreach",
      description:
        "Reach out to voters with personalized calls to inform, persuade, and boost turnout.",
    },
    {
      icon: "🗄️",
      title: "Data Management",
      description:
        "Keep track of all voter interactions with real-time data collection and analysis.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_18%),radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.15),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(255,0,0,0.12),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(255,0,0,0.12),transparent_25%),linear-gradient(to_bottom,#030303,#140000,#050505)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,0,0,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="mt-3 text-xl text-white/85">
            Effective Outreach That Drives Results
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/15 bg-[linear-gradient(to_bottom,rgba(35,0,0,0.75),rgba(10,10,10,0.92))] p-8 text-center shadow-[0_0_25px_rgba(255,0,0,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_35px_rgba(255,0,0,0.18)]"
            >
              <div className="mb-5 text-6xl drop-shadow-[0_0_12px_rgba(255,0,0,0.55)]">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 text-lg leading-8 text-white/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-10 rounded-full bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}