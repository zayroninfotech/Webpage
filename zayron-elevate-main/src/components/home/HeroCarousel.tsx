import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    title: "Empowering Business Transformation",
    subtitle: "Delivering Scalable Solutions Across Technology and Business Domains",
    description:
      "Partner with us to deliver reliable, scalable, and high-quality solutions across technology and business domains. We collaborate with organizations to design, implement, and manage innovative IT and non-IT solutions that drive efficiency and long-term value.",
  },
  {
    image: hero2,
    title: "High-Quality Professionals for Business Excellence",
    subtitle: "Delivering Talent Excellence Across Industries",
    description:
      "We provide carefully vetted IT and non-IT professionals with proven expertise. Our flexible staffing solutions support both contract and permanent hiring needs.",
  },
  {
    image: hero3,
    title: "Cloud & Digital Innovation",
    subtitle: "Future-Ready Technology Architecture",
    description:
      "Modernize your infrastructure with cutting-edge cloud solutions, automation, and digital transformation services.",
  },
  {
    image: hero4,
    title: "Security & Compliance",
    subtitle: "Trusted Protection for Your Business",
    description:
      "Ensure regulatory compliance and safeguard your business assets through comprehensive security and compliance services.",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              filter: "contrast(1.1) saturate(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-[820px]">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-amber-400 font-semibold tracking-widest uppercase mb-6"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-8"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto text-white/75 text-base md:text-lg leading-relaxed mb-14 max-w-[640px]"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-6"
            >
              <Link to="/services">
                <Button variant="heroWhite" size="hero">
                  Explore Our Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="heroGold" size="hero">
                  Contact Us
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
