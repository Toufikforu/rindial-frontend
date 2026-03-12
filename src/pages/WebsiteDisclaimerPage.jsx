export default function WebsiteDisclaimerPage() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.1),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(255,0,0,0.08),transparent_22%),linear-gradient(to_bottom,#020202,#120000,#030303)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,0,0,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,0,0,0.08)] backdrop-blur-sm md:p-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            RinDial <span className="text-red-500">Website Disclaimer</span>
          </h1>

          <p className="mt-4 text-base text-white/70 md:text-lg">
            <span className="font-semibold text-white">Effective Date:</span>{" "}
            03/01/2026
          </p>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/85">
            <p>
              The information provided on the RinDial website is for general
              informational and business purposes only. While RinDial makes
              reasonable efforts to ensure that the content on this website is
              accurate and up to date, we make no representations or warranties
              of any kind, express or implied, regarding the completeness,
              accuracy, reliability, or availability of the information,
              services, or related graphics contained on the website. Any
              reliance you place on such information is strictly at your own
              risk.
            </p>

            <p>
              RinDial provides campaign communication tools, outreach
              technology, and related services designed to assist organizations
              with voter engagement and campaign operations. However, RinDial
              does not guarantee specific political, financial, or operational
              outcomes from the use of its platform or services. Users are
              responsible for ensuring that their use of RinDial’s services
              complies with all applicable laws, regulations, and campaign
              requirements.
            </p>

            <p>
              Under no circumstances shall RinDial, its owners, employees,
              partners, or affiliates be liable for any loss or damage arising
              from the use of this website or reliance on the information
              provided. This includes, but is not limited to, indirect or
              consequential loss, loss of data, interruption of services, or any
              damages resulting from website downtime or technical issues beyond
              RinDial’s control.
            </p>

            <p>
              The RinDial website may contain links to external websites or
              third-party resources. These links are provided solely for
              convenience and informational purposes. RinDial does not endorse,
              control, or assume responsibility for the content, privacy
              practices, or policies of third-party websites. Users accessing
              external links do so at their own discretion and risk.
            </p>

            <p>
              RinDial is a Florida-based company, and this Website Disclaimer
              shall be governed by and interpreted in accordance with the laws
              of the State of Florida. Any disputes relating to the use of the
              RinDial website shall be subject to the jurisdiction of the
              appropriate courts located within the State of Florida. By
              accessing and using this website, you acknowledge and agree to the
              terms outlined in this disclaimer.
            </p>

            <p>
              Contact:{" "}
              <a
                href="mailto:Security@RinDial.com"
                className="text-red-400 hover:text-red-300 transition"
              >
                Security@RinDial.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}