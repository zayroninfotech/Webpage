import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Code2,
  Shield,
  TestTube,
  Cpu,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Hammer,
  ClipboardList,
  TrendingUp,
  Settings,
  Star,
  Headset,
} from "lucide-react";
import servicesHeroImg from "@/assets/services-hero.png";
import svcAppDev from "@/assets/svc-app-dev.png";
import svcTesting from "@/assets/svc-testing.png";
import svcCsv from "@/assets/svc-csv.png";
import svcAi from "@/assets/svc-ai.png";
import svcDigital from "@/assets/svc-digital.png";

const services: {
  id: string; icon: React.ElementType; title: string; titleSuffix: string; subtitle: string;
  description: string; features: string[]; benefits: string[]; image: string;
  tags: { icon: React.ElementType; label: string }[];
}[] = [
  {
    id: "app-dev",
    icon: Code2,
    image: svcAppDev,
    title: "Application",
    titleSuffix: "Development",
    subtitle: "Web, Mobile & Desktop Solutions",
    description:
      "We design and develop scalable web applications, mobile apps (iOS and Android), and .Exe/desktop applications tailored to business requirements. We also deliver professional website designing services to help businesses establish a strong digital presence.",
    features: [
      "Web application development",
      "Mobile app development (iOS & Android)",
      ".Exe / desktop application development",
      "Website designing",
      "UI/UX design & prototyping",
      "API development & integration",
    ],
    benefits: [
      "Scalable, production-ready applications",
      "Cross-platform compatibility",
      "Performance-optimized delivery",
      "End-to-end project ownership",
    ],
    tags: [
      { icon: TrendingUp, label: "Scalable" },
      { icon: Shield, label: "Secure" },
      { icon: CheckCircle, label: "Reliable" },
    ],
  },
  {
    id: "testing",
    icon: TestTube,
    image: svcTesting,
    title: "Testing & Quality",
    titleSuffix: "Assurance",
    subtitle: "Quality. Security. Reliability.",
    description:
      "We help organizations deliver reliable and secure software through structured QA, functional testing, automation, security assessment, API validation, performance testing, and code-quality practices.",
    features: [
      "Manual & Functional Testing",
      "Test Automation",
      "Security Testing",
      "Performance Testing",
      "API Testing",
      "Code Quality & Review",
    ],
    benefits: [
      "Higher Software Reliability",
      "Early Risk Detection",
      "Faster Release Cycles",
      "Secure & Quality-Focused Delivery",
    ],
    tags: [
      { icon: Cpu, label: "Automated" },
      { icon: ClipboardList, label: "Thorough" },
      { icon: CheckCircle, label: "Certified" },
    ],
  },
  {
    id: "csv",
    icon: Shield,
    image: svcCsv,
    title: "CSV & Compliance",
    titleSuffix: "Services",
    subtitle: "Computer System Validation & Regulatory Compliance",
    description:
      "We help regulated organizations validate, assess, and maintain computerized systems through structured CSV, GxP, compliance, audit, and risk-based quality practices — supporting secure, traceable, and audit-ready operations.",
    features: [
      "Computer System Validation (CSV)",
      "GxP & Regulatory Compliance",
      "21 CFR Part 11",
      "GAMP 5 Practices",
      "Audit & Assessment Services",
      "Gap Assessments",
      "SAP & Regulated Systems",
      "Audit Readiness",
    ],
    benefits: [
      "Audit-Ready Documentation",
      "Reduced Compliance Risk",
      "Validated & Controlled Systems",
      "Improved Regulatory Readiness",
    ],
    tags: [
      { icon: Shield, label: "Compliant" },
      { icon: CheckCircle, label: "Validated" },
      { icon: ClipboardList, label: "Audited" },
    ],
  },
  {
    id: "ai-products",
    icon: Cpu,
    image: svcAi,
    title: "AI Products &",
    titleSuffix: "Platforms",
    subtitle: "Our Product Portfolio",
    description:
      "We build our own products — not just client solutions. Our growing portfolio of AI-powered platforms and enterprise applications is designed to solve real business challenges across productivity, workforce management, document processing, collaboration, invoicing, and digital operations.",
    features: [
      "ZayroDocX — AI-powered document & productivity platform",
      "ZayroConnect — Enterprise HRMS platform",
      "ZayroDeck — Secure file-sharing & collaboration",
      "ZayroInvoice — Digital invoicing platform",
      "ZayroPlay — Digital application platform",
      "ZayroSuite — Integrated AI tools suite",
    ],
    benefits: [
      "AI-Powered Innovation",
      "Connected Product Ecosystem",
      "Operational Efficiency",
      "Scalable Digital Solutions",
    ],
    tags: [
      { icon: Cpu, label: "Intelligent" },
      { icon: Code2, label: "Integrated" },
      { icon: TrendingUp, label: "Scalable" },
    ],
  },
  {
    id: "digital",
    icon: Users,
    image: svcDigital,
    title: "Digital &",
    titleSuffix: "Business Services",
    subtitle: "Driving Growth, Efficiency & Business Transformation",
    description:
      "We help businesses grow, optimize, and transform through digital marketing, HRMS implementation, ISO support, IT staffing, software quality services, and business process consulting.",
    features: [
      "Digital Marketing",
      "HRMS Implementation",
      "ISO Implementation Support",
      "IT Staffing & Talent Solutions",
      "Software Quality Services",
      "Business Process Consulting",
    ],
    benefits: [
      "Stronger Digital Presence",
      "Efficient Business Operations",
      "Access to Skilled Talent",
      "Process & Quality Improvement",
    ],
    tags: [
      { icon: TrendingUp, label: "Targeted" },
      { icon: CheckCircle, label: "Measurable" },
      { icon: ArrowRight, label: "Growth" },
    ],
  },
];

