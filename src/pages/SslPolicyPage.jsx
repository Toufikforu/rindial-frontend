export default function SslPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.1),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(255,0,0,0.08),transparent_22%),linear-gradient(to_bottom,#020202,#120000,#030303)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,0,0,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,0,0,0.08)] backdrop-blur-sm md:p-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            RinDial <span className="text-red-500">SSL Policy</span>
          </h1>

          <p className="mt-4 text-base text-white/70 md:text-lg">
            <span className="font-semibold text-white">Effective Date:</span>{" "}
            03/01/2026
          </p>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/85">
            <p>
              RinDial is committed to protecting the security and privacy of all
              users who access our website and services. To ensure that your
              information remains safe, we utilize Secure Socket Layer (SSL)
              technology. SSL encryption protects data transmitted between your
              browser and our servers, preventing unauthorized access,
              interception, or tampering. This technology helps ensure that
              sensitive information such as contact details, login credentials,
              and campaign data remains secure while using RinDial’s platform.
            </p>

            <p>
              When you visit the RinDial website, SSL encryption automatically
              establishes a secure connection between your device and our
              servers. This secure connection ensures that all communications
              and data transfers are encrypted using industry-standard security
              protocols. The presence of SSL can typically be identified by the{" "}
              <span className="text-red-400">“https://”</span> prefix in the
              website address and the lock icon displayed in your browser. These
              indicators confirm that the connection is encrypted and that your
              information is being transmitted securely.
            </p>

            <p>
              RinDial regularly monitors and updates its security practices to
              maintain strong protection against cyber threats. While SSL
              encryption significantly reduces the risk of unauthorized access,
              users are also encouraged to maintain their own security
              practices. This includes protecting login credentials, using
              secure internet connections, and avoiding the sharing of sensitive
              information through unsecured channels.
            </p>

            <p>
              RinDial is a Florida-based company and operates in compliance with
              applicable state and federal laws. This SSL Policy, as well as any
              disputes related to website security or data protection, shall be
              governed by and interpreted in accordance with the laws of the
              State of Florida. By using the RinDial website and services, you
              acknowledge and agree to the terms outlined in this SSL Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}