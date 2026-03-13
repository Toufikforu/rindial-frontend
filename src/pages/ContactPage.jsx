export default function ContactPage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/src/assets/contact-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-6xl px-6 py-16">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-semibold mb-4">
            Contact Us
          </h1>

          <p className="text-xl text-gray-200">
            Have questions or need more information?
          </p>

          <p className="text-xl text-gray-200">
            Reach out to us — We're here to help!
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-end">

          {/* Contact Form */}
          <div className="bg-red-900/80 border border-red-500 rounded-xl p-8 backdrop-blur">

            <h2 className="text-3xl font-semibold text-center mb-8">
              Get In Touch
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 text-lg">Your Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-md bg-red-600/70 border border-red-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg">Email Address</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-md bg-red-600/70 border border-red-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg">Phone Number</label>
                <input
                  type="tel"
                  className="w-full h-12 px-4 rounded-md bg-red-600/70 border border-red-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-md bg-red-600/70 border border-red-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-3 bg-gradient-to-b from-red-500 to-red-700 rounded-md text-xl font-semibold hover:scale-105 transition"
              >
                Submit
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-end space-y-8 text-lg">

            <div className="flex items-center gap-4">
              <div className="text-3xl">✉️</div>
              <a
                href="mailto:contact@rindial.com"
                className="text-xl hover:underline"
              >
                contact@rindial.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-3xl">📞</div>
              <a
                href="tel:14073918483"
                className="text-xl hover:underline"
              >
                (407) 391-8483
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}