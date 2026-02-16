import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react";
import aboutBg from "@/assets/hero-5.jpg";

const values = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description:
      "Delivering solutions that meet the highest standards of quality and reliability.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Building long-term relationships based on trust, transparency, and mutual success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing new technologies and methodologies to drive continuous improvement.",
  },
  {
    icon: Target,
    title: "Compliance Focus",
    description:
      "Ensuring all solutions adhere to regulatory standards and industry best practices.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Operating with honesty and ethical standards in all business interactions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Maintaining open communication and clear visibility throughout engagements.",
  },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "Professionals" },
  { value: "8+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Satisfaction", highlight: true },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 text-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutBg})` }}
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-amber-900/50" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Who We Are
              </h1>

              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />

              <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed">
                Zayron Infotech is a premier technology partner dedicated to empowering
                businesses through reliable, scalable, and quality-focused solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENT + STATS */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Empowering Businesses Through Technology
                </h2>

                <div className="space-y-4 font-sans text-white/70 leading-relaxed">
                  <p>
                    Zayron Infotech Pvt. Ltd. delivers reliable, scalable, and
                    quality-focused IT and non-IT solutions. Headquartered in
                    Kakinada, India, we support organizations across industries.
                  </p>
                  <p>
                    Our approach centers on operational excellence, regulatory
                    alignment, and transparent service delivery—ensuring
                    measurable and sustainable outcomes.
                  </p>
                  <p>
                    We collaborate with educational institutions, bridging
                    academia and industry through internships, projects, and
                    professional training programs.
                  </p>
                </div>
              </motion.div>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl p-8 text-center bg-black/60 backdrop-blur-sm border transition-all
                      ${
                        item.highlight
                          ? "border-amber-400/40 shadow-[0_0_30px_rgba(251,191,36,0.15)]"
                          : "border-amber-500/20 hover:border-amber-500/40"
                      }`}
                  >
                    <div
                      className={`font-serif font-semibold mb-2 ${
                        item.highlight
                          ? "text-5xl text-amber-400"
                          : "text-4xl text-amber-400"
                      }`}
                    >
                      {item.value}
                    </div>

                    {/* ✅ NORMAL LABEL */}
                    <div className="font-sans text-sm md:text-base text-white/80 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
            <p className="font-sans text-white/70 text-lg max-w-2xl mx-auto">
              The principles that guide our actions and define who we are
            </p>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/60 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="font-sans text-white/70 leading-relaxed">
                    {value.description}
                  </p>
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

export default About;
