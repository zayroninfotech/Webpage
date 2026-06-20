import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    badge: "IT & Business Solutions",
    title: "Empowering Business Transformation",
    subtitle: "Delivering Scalable Solutions Across Technology and Business Domains",
    description:
      "Partner with us to deliver reliable, scalable, and high-quality solutions across technology and business domains. We collaborate with organizations to design, implement, and manage innovative IT and non-IT solutions that drive efficiency and long-term value.",
  },
  {
    image: hero2,
    badge: "Talent Excellence",
    title: "High-Quality Professionals for Business Excellence",
    subtitle: "Delivering Talent Excellence Across Industries",
    description:
      "We provide carefully vetted IT and non-IT professionals with proven expertise. Our flexible staffing solutions support both contract and permanent hiring needs.",
  },
  {
    image: hero3,
    badge: "Cloud & Digital",
    title: "Cloud & Digital Innovation",
    subtitle: "Future-Ready Technology Architecture",
    description:
      "Modernize your infrastructure with cutting-edge cloud solutions, automation, and digital transformation services.",
  },
  {
    image: hero4,
    badge: "Security",
    title: "Security & Compliance",
    subtitle: "Trusted Protection for Your Business",
    description:
      "Ensure regulatory compliance and safeguard your business assets through comprehensive security and compliance services.",
  },
];

const INTERVAL = 8000;

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
    }, 50);
    const next = setTimeout(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, INTERVAL);
    return () => {
      clearInterval(tick);
      clearTimeout(next);
    };
  }, [current]);

  const goTo = (i: number) => setCurrent(i);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      {/* Persistent dark base — prevents any white flash */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Background layers */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-[1]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center pt-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mx-auto max-w-[800px] flex flex-col items-center">

            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-5 inline-flex items-center gap-3"
              >
                <span className="h-px w-8 bg-amber-400/60" />
                <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] tracking-[0.18em] uppercase font-bold backdrop-blur-sm">
                  {slides[current].badge}
                </span>
                <span className="h-px w-8 bg-amber-400/60" />
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white font-extrabold tracking-tight leading-[1.08] mb-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  textShadow: "0 4px 32px rgba(0,0,0,0.7)",
                }}
              >
                {slides[current].title}
              </motion.h1>
            </AnimatePresence>

            {/* Divider */}
            <div className="w-14 h-[2px] bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full mb-4" />

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-amber-400 font-semibold tracking-[0.14em] uppercase text-[11px] md:text-xs mb-5"
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-white/65 leading-relaxed max-w-[560px] mx-auto"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
              >
                {slides[current].description}
              </motion.p>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500/30 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500/30 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className="relative h-1 rounded-full overflow-hidden transition-all duration-300" style={{ width: i === current ? 48 : 24, background: "rgba(255,255,255,0.25)" }}>
            {i === current && (
              <motion.div
                className="absolute inset-y-0 left-0 bg-amber-400 rounded-full"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-20 font-mono text-white/50 text-sm">
        <span className="text-amber-400 font-bold">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        {String(slides.length).padStart(2, "0")}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};
