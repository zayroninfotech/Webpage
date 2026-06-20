import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "IT & Non-IT Staffing Solutions", path: "/services" },
    { name: "HRMS Application", path: "/services" },
    { name: "CSV & Regulatory Compliance", path: "/services" },
    { name: "Quality Assurance & Testing", path: "/services" },
  ],
  academic: [
    { name: "Student Projects", path: "/academic" },
    { name: "Internships", path: "/academic" },
    { name: "Training Programs", path: "/academic" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            {/* Brand Name */}
            <div className="mb-6 leading-tight">
              <div className="font-serif text-xl font-semibold text-amber-400">
                Zayron Infotech
              </div>
              <div className="font-sans text-xs text-white/70 tracking-wide">
                Pvt. Ltd.
              </div>
            </div>

            <p className="font-sans text-white/70 text-sm leading-relaxed mb-6">
              Empowering businesses with reliable, scalable IT and non-IT services,
              along with innovative application products designed for growth and efficiency.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-amber-500/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-white/60 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[...footerLinks.company, ...footerLinks.academic].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-white/60 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 font-sans text-white/60">
                <MapPin size={18} className="text-amber-400 mt-0.5" />
                1-6-6, Sriram Nagar, Kakinada (Urban),
                Andhra Pradesh – 533003, India
              </li>
              <li className="flex items-center gap-3 font-sans">
                <Phone size={18} className="text-amber-400" />
                <a
                  href="tel:+919346083979"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  +91 9346083979
                </a>
              </li>
              <li className="flex items-center gap-3 font-sans">
                <Mail size={18} className="text-amber-400" />
                <a
                  href="mailto:info@zayron.in"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  info@zayron.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-white/50 text-sm">
            © {new Date().getFullYear()} Zayron Infotech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-sans">
            <a
              href="#"
              className="text-white/50 hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
