import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Lightbulb, Settings2, ShieldCheck, TrendingUp,
  Cpu, Shield, Code2, Target, Star, Users,
  Users2, ClipboardList, Globe, Trophy,
  ArrowRight, FileText,
} from "lucide-react";
import heroImg    from "@/assets/why-choose-hero.png";
import ctaImg     from "@/assets/projects-hero-new.png";

/* ── Data ───────────────────────────────────────────────── */
const heroStats = [
  { icon: Lightbulb, label: "Innovate", sub: "Faster" },
  { icon: Settings2, label: "Build",    sub: "Smarter" },
  { icon: ShieldCheck, label: "Stay",   sub: "Compliant" },
  { icon: TrendingUp, label: "Grow",    sub: "Together" },
];

const reasons = [
  {
    icon: Cpu, num: "01",
    title: "50+ AI-Powered Tools",
    description: "Our ZayroDocX platform provides access to 50+ AI-integrated tools, giving your organization advanced AI capabilities without the complexity of building them from scratch.",
  },
  {
    icon: Shield, num: "02",
    title: "Industry Compliance Expertise",
    description: "Deep expertise in CSV activities, internal and external audits, and gap assessments for Pharma, Power, and Manufacturing industries — ensuring audit-ready compliance.",
  },
  {
    icon: Code2, num: "03",
    title: "End-to-End Development",
    description: "We deliver complete web, mobile, and .Exe application development with rigorous manual and automation testing, OWASP security testing, and code quality certificates.",
  },
  {
    icon: Target, num: "04",
    title: "ISO-Standard Implementation",
    description: "Our HRMS and business solutions are implemented to ISO standards. ZayroConnect HRMS and our HRMS implementation services for other companies meet international quality benchmarks.",
  },
  {
    icon: Star, num: "05",
    title: "Security-First Approach",
    description: "From OWASP testing and security testing to code quality checks and vulnerability assessments — security is built into every layer of our development and compliance services.",
  },
  {
    icon: Users, num: "06",
    title: "Digital Transformation",
    description: "We enable complete digital transformation through SAP-based activities, digital marketing services, enterprise application development, and full-spectrum IT solutions.",
  },
];

const statsStrip = [
  { icon: Users2,       value: "50+",        label: "AI-Powered Tools" },
  { icon: ClipboardList, value: "100+",       label: "Projects Delivered" },
  { icon: Globe,        value: "Industries",  label: "Pharma | Power | Manufacturing\nIT | Healthcare | Renewable Energy" },
  { icon: Trophy,       value: "Global",      label: "Compliance Standards\nISO | GxP | OWASP" },
];

const apart = [
  { icon: FileText, text: "ZayroDocX with 50+ AI-integrated tools" },
  { icon: Shield,   text: "CSV, OWASP & security testing expertise" },
  { icon: FileText, text: "ISO-standard HRMS implementation" },
  { icon: FileText, text: "Internal & external audit capabilities" },
  { icon: FileText, text: "SAP-based activities & gap assessments" },
  { icon: Code2,    text: "End-to-end application development" },
];

const ctaBadges = [
  { icon: Cpu,         label: "AI & Innovation" },
  { icon: Globe,       label: "Enterprise Solutions" },
  { icon: ShieldCheck, label: "Quality & Compliance" },
  { icon: Shield,      label: "Secure Technology" },
  { icon: TrendingUp,  label: "Digital Transformation" },
];

