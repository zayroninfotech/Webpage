import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import academicBg from "@/assets/hero-2.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Project Guidance",
    description:
      "Industry-oriented technical project guidance for diploma, undergraduate, and postgraduate students.",
    features: [
      "Real-world project topics",
      "Expert mentorship",
      "Industry best practices",
      "Complete documentation",
      "Presentation preparation",
    ],
  },
  {
    icon: Briefcase,
    title: "Internship Programs",
    description:
      "Structured internships providing hands-on exposure to real-time industry projects.",
    features: [
      "Live project experience",
      "Professional mentoring",
      "Skill-based learning",
      "Completion certification",
      "Career guidance",
    ],
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description:
      "Technology-focused training delivered by experienced industry professionals.",
    features: [
      "Software testing & QA",
      "Automation frameworks",
      "Programming languages",
      "Databases & web tech",
      "Interview readiness",
    ],
  },
];

const benefits = [
  "Bridge academia and industry expectations",
  "Gain real-world practical exposure",
  "Learn professional standards",
  "Improve employability",
  "Build career confidence",
];

const Academic = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 text-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${academicBg})` }}
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
                Academic Engagement
              </h1>

              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />

              <p className="font-sans text-white/75 text-base md:text-lg leading-relaxed">
                Bridging the gap between academic learning and industry excellence
                through structured programs and professional training.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO + BENEFITS */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Industry–Academia Collaboration
                </h2>

                <div className="space-y-4 font-sans text-white/70 leading-relaxed">
                  <p>
                    Zayron Infotech collaborates with educational institutions
                    to align academic learning with real-world industry needs.
                  </p>
                  <p>
                    Our programs include internships, live projects, and
                    professional training guided by industry experts.
                  </p>
                  <p>
                    Students gain practical exposure, confidence, and
                    job-ready skills.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/contact">
                    <Button
                      variant="heroOutline"
                      size="lg"
                      className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
                    >
                      Partner With Us
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black/60 rounded-2xl p-8 border border-amber-500/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">
                      Why Choose Us
                    </h3>
                    <p className="font-sans text-white/60 text-sm">
                      Student-focused benefits
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                      <span className="font-sans text-white/70 text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="py-20 lg:py-28 bg-black/95">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Programs
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
              <p className="font-sans text-white/70 text-lg max-w-2xl mx-auto">
                Structured learning paths designed for real-world readiness
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/60 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                    <program.icon className="w-7 h-7 text-amber-400" />
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3">
                    {program.title}
                  </h3>

                  <p className="font-sans text-white/70 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-black via-black/90 to-amber-900/70 rounded-3xl p-10 lg:p-16 text-center border border-amber-500/20"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Start Your Journey Today
              </h2>

              <p className="font-sans text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Partner with us to build future-ready professionals and
                industry-aligned talent.
              </p>

              <Link to="/contact">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academic;
