import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Rocket, Settings2, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";

import heroImg      from "@/assets/projects-hero-new.png";
import imgDocX      from "@/assets/prod-zayrodocx.png";
import imgConnect   from "@/assets/prod-zayroconnect.png";
import imgDeck      from "@/assets/prod-zayrodeck.png";
import imgInvoice   from "@/assets/prod-zayro-invoice.png";
import imgPlay      from "@/assets/prod-zayroplay.png";
import imgSuite     from "@/assets/prod-zayrosuite.png";

const heroStats = [
  { icon: Rocket,    label: "Innovate", sub: "Faster" },
  { icon: Settings2, label: "Build",    sub: "Smarter" },
  { icon: ShieldCheck, label: "Work",   sub: "Securely" },
  { icon: BarChart3, label: "Achieve",  sub: "More" },
];

const products = [
  {
    id: "01", image: imgDocX, status: "Live",
    category: "AI TOOLS PLATFORM",
    title: "ZayroDocX",
    url: "https://zayrodocx.com/",
    description: "Our flagship AI-integrated tools platform featuring 50+ powerful tools. ZayroDocX consolidates advanced AI capabilities for document processing, automation, and intelligent workflows in one platform.",
    tags: ["AI Integration", "50+ Tools", "Web Platform", "Enterprise"],
    tagline: "Transform Documents\nInto Opportunities",
  },
  {
    id: "02", image: imgConnect, status: "On Going",
    category: "HRMS SYSTEM",
    title: "ZayroConnect",
    description: "Advanced Human Resource Management System built to ISO standards. Handles the full HR lifecycle including employee management, payroll, attendance, compliance, and more.",
    tags: ["HRMS", "ISO Standards", "React", "Enterprise"],
    tagline: "People. Process.\nProgress.",
  },
  {
    id: "03", image: imgDeck, status: "On Going",
    category: "FILE SHARING PLATFORM",
    title: "ZayroDeck",
    description: "Enterprise-grade secure file sharing platform designed for teams and organizations. Enables controlled document distribution, secure access management, and seamless collaboration.",
    tags: ["File Sharing", "Security", "Cloud Storage", "Collaboration"],
    tagline: "Secure Sharing\nFor Stronger Teams",
  },
  {
    id: "04", image: imgInvoice, status: "On Going",
    category: "INVOICE MANAGEMENT",
    title: "ZayroInvoice",
    description: "Comprehensive invoice creation and management application for businesses. Streamlines billing workflows, tracks payment status, generates professional invoices, and provides financial reporting.",
    tags: ["Invoicing", "Finance", "Reporting", "Business"],
    tagline: "Billing Made Simple\nFor Growing Businesses",
  },
  {
    id: "05", image: imgPlay, status: "Live",
    category: "INTERNAL APPLICATION",
    title: "ZayroPlay",
    url: "https://zayroplay.com/games/",
    description: "An internally developed application built for operational use within Zayron Infotech. ZayroPlay is part of our growing product ecosystem, demonstrating our in-house software development capability.",
    tags: ["Internal App", "React", "TypeScript", "Enterprise"],
    tagline: "Play. Build. Innovate.",
  },
  {
    id: "06", image: imgSuite, status: "On Going",
    category: "AI TOOLS SUITE",
    title: "ZayroSuite",
    description: "A curated AI tools suite that brings together a collection of powerful artificial intelligence utilities. Complements ZayroDocX, providing specialized AI capabilities for targeted business use cases.",
    tags: ["AI Suite", "Automation", "Productivity", "Enterprise"],
    tagline: "All Your AI Tools\nIn One Place",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden pt-24">
          <div className="grid lg:grid-cols-2 min-h-[520px] items-stretch">

            {/* LEFT — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center px-6 lg:px-16 py-14 lg:py-20"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="text-[#E63946] text-[10px] font-bold tracking-[0.25em] uppercase">Our Products</span>
              </div>

              {/* Heading */}
              <h1 className="font-serif font-bold text-[#111111] leading-[1.08] mb-5"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
                Innovative Products<br />
                for a <span className="text-[#E63946]">Smarter Tomorrow</span>
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-8 max-w-[480px]">
                Internally built enterprise applications — from ZayroDocX with 50+ AI tools
                to ZayroConnect HRMS, ZayroDeck, ZayroInvoice, ZayroPlay, and ZayroSuite
                — designed to help businesses work smarter, faster, and grow stronger.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6">
                {heroStats.map(({ icon: Icon, label, sub }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2.5"
                  >
                    <Icon className="w-5 h-5 text-[#E63946]" strokeWidth={1.8} />
                    <span className="text-[#111111] font-bold text-sm leading-tight">
                      {label}<br />
                      <span className="text-slate-500 font-normal text-xs">{sub}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — hero image full-bleed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden min-h-[360px]"
            >
              <img
                src={heroImg}
                alt="Zayron Infotech Products"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* fade left edge into white */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* ── PRODUCT PORTFOLIO ── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">

            {/* Section header */}
            <div className="relative mb-12 text-center">
              {/* Cursive "Built for Real Impact" — top right */}
              <div className="absolute top-0 right-0 hidden lg:block">
                <span className="font-serif italic text-2xl text-[#111111] leading-tight block">
                  Built for
                </span>
                <span className="font-serif italic text-2xl text-[#111111] leading-tight block">
                  Real Impact
                </span>
                <div className="h-[2px] bg-[#E63946] rounded-full mt-1 w-16 ml-auto" />
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="text-[#E63946] text-[10px] font-bold tracking-[0.25em] uppercase">Our Product Portfolio</span>
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="font-serif text-4xl lg:text-[2.8rem] font-bold text-[#111111] mb-3">
                Our Products &amp; Platforms
              </h2>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Powering businesses with innovative, secure, and scalable digital solutions.
              </p>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group bg-white border border-slate-200 hover:border-[#E63946]/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#E63946]/8 transition-all duration-400 flex flex-col"
                >
                  {/* Product image */}
                  <div className="relative bg-slate-50 overflow-hidden" style={{ height: "220px" }}>
                    {/* Number */}
                    <span className="absolute top-3 left-4 font-mono text-slate-300 text-xs z-10 font-bold">
                      {product.id}
                    </span>
                    {/* Status badge */}
                    <span className={`absolute top-3 right-4 flex items-center gap-1.5 text-[10px] font-bold bg-white rounded-full px-2.5 py-0.5 z-10 ${
                      product.status === "Live"
                        ? "text-green-500 border border-green-200"
                        : "text-orange-500 border border-orange-200"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        product.status === "Live" ? "bg-green-500" : "bg-orange-500"
                      }`} />
                      {product.status}
                    </span>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-[#111111] text-xl font-bold mb-2 group-hover:text-[#E63946] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer row: Learn More + tagline */}
                    <div className="flex items-end justify-between pt-3 border-t border-slate-100">
                      {product.url ? (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[#E63946] font-bold text-sm hover:gap-3 transition-all duration-200"
                        >
                          Learn More <ArrowRight size={14} />
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-slate-300 font-bold text-sm cursor-default">
                          Learn More <ArrowRight size={14} />
                        </span>
                      )}
                      <p className="text-[#111111] text-[11px] font-bold text-right leading-snug whitespace-pre-line">
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Projects;