const heroStats = [
  { icon: Lightbulb, label: "Innovate" },
  { icon: Hammer, label: "Build" },
  { icon: Shield, label: "Secure" },
  { icon: TrendingUp, label: "Grow" },
];

const bottomStats = [
  { icon: Users, value: "50+", label: "Projects Delivered" },
  { icon: Settings, value: "10+", label: "Industry Domains" },
  { icon: Star, value: "100%", label: "Client Satisfaction" },
  { icon: Headset, value: "End-to-End", label: "Support & Maintenance" },
];

const sectionLabels: Record<string, string> = {
  "app-dev": "APP DEVELOPMENT",
  "testing": "QUALITY ASSURANCE",
  "csv": "COMPLIANCE SERVICES",
  "ai-products": "AI PRODUCTS",
  "digital": "BUSINESS SERVICES",
};

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden pt-24 pb-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start py-4 lg:py-6">

              {/* LEFT — text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 self-start py-1 bg-transparent text-[#E63946] text-[11px] tracking-[0.22em] uppercase font-bold">
                  <div className="w-6 h-0.5 bg-[#E63946]" />
                  What We Offer
                </div>

                {/* Title */}
                <h1 className="font-serif text-5xl lg:text-[3.8rem] font-bold text-[#111111] leading-tight -mt-1">
                  Our <span className="text-[#E63946]">Services</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-700 font-semibold text-sm lg:text-base -mt-1">
                  Technology Solutions Built for Business
                </p>

                {/* Description */}
                <p className="font-sans text-slate-500 text-sm lg:text-base leading-relaxed max-w-xl">
                  From AI-powered products and application development to CSV compliance, security testing, and digital marketing — we deliver end-to-end technology and business solutions to help organizations innovate, streamline operations, and achieve sustainable growth.
                </p>

                {/* Icon stats row */}
                <div className="flex flex-wrap gap-4 pt-1">
                  {heroStats.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <Icon size={14} className="text-[#E63946]" />
                      <span className="font-medium text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT — hero image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 ring-1 ring-slate-200/40">
                  <img
                    src={servicesHeroImg}
                    alt="Transform Ideas Into Impact"
                    className="w-full h-auto block"
                  />
                </div>
                {/* Decorative red accent line */}
                <div className="absolute -bottom-2 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#E63946]/60 to-transparent rounded-full blur-sm" />
              </motion.div>
            </div>
          </div>

          {/* ── STATS STRIP ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#F5F5F3] border-t border-b border-slate-200 py-6"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-300">
                {bottomStats.map(({ icon: Icon, value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-center gap-3.5 lg:px-8 first:lg:pl-0 last:lg:pr-0"
                  >
                    <Icon size={30} strokeWidth={1.6} className="text-[#E63946] flex-shrink-0" />
                    <div>
                      <p className="text-[#111111] font-bold text-2xl leading-none tracking-tight">{value}</p>
                      <p className="text-slate-500 text-xs mt-1.5 font-medium">{label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES LIST */}
        <section id="services-list" className="bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {services.map((service, index) => {
              const imageLeft = index % 2 === 0;
              return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-0 items-stretch ${
                  index !== services.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                {/* PHOTO — full-bleed, no card */}
                <div className={`relative min-h-[260px] lg:min-h-0 overflow-hidden ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {imageLeft && (
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                  )}
                  {!imageLeft && (
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                  )}
                </div>

                {/* CONTENT — floating on white */}
                <div className={`flex flex-col justify-center py-8 lg:py-10 ${
                  imageLeft
                    ? "lg:order-2 px-6 lg:px-12"
                    : "lg:order-1 px-6 lg:px-12"
                }`}>
                  {/* Number + icon + label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-4xl font-bold text-slate-100 select-none leading-none flex-shrink-0">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E63946] to-[#B91C2E] flex items-center justify-center shadow-md shadow-[#E63946]/25 flex-shrink-0">
                      <service.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-px w-5 bg-[#E63946]" />
                      <span className="text-[#E63946] text-[10px] tracking-[0.2em] uppercase font-bold">
                        {sectionLabels[service.id] ?? "OUR SERVICES"}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#111111] leading-[1.15] mb-1">
                    {service.title} <span className="text-[#E63946]">{service.titleSuffix}</span>
                  </h2>

                  <p className="text-[#E63946] font-semibold text-xs mb-1.5">
                    {service.subtitle}
                  </p>

                  <div className="w-7 h-[2px] bg-[#E63946] rounded-full mb-3" />

                  <p className="font-sans text-slate-500 text-sm leading-relaxed mb-4 max-w-md">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-1">
                    {service.features.slice(0, 6).map((feature) => (
                      <div
                        key={feature}
                        className="group flex gap-2 items-center bg-[#F5F5F3] hover:bg-[#FFF0F1] border border-transparent hover:border-[#E63946]/20 transition-all duration-300 rounded-lg px-3 py-1.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="font-sans text-slate-600 text-xs leading-snug font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Services;
