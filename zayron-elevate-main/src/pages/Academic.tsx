import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  TrendingUp,
  Zap,
} from "lucide-react";
import academicHeroImg from "@/assets/academic-hero.png";

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
  { icon: TrendingUp, text: "Bridge academia and industry expectations" },
  { icon: Zap,        text: "Gain real-world practical exposure" },
  { icon: Award,      text: "Learn professional standards" },
  { icon: Target,     text: "Improve employability" },
  { icon: Lightbulb,  text: "Build career confidence" },
];

const heroStats = [
  { icon: Lightbulb, label: "Industry-Aligned Learning" },
  { icon: Target,    label: "Practical Exposure" },
  { icon: Award,     label: "Career Readiness" },
];

const bottomStats = [
  { value: "50+",  label: "Institution Collaborations" },
  { value: "500+", label: "Students Trained" },
  { value: "100+", label: "Projects Completed" },
  { value: "90%",  label: "Career Readiness Rate" },
];

const Academic = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden pt-24 pb-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center py-6 lg:py-10">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                <div className="inline-flex items-center gap-2 self-start py-1 text-[#E63946] text-[11px] tracking-[0.22em] uppercase font-bold">
                  <div className="w-6 h-0.5 bg-[#E63946]" />
                  Education & Training
                </div>

                <h1 className="font-serif text-5xl lg:text-[3.8rem] font-bold text-[#111111] leading-[1.08] -mt-1">
                  Academic{" "}
                  <span className="text-[#E63946]">Engagement</span>
                </h1>

                <p className="text-slate-700 font-semibold text-sm lg:text-base -mt-1">
                  Learning Today. Building Tomorrow.
                </p>

                <p className="font-sans text-slate-500 text-sm lg:text-[15px] leading-relaxed max-w-lg">
                  Bridging the gap between academic learning and industry excellence through structured programs, hands-on experience, and professional training guided by industry experts.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c9182f] transition-colors shadow-md shadow-[#E63946]/25"
                  >
                    Partner With Us <ArrowRight size={15} />
                  </Link>
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#111111]/20 text-[#111111] font-semibold rounded-full text-sm hover:border-[#E63946] hover:text-[#E63946] transition-colors"
                  >
                    Explore Programs
                  </a>
                </div>

                {/* Icon stat row */}
                <div className="flex flex-wrap gap-5 pt-2 border-t border-slate-100">
                  {heroStats.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <Icon size={13} className="text-[#E63946]" />
                      <span className="text-slate-500 font-medium text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT — photo + white shard */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[400px] shadow-xl shadow-slate-200/60"
              >
                {/* Photo */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={academicHeroImg}
                    alt="Academic Engagement"
                    className="absolute inset-0 w-full h-full object-cover object-[55%_50%]"
                  />
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                </div>
                {/* White shard */}
                <div
                  className="w-28 flex-shrink-0 bg-white flex flex-col justify-center items-start gap-5 pl-9"
                  style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                >
                  {["IDEAS", "SKILLS", "PROJECTS", "CAREERS"].map((label, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.45 }}
                      className="flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-[#111111] text-[11px] tracking-[0.16em] uppercase leading-none">
                        {label}
                      </span>
                      <div className="w-5 h-px bg-[#E63946]/40" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── STATS STRIP ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#F5F5F3] border-t border-b border-slate-200 py-5 mt-6"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-300">
                {bottomStats.map(({ value, label }) => (
                  <div key={label} className="flex items-center gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                    <div className="w-1 h-8 bg-[#E63946] rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-[#111111] font-bold text-xl leading-none">{value}</p>
                      <p className="text-slate-500 text-xs mt-1">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── INTRO + BENEFITS ── */}
        <section className="pt-20 pb-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — approach text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-6 bg-[#E63946]" />
                  <span className="text-[#E63946] text-[10px] tracking-[0.22em] uppercase font-bold">Our Approach</span>
                </div>

                <h2 className="font-serif text-3xl md:text-[2.2rem] font-bold text-[#111111] leading-tight mb-1">
                  Industry–Academia{" "}
                  <span className="text-[#E63946]">Collaboration</span>
                </h2>

                <div className="w-10 h-[3px] bg-[#E63946] rounded-full mb-6" />

                <div className="space-y-3 font-sans text-slate-600 text-[15px] leading-relaxed mb-8">
                  <p>Zayron Infotech collaborates with educational institutions to align academic learning with real-world industry needs.</p>
                  <p>Our programs include internships, live projects, and professional training guided by industry experts.</p>
                  <p>Students gain practical exposure, confidence, and job-ready skills.</p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c9182f] transition-colors shadow-md shadow-[#E63946]/25"
                >
                  Connect With Us <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Right — Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-[#F9F9F8] rounded-3xl p-8 border border-slate-200/80"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#B91C2E] flex items-center justify-center shadow-lg shadow-[#E63946]/25 flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#111111]">Why Choose Us</h3>
                    <p className="text-slate-500 text-xs mt-0.5">Student-focused benefits</p>
                  </div>
                </div>

                {/* Benefits list with icons */}
                <div className="space-y-2">
                  {benefits.map(({ icon: Icon, text }, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-[#E63946]/25 hover:shadow-sm transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E63946]/8 group-hover:bg-[#E63946] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <Icon className="w-3.5 h-3.5 text-[#E63946] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-sans text-slate-700 text-sm font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROGRAMS ── */}
        <section id="programs" className="pt-16 pb-20 bg-[#F5F5F3]">
          <div className="container mx-auto px-4 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-[#E63946]" />
                <span className="text-[#E63946] text-[11px] tracking-[0.22em] uppercase font-bold">Our Programs</span>
                <div className="h-px w-8 bg-[#E63946]" />
              </div>
              <h2 className="font-serif text-3xl md:text-[2.4rem] font-bold text-[#111111] leading-tight mb-3">
                Structured Learning Paths for{" "}
                <span className="text-[#E63946]">Real-World Readiness</span>
              </h2>
              <p className="font-sans text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
                Hands-on programs designed to bridge the gap between classroom learning and industry expectations.
              </p>
            </div>

            {/* Program cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#E63946]/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Red accent bar */}
                  <div className="h-1 w-full bg-[#E63946]" />

                  <div className="p-6">
                    {/* Icon + number */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#B91C2E] flex items-center justify-center shadow-md shadow-[#E63946]/25 flex-shrink-0">
                        <program.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                      </div>
                      <span className="font-serif text-5xl font-bold text-slate-100 group-hover:text-[#E63946]/12 transition-colors duration-300 leading-none select-none">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title + label */}
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-px w-4 bg-[#E63946]/50" />
                      <span className="text-[#E63946] text-[9px] tracking-[0.22em] uppercase font-bold">Program</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#111111] mb-2 leading-tight">
                      {program.title}
                    </h3>
                    <p className="font-sans text-slate-500 text-sm mb-5 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-1.5">
                      {program.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 bg-[#F5F5F3] hover:bg-[#FFF0F1] transition-colors group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0" />
                          <span className="font-sans text-slate-700 text-xs font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#111111] via-[#1c1c1c] to-[#2a0a0e] rounded-3xl p-10 lg:p-16 text-center border border-[#E63946]/20 overflow-hidden"
            >
              {/* Decorative dot grid */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
              />
              {/* Glow orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-[#E63946]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-8 bg-[#E63946]" />
                  <span className="text-[#E63946] text-[11px] tracking-[0.22em] uppercase font-bold">Join Us</span>
                  <div className="h-px w-8 bg-[#E63946]" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Start Your Journey{" "}
                  <span className="text-[#E63946]">Today</span>
                </h2>

                <p className="font-sans text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Partner with us to build future-ready professionals and industry-aligned talent.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#E63946] text-white font-semibold rounded-full text-base hover:bg-[#c9182f] transition-colors shadow-lg shadow-[#E63946]/30"
                  >
                    Get Started <ArrowRight size={18} />
                  </Link>
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-full text-base hover:bg-white/10 transition-colors"
                  >
                    View Programs
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academic;
