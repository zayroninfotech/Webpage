import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Home, Send, ChevronRight, Info, Briefcase, GraduationCap, FolderOpen, Star } from "lucide-react";
import { cn } from "@/lib/utils";
const logo = "/logo1_cropped.png";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Academic", path: "/academic", icon: GraduationCap },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Why Choose Us", path: "/why-choose-us", icon: Star },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Top accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />

        <div
          className={cn(
            "transition-all duration-400",
            scrolled
              ? "bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-b border-slate-200"
              : "bg-white border-b border-slate-100 shadow-sm"
          )}
        >
          <nav className="container mx-auto px-4 lg:px-10">
            <div className="flex items-center h-[84px] gap-4">

              {/* LOGO */}
              <Link to="/" className="flex items-center gap-2 shrink-0 group mr-2">
                <motion.img
                  src={logo}
                  alt="Zayron"
                  className="h-[68px] w-auto object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
<div className="flex flex-col leading-tight">
                  <span
                    className="text-[19px] leading-none whitespace-nowrap"
                    style={{ fontFamily: "'Bodoni MT', 'Bodoni 72', 'Didot', serif", fontWeight: 700, letterSpacing: "0.04em" }}
                  >
                    <span className="text-[#111111]">Zayron</span>{" "}
                    <span style={{ color: "#E63946" }}>Infotech</span>
                  </span>
                  <span className="hidden xl:block text-[9px] text-slate-400 tracking-[0.14em] uppercase font-medium mt-0.5 whitespace-nowrap">
                    Products &middot; Technology &middot; Business Solutions
                  </span>
                </div>
              </Link>

              {/* CENTER NAV */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <div className="flex items-center gap-0.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="relative px-2.5 py-1.5 rounded-full text-[12px] font-medium transition-colors duration-200 group whitespace-nowrap"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500"
                            style={{
                              boxShadow: "0 0 16px rgba(220,38,38,0.4), 0 0 32px rgba(220,38,38,0.15)",
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className={cn(
                          "relative z-10 flex items-center gap-1.5 transition-colors duration-200",
                          isActive ? "text-white font-bold" : "text-slate-400 hover:text-[#E63946]"
                        )}>
                          {Icon && <Icon size={12} strokeWidth={2.5} />}
                          {link.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* GET IN TOUCH BUTTON */}
              <Link to="/contact" className="hidden lg:block shrink-0">
                <motion.span
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E63946] hover:bg-[#c62f3b] text-white text-[12px] font-bold shadow-md shadow-[#E63946]/25 transition-all duration-200 cursor-pointer"
                >
                  <Send size={12} strokeWidth={2.5} />
                  Get In Touch
                </motion.span>
              </Link>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-[#111111] hover:bg-slate-50 transition-all"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={17} />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={17} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[86px] left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-white border-b border-slate-200 shadow-xl">
              <div className="container mx-auto px-4 py-5">
                <div className="flex flex-col gap-1 mb-4">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={link.path}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                            isActive
                              ? "bg-red-50 text-[#E63946] border border-red-100"
                              : "text-slate-400 hover:bg-slate-50 hover:text-[#E63946]"
                          )}
                        >
                          <span className="flex items-center gap-2.5">
                            {Icon && <Icon size={14} />}
                            {link.name}
                          </span>
                          {isActive
                            ? <div className="w-2 h-2 rounded-full bg-red-500 animate-ping-slow" />
                            : <ChevronRight size={14} className="text-slate-300" />
                          }
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919346083979"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-[#111111] text-xs font-medium hover:border-orange-400 hover:text-orange-600 transition-all"
                  >
                    <Phone size={12} /> Call Us
                  </a>
                  <a
                    href="mailto:info@zayron.in"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#E63946] hover:bg-[#c62f3b] text-white text-xs font-bold transition-all"
                  >
                    <Mail size={12} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
