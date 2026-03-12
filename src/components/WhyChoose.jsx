import { useState, useEffect } from "react";
import slider1 from "../assets/wh_slide_1.webp";
import slider2 from "../assets/wh_slide_2.webp";
import slider3 from "../assets/wh_slide_3.webp";

export default function WhyChoose() {
	const slides = [
	  slider1,
	  slider2,
	  slider3
	];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 text-white overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(150,0,0,0.3),transparent_50%),linear-gradient(to_bottom,#070707,#120000,#050505)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-red-500">RinDial?</span>
          </h2>
          <p className="text-gray-300 mt-3">
            The Best Solution for Winning Campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Slider */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src={slides[current]}
              alt="RinDial"
              className="w-full h-[400px] object-cover"
            />

            {/* dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-white" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">

            <div className="flex gap-4">
              <div className="bg-red-600 p-2 rounded">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg">Expert Phone Banking</h3>
                <p className="text-gray-300 text-sm">
                  We deliver high-impact calls to the most relevant voters for
                  stronger campaign engagement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-600 p-2 rounded">✓</div>
              <div>
                <h3 className="font-semibold text-lg">Campaign-Focused</h3>
                <p className="text-gray-300 text-sm">
                  Personalized voter outreach that persuades and drives turnout.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-600 p-2 rounded">✓</div>
              <div>
                <h3 className="font-semibold text-lg">Secure & Reliable</h3>
                <p className="text-gray-300 text-sm">
                  Real-time data collection with secure systems and analytics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-600 p-2 rounded">✓</div>
              <div>
                <h3 className="font-semibold text-lg">Real-Time Reporting</h3>
                <p className="text-gray-300 text-sm">
                  Track campaign performance with powerful reporting tools.
                </p>
              </div>
            </div>

            <button className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded shadow-lg">
              Get Started
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}