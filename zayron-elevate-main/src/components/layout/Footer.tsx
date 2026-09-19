import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import worldMap from "@/assets/hero-world.png";

const footerLinks = {
  services: [
    { name: "IT & Non-IT Staffing Solutions", path: "/services" },
    { name: "Application Development", path: "/services" },
    { name: "CSV & Regulatory Compliance", path: "/services" },
    { name: "Quality Assurance & Testing", path: "/services" },
    { name: "VAPT & Security Assessment", path: "/services" },
    { name: "Enterprise Solutions", path: "/services" },
    { name: "Digital Transformation", path: "/services" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Projects & Products", path: "/projects" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Careers", path: "/contact" },
    { name: "Contact", path: "/contact" },
    { name: "Student Projects", path: "/academic" },
    { name: "Internships", path: "/academic" },
    { name: "Training Programs", path: "/academic" },
  ],
};

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const contactInfo = [
  { Icon: MapPin, lines: ["1-6-6, Sriram Nagar, Kakinada (Urban),", "Andhra Pradesh – 533003, India"], href: undefined as string | undefined },
  { Icon: Phone, lines: ["+91 9346083979"], href: "tel:+919346083979" },
  { Icon: Mail, lines: ["info@zayron.in"], href: "mailto:info@zayron.in" },
];

const RedDash = () => (
  <span className="inline-block h-[2px] w-8 bg-[#E63946]" aria-hidden="true" />
);

/* Chevron that slides in on hover, matching the reference arrows */
const Chevron = () => (
  <span
    aria-hidden="true"
    className="w-0 overflow-hidden text-[#E63946] text-xs transition-all duration-200 group-hover:w-3 group-hover:translate-x-0.5"
  >
    &rsaquo;
  </span>
);

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#060606] text-white">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={worldMap}
          alt=""
          className="absolute right-0 bottom-16 w-[560px] max-w-[70%] opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <svg
          className="absolute bottom-0 right-0 w-[1200px] max-w-none opacity-70"
          viewBox="0 0 1200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-50 260 C 250 140, 520 300, 800 200 S 1150 120, 1300 210" stroke="url(#wave1)" strokeWidth="1.5" />
          <path d="M-50 290 C 280 190, 560 330, 840 240 S 1160 170, 1300 250" stroke="url(#wave2)" strokeWidth="1" />
          <path d="M-50 235 C 220 120, 500 270, 780 170 S 1140 90, 1300 180" stroke="url(#wave3)" strokeWidth="0.6" opacity="0.6" />
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="1300" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E63946" stopOpacity="0" />
              <stop offset="0.45" stopColor="#E63946" stopOpacity="0.55" />
              <stop offset="1" stopColor="#E63946" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave2" x1="0" y1="0" x2="1300" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff6b5e" stopOpacity="0" />
              <stop offset="0.5" stopColor="#ff6b5e" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ff6b5e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave3" x1="0" y1="0" x2="1300" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E63946" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E63946" stopOpacity="0.25" />
              <stop offset="1" stopColor="#E63946" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute -bottom-24 right-0 w-[520px] h-[320px] bg-[#E63946]/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#E63946]/5 blur-[140px] rounded-full" />
      </div>
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <img
                src="/logo1_cropped.png"
                alt="Zayron Infotech logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="flex flex-col leading-tight">
                <span
                  className="text-[22px] font-bold whitespace-nowrap"
                  style={{ fontFamily: "'Bodoni MT', 'Bodoni 72', 'Didot', serif", letterSpacing: "0.02em" }}
                >
                  <span className="text-white">Zayron</span>{" "}
                  <span className="text-[#E63946]">Infotech</span>
                </span>
                <span className="text-[11px] text-white/40 tracking-wide">Pvt. Ltd.</span>
              </span>
            </Link>

            <p className="font-sans text-[10px] font-semibold tracking-[0.22em] text-white/45 uppercase mb-4">
              Products &middot; Technology &middot; Business Solutions
            </p>
            <RedDash />

            <p className="font-sans text-white/55 text-sm leading-relaxed mt-6 mb-8 max-w-xs">
              We build intelligent products and deliver secure, scalable technology
              solutions that help businesses solve complex challenges, improve
              efficiency, and accelerate digital transformation.
            </p>

            <div className="flex flex-wrap gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/70 hover:text-white hover:border-[#E63946]/60 hover:bg-[#E63946]/10 transition-colors duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
            aria-label="Services"
          >
            <h4 className="font-sans text-sm font-bold tracking-[0.14em] text-white uppercase mb-2">Services</h4>
            <RedDash />
            <ul className="space-y-3.5 mt-6">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group font-sans text-white/55 hover:text-white text-[13.5px] transition-colors duration-200 inline-flex items-center"
                  >
                    {link.name}
                    <Chevron />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Company */}
          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
            aria-label="Company"
          >
            <h4 className="font-sans text-sm font-bold tracking-[0.14em] text-white uppercase mb-2">Company</h4>
            <RedDash />
            <ul className="space-y-3.5 mt-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group font-sans text-white/55 hover:text-white text-[13.5px] transition-colors duration-200 inline-flex items-center"
                  >
                    {link.name}
                    <Chevron />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="font-sans text-sm font-bold tracking-[0.14em] text-white uppercase mb-2">Contact Us</h4>
            <RedDash />

            <ul className="space-y-5 mt-6 mb-8">
              {contactInfo.map(({ Icon, lines, href }) => (
                <li key={lines[0]} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#E63946]" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="font-sans text-white/60 hover:text-white text-sm leading-relaxed transition-colors pt-2.5"
                    >
                      {lines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </a>
                  ) : (
                    <span className="font-sans text-white/60 text-sm leading-relaxed pt-2.5">
                      {lines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E63946] to-[#ff4d3d] text-white text-sm font-semibold shadow-lg shadow-[#E63946]/25 hover:shadow-[#E63946]/40 transition-shadow duration-300"
              >
                Get In Touch
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Zayron Infotech Pvt. Ltd. All rights reserved.
          </p>
          <nav className="flex items-center gap-3 text-xs font-sans" aria-label="Legal">
            <a href="#" className="text-white/40 hover:text-[#E63946] transition-colors">Privacy Policy</a>
            <span className="text-white/15" aria-hidden="true">|</span>
            <a href="#" className="text-white/40 hover:text-[#E63946] transition-colors">Terms of Service</a>
            <span className="text-white/15" aria-hidden="true">|</span>
            <a href="#" className="text-white/40 hover:text-[#E63946] transition-colors">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

