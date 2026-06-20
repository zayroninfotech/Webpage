import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import ctaBg from "@/assets/hero-11.jpg";

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background photo layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-black/80 via-black/70 to-amber-900/30 rounded-3xl p-10 md:p-14 lg:p-20 text-center border border-amber-500/25 overflow-hidden backdrop-blur-sm"
        >
          {/* Card inner glow */}
          <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 70%)" }} />

          {/* Top accent bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-6 bg-amber-400" />
            <span className="px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-400 text-xs tracking-widest uppercase font-semibold">
              Let's Work Together
            </span>
            <span className="h-px w-6 bg-amber-400" />
          </motion.div>

          {/* Heading */}
          <h2 className="relative font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="relative font-sans text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with Zayron Infotech to deliver reliable, scalable, and compliant IT and non-IT solutions.
            Let's collaborate to drive business transformation and long-term value.
          </p>

          {/* Contact quick-links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="tel:+919346083979"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-400/40 text-sm font-sans transition-all"
            >
              <Phone size={15} className="text-amber-400" />
              +91 9346083979
            </a>
            <a
              href="mailto:info@zayron.in"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-400/40 text-sm font-sans transition-all"
            >
              <Mail size={15} className="text-amber-400" />
              info@zayron.in
            </a>
          </div>

          {/* CTA */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="xl"
                className="min-w-[220px] bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/25"
              >
                Get Started Today
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="heroOutline"
                size="xl"
                className="min-w-[180px] border-white/20 text-white/80 hover:bg-white/5 hover:border-white/40"
              >
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
