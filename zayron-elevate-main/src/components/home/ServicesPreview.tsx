import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, ShieldCheck, BrainCircuit, Globe, Check } from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Application Development & Testing",
    description:
      "Custom web, mobile, API, and enterprise applications with quality-focused development and testing.",
    features: [
      "Web & Mobile App Development",
      "API & System Integration",
      "UI/UX Design",
      "QA & Automated Testing",
    ],
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    hoverAccent: "rgba(230,57,70,0.07)",
    topBorder: "from-red-400 to-rose-500",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality, CSV & Compliance",
    description:
      "End-to-end validation, documentation and compliance support for regulated industries.",
    features: [
      "CSV (GAMP 5) & Validation",
      "21 CFR Part 11 Support",
      "GxP Compliance (Pharma, Healthcare)",
      "ISO 9001 & ISO 27001",
      "Audit & Regulatory Assistance",
    ],
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverAccent: "rgba(59,130,246,0.07)",
    topBorder: "from-blue-400 to-indigo-500",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "AI-Powered Products",
    description:
      "Innovative AI-driven products and intelligent solutions to automate processes, extract insights, and improve business efficiency.",
    features: [
      "AI Tools & Automation",
      "Document Processing",
      "Data Analytics & Insights",
      "Custom AI Solutions",
    ],
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    hoverAccent: "rgba(244,63,94,0.07)",
    topBorder: "from-rose-400 to-red-500",
  },
  {
    icon: Globe,
    number: "04",
    title: "Digital Transformation & Cybersecurity",
    description:
      "Helping businesses modernize operations with secure, scalable, and future-ready technology solutions.",
    features: [
      "Cloud Solutions & Modernization",
      "Process Automation",
      "Cybersecurity & Risk Management",
      "IT Strategy & Consulting",
    ],
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverAccent: "rgba(16,185,129,0.07)",
    topBorder: "from-emerald-400 to-green-500",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-red-400" />
            Our Services
            <span className="w-4 h-px bg-red-400" />
          </span>
          <h2 className="font-bold text-[#111111] mb-4 tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Technology &amp;{" "}
            <span className="text-red-600">Digital Solutions</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            From intelligent AI products and enterprise applications to quality, security,
            and digital transformation — solutions built for modern businesses.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover inner glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${service.hoverAccent} 0%, transparent 70%)` }}
              />

              {/* Top gradient border on hover */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.topBorder} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-2xl`} />

              {/* Card number */}
              <div className="absolute top-5 right-5 font-mono text-4xl font-bold text-slate-100 group-hover:text-slate-150 select-none transition-colors duration-300">
                {service.number}
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="font-bold text-[#111111] text-[1rem] mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-300"
              >
                Learn More <ArrowRight size={15} />
              </Link>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r ${service.topBorder} transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-red-500 text-red-600 font-semibold hover:bg-red-500 hover:text-white transition-all duration-250 text-sm"
            >
              View All Services
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
