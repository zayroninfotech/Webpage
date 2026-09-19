import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroWorld from "@/assets/hero-world.png";

const slides = [
  {
    title: ["Building Technology.", "Delivering Business Solutions."],
    titleRedIndex: 1,
    tags: "Products • AI • Innovation • Technology",
    description:
      "Zayron Infotech is a product-driven technology company building intelligent digital products, AI-powered platforms, enterprise applications, and scalable technology solutions while delivering customized services aligned with the evolving needs of modern businesses.",
  },
  {
    title: ["Quality Built Into Every Stage."],
    titleRedIndex: -1,
    tags: "Development • Testing • Security • Validation",
    description:
      "From requirements and architecture to development, testing, security assessment, validation, and deployment, we follow a structured, quality-driven approach to build reliable, secure, scalable, and business-ready applications.",
  },
  {
    title: ["Our Products. Our Technology. Our Expertise."],
    titleRedIndex: -1,
    tags: "Products • AI • Automation • Engineering",
    description:
      "We build and continuously enhance our own technology products, AI-enabled platforms, automation tools, and internal applications. This hands-on product engineering expertise strengthens the technology solutions and services we deliver to our clients.",
  },
  {
    title: ["Turning Requirements Into", "Digital Solutions."],
    titleRedIndex: 1,
    tags: "Consulting • Development • Quality • Transformation",
    description:
      "We understand each client's business requirements and transform them into tailored technology solutions through application development, testing, cybersecurity, CSV, audits, SAP, HRMS, and digital transformation services.",
  },
];


const INTERVAL = 7000;

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

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">

      {/* ── Background image (locked, never moves) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroWorld})`,
          willChange: "auto",
          transform: "translateZ(0)",
        }}
      />
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Strong left column dark — makes text crisp and readable */}
      <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-black/[0.92] via-black/[0.75] to-transparent" />
      {/* Extra darkness on far-left edge */}
      <div className="absolute inset-y-0 left-0 w-[30%] bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

{/* ── Main content ── */}
      <div className="relative z-10 h-full flex items-center" style={{ paddingTop: "88px" }}>
        <div className="container mx-auto px-6 lg:px-14">
          <div className="max-w-[580px]">

            {/* Tags row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tags-${current}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-5 h-[2px] bg-red-500 shrink-0" />
                <span className="text-white/55 text-[10px] tracking-[0.24em] uppercase font-semibold">
                  {slide.tags}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="font-extrabold leading-[1.08] mb-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 3.2vw, 2.9rem)",
                  textShadow: "0 2px 24px rgba(0,0,0,0.7)",
                }}
              >
                {slide.title.map((line, i) => (
                  <span
                    key={i}
                    className="block"
                    style={{ color: i === slide.titleRedIndex ? "#E63946" : "#ffffff" }}
                  >
                    {line}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Red rule */}
            <motion.div
              className="h-[3px] bg-red-500 rounded-full mb-4"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            />

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="leading-relaxed mb-6 max-w-[480px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.82rem, 1.1vw, 0.93rem)",
                  color: "rgba(255,255,255,0.68)",
                  textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                }}
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>



          </div>
        </div>
      </div>

      {/* ── Slide progress dots ── */}
      <div className="absolute bottom-10 left-6 lg:left-16 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 48 : 20, background: "rgba(255,255,255,0.18)" }}
          >
            {i === current && (
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-red-500"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Bottom tagline ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3"
      >
        <div className="w-5 h-px bg-red-500/50" />
        <span className="text-white/22 text-[9px] tracking-[0.3em] uppercase font-medium whitespace-nowrap">
          Ideas Today &nbsp;|&nbsp; A Smarter Tomorrow
        </span>
        <div className="w-5 h-px bg-red-500/50" />
      </motion.div>

    </section>
  );
};
