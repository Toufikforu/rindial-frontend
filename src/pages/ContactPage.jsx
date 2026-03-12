import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_20%),radial-gradient(circle_at_70%_20%,rgba(255,0,0,0.12),transparent_30%),radial-gradient(circle_at_50%_75%,rgba(255,0,0,0.10),transparent_28%),linear-gradient(to_bottom,#020202,#120000,#020202)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,0,0,0.35)_1px,transparent_1px)] [background-size:140px_140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 h-[2px] w-full max-w-6xl bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.8)]" />

          <h1 className="text-5xl font-bold md:text-6xl">Contact Us</h1>

          <p className="mt-6 text-2xl leading-relaxed text-white/85 md:text-3xl">
            Have questions or need more information?
          </p>
          <p className="mt-3 text-2xl leading-relaxed text-white/85 md:text-3xl">
            Reach out to us — We're here to help!
          </p>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <img
              src="/images/contact-people.png"
              alt="RinDial contact team"
              className="mx-auto max-h-[760px] w-full object-contain"
            />
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-red-500/70 bg-[linear-gradient(to_bottom,rgba(170,0,0,0.9),rgba(90,0,0,0.95))] p-8 shadow-[0_0_30px_rgba(255,0,0,0.18)]">
              <h2 className="mb-8 text-center text-4xl font-semibold">
                Get In Touch
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-xl text-white/90">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="h-14 w-full rounded-md border border-red-400 bg-red-700/40 px-4 text-white outline-none placeholder:text-white/40 focus:border-red-300"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xl text-white/90">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="h-14 w-full rounded-md border border-red-400 bg-red-700/40 px-4 text-white outline-none placeholder:text-white/40 focus:border-red-300"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xl text-white/90">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="h-14 w-full rounded-md border border-red-400 bg-red-700/40 px-4 text-white outline-none placeholder:text-white/40 focus:border-red-300"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xl text-white/90">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border border-red-400 bg-red-700/40 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-red-300"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="rounded-md bg-gradient-to-b from-red-500 to-red-700 px-14 py-3 text-2xl font-semibold text-white shadow-[0_0_18px_rgba(255,0,0,0.4)] transition hover:from-red-400 hover:to-red-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6 px-2 text-xl text-white/90 md:text-2xl">
              <div className="flex items-center gap-4">
                <Mail className="h-9 w-9 text-white" />
                <a
                  href="mailto:contact@rindial.com"
                  className="transition hover:text-red-400"
                >
                  contact@rindial.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-9 w-9 text-white" />
                <a
                  href="tel:+14073918483"
                  className="transition hover:text-red-400"
                >
                  (407) 391-8483
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}