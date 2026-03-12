import {
  Facebook,
  Instagram,
  Music2,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import footerBg from "../assets/footer.webp";

function FooterIcon({ children, className = "" }) {
  return (
    <a
      href="#"
      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-red-500/50 hover:bg-red-500/20 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const footerLinks = [
    { name: "SSL", path: "/ssl" },
    { name: "Cookies", path: "/cookies" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Website Disclaimer", path: "/disclaimer" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-red-800/60 text-white"
      style={{
        backgroundImage: `
          url(${footerBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-8 right-20 h-24 w-24 rounded-full bg-red-500/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <div className="relative">
            <div className="flex items-center gap-2">
              <img src={logo} alt="RinDial" className="h-20" />
            </div>
            <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <FooterIcon className="bg-[#1877F2] text-white">
              <Facebook size={20} />
            </FooterIcon>
            <FooterIcon className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
              <Instagram size={20} />
            </FooterIcon>
            <FooterIcon className="bg-black text-white">
              <Music2 size={20} />
            </FooterIcon>
            <FooterIcon className="bg-[#1DA1F2] text-white">
              <Twitter size={20} />
            </FooterIcon>
            <FooterIcon className="bg-[#FF0000] text-white">
              <Youtube size={20} />
            </FooterIcon>
            <FooterIcon className="bg-[#0A66C2] text-white">
              <Linkedin size={20} />
            </FooterIcon>
            <FooterIcon className="bg-[#3b82f6] text-white">
              <MessageCircle size={20} />
            </FooterIcon>
            <FooterIcon className="bg-[#60a5fa] text-white">
              <ShieldCheck size={20} />
            </FooterIcon>
            <FooterIcon className="bg-[#facc15] text-black">
              <Briefcase size={20} />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.7)]" />

        <div className="pt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg text-white/90">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="transition hover:text-red-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <p className="mt-8 text-3xl font-medium text-white/75">
            RinDial © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}