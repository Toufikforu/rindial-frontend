export default function CookiePolicyPage() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.1),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(255,0,0,0.08),transparent_22%),linear-gradient(to_bottom,#020202,#120000,#030303)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,0,0,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,0,0,0.08)] backdrop-blur-sm md:p-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            RinDial <span className="text-red-500">Cookie Policy</span>
          </h1>

          <p className="mt-4 text-base text-white/70 md:text-lg">
            <span className="font-semibold text-white">Effective Date:</span>{" "}
            03/01/2026
          </p>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/85">
            <p>
              RinDial uses cookies and similar tracking technologies to improve
              the functionality, security, and performance of its website and
              services. Cookies are small data files stored on a user’s device
              when visiting a website. They help the website recognize returning
              visitors, remember preferences, and enhance the overall browsing
              experience. By using the RinDial website, you consent to the use
              of cookies as described in this Cookie Policy.
            </p>

            <p>
              Cookies used by RinDial may include essential cookies that are
              necessary for the operation of the website. These cookies allow
              users to navigate the platform, access secure areas, and utilize
              core features such as account login, campaign tools, and
              communication services. Without these cookies, certain functions
              of the RinDial website may not operate properly.
            </p>

            <p>
              RinDial may also use performance and analytics cookies to
              understand how visitors interact with the website. These cookies
              help collect information such as pages visited, time spent on the
              site, and general usage patterns. This information is used only to
              improve the functionality, performance, and user experience of the
              platform. The data collected through analytics cookies is
              generally aggregated and does not personally identify individual
              users.
            </p>

            <p>
              In some cases, functionality cookies may be used to remember user
              preferences and settings. These cookies help provide a more
              personalized browsing experience by remembering selections such as
              language preferences, previously entered information, or login
              sessions. These cookies allow RinDial to deliver a more efficient
              and customized service for returning users.
            </p>

            <p>
              Users have the ability to control or disable cookies through their
              browser settings. Most web browsers allow users to delete cookies,
              block certain cookies, or receive notifications when cookies are
              being used. However, disabling certain cookies may affect the
              performance and functionality of the RinDial website and may limit
              access to some features.
            </p>

            <p>
              RinDial is a Florida-based company, and this Cookie Policy is
              governed by the laws of the State of Florida. RinDial may update
              this Cookie Policy from time to time to reflect changes in
              technology, legal requirements, or website operations. Continued
              use of the RinDial website after updates to this policy indicates
              acceptance of the revised terms.
            </p>

            <p>
              Email us at{" "}
              <a
                href="mailto:Security@RinDial.com"
                className="font-medium text-red-400 transition hover:text-red-300"
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