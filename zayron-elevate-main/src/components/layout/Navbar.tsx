import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const logo = "/Main_login.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Academic", path: "/academic" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Contact", path: "/contact" },
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
      {/* ── MAIN NAVBAR ───────────────────────────────────── */}
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "bg-[#0a0a0a]/98 backdrop-blur-2xl border-b border-amber-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
              : "bg-gradient-to-b from-black/90 to-black/30 backdrop-blur-sm border-b border-white/5"
          )}
        >
          <nav className="container mx-auto px-4 lg:px-10">
            <div className="flex items-center h-[70px] gap-8">

              {/* ── LOGO ── */}
              <Link to="/" className="flex items-center gap-3 shrink-0 group">
                <img
                  src={logo}
                  alt="Zayron"
                  className="h-12 w-auto object-contain"
                  style={{ mixBlendMode: "lighten", filter: "brightness(1.05) contrast(1.1)" }}
                />
                <span
                  className="text-[20px] text-amber-400"
                  style={{ fontFamily: "'Bodoni MT', 'Bodoni 72', 'Didot', 'Book Antiqua', 'Palatino Linotype', serif", fontWeight: 700, letterSpacing: "0.04em" }}
                >
                  Zayron Infotech
                </span>
              </Link>

              {/* ── CENTER NAV — pill container ── */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <div className={cn(
                  "flex items-center gap-0.5 rounded-full px-2 py-1.5 transition-all duration-500",
                  scrolled
                    ? "bg-white/5 border border-white/8"
                    : "bg-black/30 border border-white/10"
                )}>
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 group"
                      >
                        {/* Active background pill */}
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className={cn(
                          "relative z-10 transition-colors duration-200",
                          isActive ? "text-black font-bold" : "text-white/65 group-hover:text-white"
                        )}>
                          {link.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>


              {/* ── MOBILE BUTTON ── */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ── MOBILE MENU ───────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "fixed left-0 right-0 z-40 lg:hidden",
              scrolled ? "top-[70px]" : "top-[80px]"
            )}
          >
            <div className="bg-[#0c0c0c]/99 backdrop-blur-2xl border-b border-amber-500/20">
              <div className="container mx-auto px-4 py-5">
                <div className="flex flex-col gap-1 mb-4">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={link.path}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                            isActive
                              ? "bg-amber-500/15 text-amber-400 border border-amber-400/25"
                              : "text-white/65 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {link.name}
                          {isActive && <div className="w-2 h-2 rounded-full bg-amber-400" />}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile contact strip */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919346083979"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-white/60 text-xs font-medium hover:border-amber-400/30 hover:text-amber-400 transition-all"
                  >
                    <Phone size={12} /> Call Us
                  </a>
                  <a
                    href="mailto:info@zayron.in"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-bold"
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
