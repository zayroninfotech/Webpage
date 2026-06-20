import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import {
  Star,
  ShieldCheck,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";
import whyBg from "@/assets/hero-3.jpg"; // hero background image

const reasons = [
  {
    icon: Star,
    title: "Delivery Excellence",
    description:
      "We follow structured delivery models ensuring predictable outcomes, quality assurance, and on-time execution across all engagements.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Our solutions align with industry standards and regulatory requirements, ensuring risk mitigation and audit readiness.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We build long-term partnerships through transparent communication, flexibility, and measurable value delivery.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Execution",
    description:
      "Our focus is on delivering tangible business outcomes that support scalability, efficiency, and growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${whyBg})` }}
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-amber-900/50" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-amber-400">Zayron</span>
              </h1>

              {/* Gold underline */}
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />

              <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed">
                We don&apos;t just provide services; we build lasting partnerships
                founded on trust, quality, and mutual success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* REASONS */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/60 rounded-2xl p-8 lg:p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <reason.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="font-sans text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE POINTS */}
        <section className="py-20 lg:py-28 bg-black/95">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What Sets Us Apart
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                "Structured service delivery",
                "Industry-aligned methodologies",
                "Experienced professionals",
                "Transparent engagement models",
                "Compliance-first approach",
                "Long-term value creation",
              ].map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-black/60 rounded-xl p-6 border border-amber-500/20 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-sans text-white/80 text-sm">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
