export default function TermsOfUsePage() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.1),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(255,0,0,0.08),transparent_22%),linear-gradient(to_bottom,#020202,#120000,#030303)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,0,0,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,0,0,0.08)] backdrop-blur-sm md:p-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            RinDial <span className="text-red-500">Terms of Use</span>
          </h1>

          <p className="mt-4 text-base text-white/70 md:text-lg">
            <span className="font-semibold text-white">Effective Date:</span>{" "}
            03/01/2026
          </p>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/85">
            <p>
              These Terms of Use govern your access to and use of the RinDial
              website, platform, and related services. By accessing or using
              RinDial’s website, products, or services, you agree to comply
              with and be bound by these Terms of Use. If you do not agree with
              these terms, you should not access or use the RinDial platform.
              RinDial reserves the right to update or modify these Terms of Use
              at any time, and continued use of the website after any changes
              constitutes acceptance of those updates.
            </p>

            <p>
              RinDial provides campaign communication tools, outreach services,
              and related technology designed to assist organizations in
              managing voter engagement and campaign operations. Users agree to
              use RinDial’s services only for lawful purposes and in compliance
              with all applicable local, state, and federal laws. Any misuse of
              the platform, including unauthorized access, interference with
              system operations, or use of the services for unlawful or harmful
              activities, is strictly prohibited and may result in suspension or
              termination of access.
            </p>

            <p>
              Users are responsible for maintaining the confidentiality of their
              account credentials and for all activities that occur under their
              accounts. RinDial will take reasonable measures to protect user
              information through security technologies, including SSL
              encryption, but users must also take appropriate steps to
              safeguard their login information. RinDial shall not be held
              responsible for losses resulting from unauthorized use of user
              accounts caused by failure to maintain proper security practices.
            </p>

            <p>
              All content, software, designs, and materials available on the
              RinDial website are the intellectual property of RinDial unless
              otherwise stated. Users may not copy, distribute, modify, reverse
              engineer, or reproduce any part of the platform without prior
              written permission. Limited use of the platform is granted solely
              for accessing RinDial services as intended.
            </p>

            <p>
              RinDial is a Florida-based company, and these Terms of Use shall
              be governed by and interpreted in accordance with the laws of the
              State of Florida. Any disputes arising from the use of the
              RinDial website or services shall be resolved in the appropriate
              courts located within the State of Florida. By using the RinDial
              platform, you acknowledge that you have read, understood, and
              agreed to these Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}