/* ── Component ──────────────────────────────────────────── */
const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden pt-24">
          <div className="grid lg:grid-cols-2 min-h-[520px] items-stretch">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center px-6 lg:px-16 py-14 lg:py-20"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-px bg-[#E63946]" />
                <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">
                  People | Technology | Progress
                </span>
              </div>

              <h1 className="font-serif font-bold text-[#111111] leading-[1.08] mb-4"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                Why Choose<br />
                <span className="text-[#E63946]">Zayron?</span>
              </h1>

              <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-7 max-w-[460px]">
                From 50+ AI-powered tools and CSV compliance expertise to end-to-end application
                development and ISO-standard HRMS — we help businesses build a smarter, safer
                and brighter tomorrow.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="/contact">
                  <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E63946] hover:bg-[#c62f3b] text-white font-semibold text-sm shadow-lg shadow-[#E63946]/20 transition-all duration-200">
                    Get Started Today <ArrowRight size={14} />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#E63946] text-[#E63946] hover:bg-red-50 font-semibold text-sm transition-all duration-200">
                    Explore Our Solutions
                  </motion.button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {heroStats.map(({ icon: Icon, label, sub }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#E63946]" strokeWidth={1.8} />
                    <span className="font-bold text-sm text-[#111111] leading-tight">
                      {label}<br />
                      <span className="font-normal text-xs text-slate-500">{sub}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — hero image full-bleed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden min-h-[380px]"
            >
              <img src={heroImg} alt="Why Choose Zayron"
                className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* ── DIFFERENTIATORS ── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">

            {/* Header — split */}
            <div className="grid lg:grid-cols-2 gap-6 items-end mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-px bg-[#E63946]" />
                  <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">Our Differentiators</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#111111] leading-[1.15]">
                  More Than Services —<br />
                  A Long-Term Technology Partner
                </h2>
                <div className="w-10 h-[3px] bg-[#E63946] rounded-full mt-4" />
              </div>
              <p className="text-slate-500 text-[0.95rem] leading-relaxed lg:pl-8">
                We combine domain expertise, advanced technology, and a customer-centric approach
                to deliver solutions that create real business value.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reasons.map((r, i) => (
                <motion.div key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group bg-white border border-slate-200 hover:border-[#E63946]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#E63946]/10 transition-colors">
                      <r.icon className="w-5 h-5 text-[#E63946]" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-bold">{r.num}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-[#111111] text-lg font-bold mb-2 group-hover:text-[#E63946] transition-colors duration-200">
                      {r.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <div className="w-7 h-7 rounded-full border border-slate-200 group-hover:border-[#E63946] group-hover:bg-[#E63946] flex items-center justify-center transition-all duration-200">
                      <ArrowRight size={13} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-[#111111] py-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-white/10">
              {statsStrip.map(({ icon: Icon, value, label }, i) => (
                <motion.div key={value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-4 px-6 py-4 first:pl-0 last:pr-0"
                >
                  <Icon className="w-8 h-8 text-[#E63946] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-bold text-xl leading-none mb-1">{value}</p>
                    <p className="text-white/50 text-[11px] font-medium leading-snug whitespace-pre-line">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Red accent bottom */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E63946]/60 to-transparent mt-8" />
        </section>

        {/* ── WHAT SETS US APART ── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">

            {/* Header — split */}
            <div className="grid lg:grid-cols-2 gap-6 items-start mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-px bg-[#E63946]" />
                  <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">Our Strength</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#111111]">
                  What Sets Us Apart
                </h2>
                <div className="w-10 h-[3px] bg-[#E63946] rounded-full mt-4" />
              </div>
              <p className="text-slate-500 text-[0.95rem] leading-relaxed lg:pt-10">
                We go beyond technology — we deliver measurable impact through innovation,
                quality, and a people-first approach.
              </p>
            </div>

            {/* Items grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apart.map(({ icon: Icon, text }, i) => (
                <motion.div key={text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-white border border-slate-100 hover:border-[#E63946]/25 rounded-xl px-4 py-3.5 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#E63946]" strokeWidth={1.8} />
                  </div>
                  <span className="text-slate-700 text-sm font-medium leading-snug">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative bg-white overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_auto] gap-0 items-stretch min-h-[260px]">

              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-7 lg:py-10 pr-10 flex flex-col justify-center"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-px bg-[#E63946]" />
                  <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">Let's Build Tomorrow Together</span>
                </div>

                <h2 className="font-bold text-[#111111] leading-[1.1] mb-4"
                  style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)" }}>
                  Transform Your Business with{" "}
                  <span className="text-[#E63946]">the Right Technology</span>
                </h2>

                <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-7 max-w-[500px]">
                  Partner with Zayron Infotech to develop secure, scalable, and intelligent
                  technology solutions aligned with your business objectives. From AI-powered
                  products and enterprise applications to quality, compliance, cybersecurity,
                  and digital transformation, we deliver solutions designed to create lasting
                  business value.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Link to="/contact">
                    <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E63946] hover:bg-[#c62f3b] text-white font-semibold text-sm shadow-lg shadow-[#E63946]/20 transition-all duration-200">
                      Get Started Today <ArrowRight size={14} />
                    </motion.button>
                  </Link>
                  <Link to="/services">
                    <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#E63946] text-[#E63946] hover:bg-red-50 font-semibold text-sm transition-all duration-200">
                      Explore Our Solutions
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-5">
                  {ctaBadges.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-slate-500">
                      <Icon className="w-4 h-4 text-[#E63946]" strokeWidth={1.8} />
                      <span className="text-xs font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — photo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative w-[500px] hidden lg:block ml-4"
              >
                <img src={ctaImg} alt="Transform your business"
                  className="w-full h-full object-cover object-right" />
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
              </motion.div>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
