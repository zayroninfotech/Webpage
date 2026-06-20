import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/hero-303.jpeg"; // horse logo (PNG/SVG preferred)

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
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          fixed top-0 left-0 right-0 z-50
          bg-black shadow-md border-b border-white/10
        "
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* BRAND: LOGO + NAME */}
       
            <Link to="/" className="flex items-center gap-2">
              {/* Horse Icon */}
              <img
                src={logo}
                alt="Zayron Logo"
                className="h-10 w-auto object-contain"
              />

              {/* Brand Name */}
              <span
                className="
                  font-bold text-lg tracking-wide leading-none
                  bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300
                  bg-clip-text text-transparent
                "
              >
                ZAYRON INFOTECH
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="bg-black border-b border-white/10">
              <nav className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                          "block py-3 px-4 rounded-lg font-medium",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:bg-white/10"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
