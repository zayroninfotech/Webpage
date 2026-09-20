import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, ShieldCheck, Globe, BarChart3, Lock } from "lucide-react";
import ctaBg from "@/assets/cta-bg.png";

const badges = [
  { icon: Cpu,         label: "AI & Innovation" },
  { icon: Globe,       label: "Enterprise Solutions" },
  { icon: ShieldCheck, label: "Quality & Compliance" },
  { icon: Lock,        label: "Secure Technology" },
  { icon: BarChart3,   label: "Digital Transformation" },
];


export const CTASection = () => {
  return (
    <section className="relative bg-white overflow-hidden">

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-0 items-stretch min-h-[480px]">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16 lg:py-20 pr-10 flex flex-col justify-center"
          >
            {/* Heading */}
            <h2 className="font-bold text-[#111111] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}>
              Transform Your Business with{" "}
              <span className="text-red-600">the Right Technology</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8 max-w-[520px]">
              Partner with Zayron Infotech to develop secure, scalable, and intelligent technology
              solutions aligned with your business objectives. From AI-powered products and enterprise
              applications to quality, compliance, cybersecurity, and digital transformation, we deliver
              solutions designed to create lasting business value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/20 transition-all duration-250"
                >
                  Get Started Today <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-red-500 text-red-600 hover:bg-red-50 font-semibold text-sm transition-all duration-250"
                >
                  Explore Our Solutions
                </motion.button>
              </Link>
            </div>

            {/* Icon badges row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <b.icon className="w-4 h-4 text-red-500" strokeWidth={1.8} />
                  <span className="text-[12px] font-semibold">{b.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3 text-slate-400">
              <span className="w-6 h-px bg-red-400" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                AI &amp; Innovation &nbsp;·&nbsp; Enterprise Solutions &nbsp;·&nbsp; Quality &amp; Compliance &nbsp;·&nbsp; Secure Technology &nbsp;·&nbsp; Digital Transformation
              </span>
            </div>
          </motion.div>

          {/* ── Right — photo + overlays ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-[520px] hidden lg:block"
          >
            {/* Photo */}
            <img
              src={ctaBg}
              alt="Team working"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient on left edge to blend with white content */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

          </motion.div>

        </div>
      </div>

      {/* Bottom red accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </section>
  );
};
