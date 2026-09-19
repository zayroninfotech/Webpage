import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import servicesHeroImg from "@/assets/services-hero.png";
import svcAppDev from "@/assets/svc-app-dev.png";
import svcTesting from "@/assets/svc-testing.png";
import svcCsv from "@/assets/svc-csv.png";
import svcAi from "@/assets/svc-ai.png";
import svcDigital from "@/assets/svc-digital.png";

const services: {
  id: string; icon: React.ElementType; title: string; subtitle: string;
  description: string; features: string[]; benefits: string[]; image: string;
}[] = [
  {
    id: "app-dev",
    icon: Code2,
    image: svcAppDev,
    title: "Application Development",
    subtitle: "Web, Mobile & Desktop Solutions",
    description:
      "We design and develop scalable web applications, mobile apps (iOS and Android), and .Exe/desktop applications tailored to business requirements. We also deliver professional website designing services.",
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
  },
  {
    id: "testing",
    icon: TestTube,
    image: svcTesting,
    title: "Testing & Quality Assurance",
    subtitle: "Manual, Automation & Security Testing",
    description:
      "Our QA team delivers comprehensive testing services covering manual testing, automation testing, OWASP testing, security testing, and code quality checks — ensuring defect-free, secure software delivery.",
    features: [
      "Manual testing & test case design",
      "Automation testing frameworks",
      "OWASP testing",
      "Security testing",
      "Code quality checks",
      "Code quality certificates",
    ],
    benefits: [
      "Higher product quality",
      "Security vulnerabilities identified early",
      "Certified code quality assurance",
      "Faster, confident release cycles",
    ],
  },
  {
    id: "csv",
    icon: Shield,
    image: svcCsv,
    title: "CSV & Compliance Services",
    subtitle: "Regulated Industry Compliance",
    description:
      "We deliver Computer System Validation (CSV) activities and deliverables, internal and external audits, gap assessments, and SAP-based activities for IT, Pharma, Power, and Manufacturing industries.",
    features: [
      "CSV activities & deliverables",
      "Internal audits for IT, Pharma, Power & Manufacturing",
      "External audits",
      "Gap assessments",
      "SAP-based activities",
      "Audit readiness support",
    ],
    benefits: [
      "Regulatory compliance assurance",
      "Audit-ready documentation",
      "Reduced compliance risk",
      "Validated, traceable systems",
    ],
  },
  {
    id: "ai-products",
    icon: Cpu,
    image: svcAi,
    title: "AI Products & Platforms",
    subtitle: "Internal Enterprise Applications",
    description:
      "Our internally built products power enterprise productivity. ZayroDocX offers 50+ AI-integrated tools, ZayroConnect is our advanced HRMS, ZayroDeck enables file sharing, ZayroInvoice manages invoices, and ZayroSuite brings together an AI tools suite.",
    features: [
      "ZayroDocX – 50+ AI-integrated tools",
      "ZayroConnect – Advanced HRMS",
      "ZayroDeck – File sharing platform",
      "ZayroInvoice – Invoice management",
      "ZayroPlay – Internal application",
      "ZayroSuite – AI tools suite",
    ],
    benefits: [
      "Enterprise-grade AI capabilities",
      "Seamless product ecosystem",
      "HRMS for your organization",
      "Productivity across all departments",
    ],
  },
  {
    id: "digital",
    icon: Users,
    image: svcDigital,
    title: "Digital Marketing & Business Services",
    subtitle: "Growth & Operational Excellence",
    description:
      "We deliver digital marketing services to grow your online presence, HRMS implementation for other companies to ISO standards, and comprehensive IT staffing and talent solutions for enterprise needs.",
    features: [
      "Digital marketing services",
      "HRMS services & implementation for other companies",
      "ISO standards implementation",
      "IT staffing & talent solutions",
      "Code quality checks & certificates",
      "Business process consulting",
    ],
    benefits: [
      "Improved online visibility",
      "ISO-compliant HR processes",
      "Qualified talent on demand",
      "Measurable business outcomes",
    ],
  },
];

const heroStats = [
  { icon: Lightbulb, label: "Innovate" },
  { icon: Hammer, label: "Build" },
  { icon: Shield, label: "Secure" },
  { icon: ClipboardList, label: "Comply" },
  { icon: TrendingUp, label: "Grow" },
];

const bottomStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Industry Domains" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "End-to-End", label: "Support & Maintenance" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden pt-24 pb-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center py-4 lg:py-6">

              {/* LEFT — text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-sm bg-transparent text-[#E63946] text-[11px] tracking-[0.22em] uppercase font-bold border-0">
                  What We Offer
                </div>

                {/* Title */}
                <h1 className="font-serif text-5xl lg:text-[3.8rem] font-bold text-[#111111] leading-tight -mt-1">
                  Our <span className="text-[#E63946]">Services</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[#111111] font-black uppercase tracking-widest text-xs lg:text-sm -mt-1">
                  End-to-End Technology &amp; Business Solutions
                </p>

                {/* Description */}
                <p className="font-sans text-slate-500 text-sm lg:text-base leading-relaxed max-w-xl">
                  From AI-powered products and application development to CSV compliance, security testing, and digital marketing — comprehensive services for every enterprise need.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E63946] text-white font-semibold rounded-full text-sm hover:bg-[#c9182f] transition-colors shadow-md shadow-[#E63946]/25"
                  >
                    Get Started <ArrowRight size={15} />
                  </Link>
                  <a
                    href="#services-list"
                    className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#111111] text-[#111111] font-semibold rounded-full text-sm hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    Explore Services
                  </a>
                </div>

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

              {/* RIGHT — image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Handwriting-style overlay label */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="absolute top-3 right-3 z-10 text-right"
                >
                  <p style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontSize: 16, color: "#111111", lineHeight: 1.3, fontWeight: 700 }}>
                    Technology<br />for a<br />Better<br />Tomorrow
                  </p>
                  <div className="w-12 h-[2px] bg-[#E63946] rounded-full mt-1 ml-auto" />
                </motion.div>

                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={servicesHeroImg}
                    alt="Ideas Build Better Businesses"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── STATS STRIP ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#111111] py-4"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
                {bottomStats.map(({ value, label }) => (
                  <div key={label} className="flex items-center gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                    <div className="w-1 h-8 bg-[#E63946] rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-lg leading-none">{value}</p>
                      <p className="text-white/50 text-xs mt-0.5">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES LIST */}
        <section id="services-list" className="py-14 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 space-y-14 lg:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* CONTENT SIDE */}
                <div className={`flex flex-col ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E63946] flex items-center justify-center shadow-md shadow-[#E63946]/30">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#E63946]/40 to-transparent" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111] mb-1">
                    {service.title}
                  </h2>

                  <p className="text-[#E63946] font-semibold text-sm mb-1">
                    {service.subtitle}
                  </p>

                  <div className="w-10 h-[2px] bg-[#E63946] rounded-full mb-4" />

                  <p className="font-sans text-slate-600 text-sm lg:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex gap-2.5 items-start">
                        <CheckCircle className="w-4 h-4 text-[#E63946] mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-slate-600 text-sm leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUSINESS VALUE — photo card with overlay */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden min-h-[300px] h-full">
                    {/* Photo */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay — heavier at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/50 to-[#111111]/10" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-6 min-h-[300px]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-[#E63946] flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                        <h3 className="font-serif text-base font-bold text-white">
                          Business Value
                        </h3>
                      </div>

                      <div className="space-y-2.5">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0 mt-1.5" />
                            <span className="font-sans text-white/90 text-sm leading-snug">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Services;
