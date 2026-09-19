import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Heart, Shield, Users, Lightbulb, ArrowRight, Sparkles, Award, BadgeCheck, Building2, UsersRound, Cpu, Package, Cog, FlaskConical, FileText, Cloud, Monitor, Pill, HeartPulse, Zap, Factory, Code2, Brain, Database } from "lucide-react";
import aboutBg from "@/assets/hero-5.jpg";
import aiPoweredCard from "@/assets/ai-powered-card.png";
import enterpriseCard from "@/assets/enterprise-card.png";
import digitalPlatformsCard from "@/assets/digital-platforms-card.png";
import securityCard from "@/assets/security-compliance-card.png";
import industryIT from "@/assets/industry-it-technology.png";
import industryPharma from "@/assets/industry-pharmaceuticals.png";
import industryHealthcare from "@/assets/industry-healthcare.png";
import industryPower from "@/assets/industry-power.png";
import industryManufacturing from "@/assets/industry-manufacturing.png";
import industryOther from "@/assets/industry-other.png";
import howWeWorkTeam from "@/assets/how-we-work-team.png";
import deliveryStep1 from "@/assets/delivery-step1.png";
import deliveryStep2 from "@/assets/delivery-step2.png";
import deliveryStep3 from "@/assets/delivery-step3.png";
import deliveryStep4 from "@/assets/delivery-step4.png";
import deliveryStep5 from "@/assets/delivery-step5.png";
import deliveryWide from "@/assets/delivery-wide.png";

const heroChips = [
  { Icon: Lightbulb, label: "Innovative" },
  { Icon: Award, label: "Quality Products" },
  { Icon: BadgeCheck, label: "Reliable Services" },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We build forward-looking products that redefine enterprise efficiency and intelligence.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "Every solution is delivered through structured quality practices and independent verification.",
  },
  {
    icon: Target,
    title: "Compliance",
    description:
      "We design technology that meets the strict regulatory requirements of modern enterprises.",
  },
  {
    icon: Cog,
    title: "Technology",
    description:
      "We combine AI, automation, and advanced engineering with every solution we deliver.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Transparency, responsibility, and trust define our delivery and client relationships.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "We build partnerships that create measurable outcomes and long-term business value.",
  },
];

const whoWeAreStats = [
  {
    icon: Cpu,
    value: "50+",
    label: "AI Tools",
    description: "AI-powered capabilities and intelligent document solutions",
    highlight: false,
  },
  {
    icon: Package,
    value: "10+",
    label: "Internal Products",
    description: "Technology products developed for real-world business needs",
    highlight: false,
  },
  {
    icon: Building2,
    value: "20+",
    label: "Industries Served",
    description: "Technology solutions across diverse business sectors",
    highlight: false,
  },
  {
    icon: UsersRound,
    value: "100%",
    label: "Client Satisfaction",
    description: "Focused on quality, reliability, and long-term partnerships",
    highlight: true,
  },
];

const whatWeBuild = [
  {
    icon: FileText,
    title: "AI-Powered Products",
    description: "Intelligent AI solutions that automate workflows, enhance productivity, and help businesses make faster, smarter decisions.",
  },
  {
    icon: Cog,
    title: "Enterprise Applications",
    description: "Scalable web and mobile applications for modern businesses.",
  },
  {
    icon: Cloud,
    title: "Digital Platforms",
    description: "Secure, reliable and scalable platforms to streamline business operations.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Solutions aligned with global standards including ISO, GxP and regulatory requirements.",
  },
];

const processSteps = [
  {
    image: deliveryStep1,
    step: "Step 1",
    title: "Understand",
    description: "Business needs and objectives.",
  },
  {
    image: deliveryStep2,
    step: "Step 2",
    title: "Design",
    description: "Scalable, secure architectures.",
  },
  {
    image: deliveryStep3,
    step: "Step 3",
    title: "Develop",
    description: "Reliable technology solutions.",
  },
  {
    image: deliveryStep4,
    step: "Step 4",
    title: "Validate",
    description: "Quality, security and compliance.",
  },
  {
    image: deliveryStep5,
    step: "Step 5",
    title: "Deliver & Support",
    description: "Deployment and continuous support.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        {/* -- Dark hero --------------------------------------- */}
        <section className="relative overflow-hidden bg-[#0b0b0d] text-white">
          {/* Background image + overlay */}
          <div className="absolute inset-0" aria-hidden="true">
            <img src={aboutBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0b0b0d]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/95 via-[#0b0b0d]/70 to-[#0b0b0d]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/90 via-transparent to-[#0b0b0d]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-14 lg:pt-40 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.05] text-[11px] tracking-[0.2em] uppercase font-semibold text-white/70 mb-7">
                  <Sparkles size={12} className="text-[#E63946]" />
                  About Zayron
                </div>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] mb-6">
                  Building the Technology
                  <br />
                  Behind <span className="text-[#E63946]">Better Business</span>
                </h2>

                <p className="font-sans text-white/60 text-base leading-relaxed max-w-xl mb-8">
                  <span className="text-[#E63946] font-medium">Zayron Infotech Pvt. Ltd.</span> is a
                  product-focused technology company building intelligent products and
                  secure, scalable digital solutions that help organizations improve
                  efficiency, strengthen compliance, and achieve meaningful business outcomes.
                </p>

                <div className="flex flex-wrap gap-3">
                  {heroChips.map(({ Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-white/70 whitespace-nowrap"
                    >
                      <Icon size={13} className="text-[#E63946] shrink-0" />
                      <span>{label}</span>
                    </span>
                  ))}
                </div>
            </motion.div>
          </div>
        </section>

        {/* -- WHO WE ARE -------------------------------------- */}
        <section className="pt-12 lg:pt-16 pb-6 lg:pb-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4">
                  Who We Are
                </p>
                <h2 className="font-serif text-3xl md:text-[36px] lg:text-[40px] font-bold text-[#111111] leading-[1.22] mb-8">
                  Building Technology.
                  <br />
                  Creating{" "}
                  <span className="text-[#E63946]">Business Value</span>
                </h2>

                <div className="space-y-5 font-sans text-slate-600 leading-relaxed">
                  <p>
                    <span className="text-[#111111] font-medium">Zayron Infotech Pvt. Ltd. is a
                      product-focused technology company</span> developing intelligent
                    software products, enterprise applications, and secure digital
                    solutions for modern businesses.
                  </p>

                  <p>
                    We combine{" "}
                    <span className="text-[#111111] font-medium">AI, application development,
                      automation, quality assurance, cybersecurity, and compliance</span>
                    to address complex business requirements and deliver scalable
                    technology solutions.
                  </p>

                  <p>
                    Our in-house product ecosystem includes platforms such as{" "}
                    <span className="text-[#E63946] font-semibold">ZayroDocX</span> and{" "}
                    <span className="text-[#E63946] font-semibold">ZayroConnect</span>, alongside
                    customized technology solutions developed around specific business
                    needs.
                  </p>

                  <p>
                    We work across{" "}
                    <span className="text-[#111111] font-medium">IT, pharmaceuticals, healthcare,
                      power, manufacturing, and other industries</span>, bringing together
                    technical expertise, structured delivery, and quality-focused
                    practices to help organizations improve efficiency and accelerate
                    digital transformation.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E63946] to-[#ff4d3d] text-white text-sm font-semibold shadow-lg shadow-[#E63946]/25 hover:shadow-[#E63946]/40 transition-shadow duration-300"
                >
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {whoWeAreStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                    className={`group relative rounded-2xl p-6 border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      stat.highlight
                        ? "bg-gradient-to-br from-[#E63946]/8 to-[#E63946]/3 border-[#E63946]/25 shadow-md"
                        : "bg-white border-slate-200 hover:border-[#E63946]/35 hover:shadow-lg"
                    }`}
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] ${
                      stat.highlight
                        ? "bg-gradient-to-r from-[#E63946] to-[#ff6b6b]"
                        : "bg-gradient-to-r from-[#E63946] to-[#ff6b6b] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"
                    }`} />

                    {/* Icon + number row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        stat.highlight ? "bg-[#E63946]/15" : "bg-[#E63946]/10 group-hover:bg-[#E63946]/15 transition-colors duration-300"
                      }`}>
                        <stat.icon className="w-5 h-5 text-[#E63946]" />
                      </div>
                    </div>

                    <div className="text-[2.2rem] font-bold text-[#E63946] leading-none mb-2 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="w-8 h-[2px] bg-[#E63946]/30 rounded-full mb-2.5" />
                    <h3 className="font-sans text-[13.5px] font-bold text-[#111111] mb-1">
                      {stat.label}
                    </h3>
                    <p className="font-sans text-[12px] text-slate-500 leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="pt-8 lg:pt-10 pb-8 lg:pb-10 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-[#E63946]" />
                  What We Build
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111111] leading-tight mb-4">
                  From Ideas to Technology Solutions
                </h2>
                <p className="font-sans text-slate-500 text-base leading-relaxed max-w-xl">
                  We design and develop products and digital solutions that address real business requirements — from intelligent platforms and enterprise applications to automation, security, and compliance solutions.
                </p>
              </div>
              <Link
                to="/projects"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#E63946] text-[#E63946] font-semibold text-sm hover:bg-[#E63946] hover:text-white transition-all duration-250 whitespace-nowrap"
              >
                View Our Products <ArrowRight size={16} />
              </Link>
            </div>

            {/* 4-column cards — one row, image visible */}
            {(() => {
              const cardData = [
                { ...whatWeBuild[0], img: aiPoweredCard,        category: "AI & Innovation",  delay: 0    },
                { ...whatWeBuild[1], img: enterpriseCard,       category: "Development",       delay: 0.1  },
                { ...whatWeBuild[2], img: digitalPlatformsCard, category: "Infrastructure",    delay: 0.2  },
                { ...whatWeBuild[3], img: securityCard,         category: "Security",          delay: 0.3  },
              ];
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                  {cardData.map(({ icon: Icon, title, description, img, category, delay }) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay }}
                      className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#E63946]/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {/* Red accent line slides in on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E63946] to-[#ff6b6b] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-20" />

                      {/* Image — full colour, clearly visible */}
                      <div className="relative h-48 overflow-hidden shrink-0">
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Thin bottom gradient so card body merges cleanly */}
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        {/* Category pill */}
                        <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[0.18em] text-[#E63946] uppercase bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E63946]/25 z-10">
                          {category}
                        </span>
                      </div>

                      {/* Card body */}
                      <div className="px-5 pb-6 pt-1 flex flex-col flex-1">
                        <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-3 group-hover:bg-[#E63946] transition-colors duration-300">
                          <Icon className="w-5 h-5 text-[#E63946] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="font-serif text-[15px] font-bold text-[#111111] mb-2 leading-snug">
                          {title}
                        </h3>
                        <p className="font-sans text-[12.5px] text-slate-500 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="pt-10 lg:pt-12 pb-8 lg:pb-10 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-[#E63946]" />
                Industries We Serve
                <span className="w-8 h-px bg-[#E63946]" />
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111111] leading-tight mb-4">
                Delivering Technology <span className="text-[#E63946]">Across Industries</span>
              </h2>
              <p className="font-sans text-slate-500 text-base leading-relaxed max-w-2xl mx-auto">
                We work across IT, pharmaceuticals, healthcare, power, manufacturing, and other industries, bringing together
                technical expertise, structured delivery, and quality-focused practices to help organizations improve efficiency
                and accelerate digital transformation.
              </p>
            </div>

            {/* 6-column industry cards */}
            {(() => {
              const industries = [
                { icon: Monitor,     label: "IT & Technology",    img: industryIT,           desc: "Software products, enterprise applications, cloud solutions, and digital transformation services.",   delay: 0    },
                { icon: Pill,        label: "Pharmaceuticals",    img: industryPharma,       desc: "CSV, compliance, quality assurance, and digital solutions for regulated environments.",                delay: 0.07 },
                { icon: HeartPulse, label: "Healthcare",         img: industryHealthcare,   desc: "Technology solutions to improve patient care, operational efficiency, and data security.",             delay: 0.14 },
                { icon: Zap,         label: "Power",              img: industryPower,        desc: "Digital solutions for efficient operations, monitoring, compliance, and asset management.",            delay: 0.21 },
                { icon: Factory,     label: "Manufacturing",      img: industryManufacturing,desc: "Automation, quality systems, compliance tools, and intelligent solutions for better productivity.",   delay: 0.28 },
                { icon: Building2,   label: "Other Industries",   img: industryOther,        desc: "Tailored technology solutions to meet unique business requirements across diverse sectors.",           delay: 0.35 },
              ];
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {industries.map(({ icon: Icon, label, img, desc, delay }) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay }}
                      className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#E63946]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {/* Red accent line on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#E63946] to-[#ff6b6b] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-20" />

                      {/* Image */}
                      <div className="relative h-40 overflow-hidden shrink-0">
                        <img
                          src={img}
                          alt={label}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Subtle bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        {/* Icon badge */}
                        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-[#E63946] transition-colors duration-300 z-10">
                          <Icon className="w-4 h-4 text-[#E63946] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="px-4 py-4 flex flex-col flex-1">
                        <h3 className="font-sans text-[13px] font-bold text-[#111111] mb-1.5 leading-snug">
                          {label}
                        </h3>
                        <p className="font-sans text-[11.5px] text-slate-500 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="pt-10 lg:pt-12 pb-8 lg:pb-10 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-[#E63946]" />
                  What We Do
                </p>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] font-bold text-[#111111] leading-tight mb-4 whitespace-nowrap">
                  Technology Built Around Your Business
                </h2>
                <p className="font-sans text-slate-500 text-base leading-relaxed">
                  Our multidisciplinary capabilities combine modern software development, AI, quality engineering,
                  cybersecurity, and compliance to deliver reliable solutions throughout the technology lifecycle.
                </p>
              </div>
              <Link
                to="/services"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#E63946] text-[#E63946] font-semibold text-sm hover:bg-[#E63946] hover:text-white transition-all duration-250 whitespace-nowrap self-start lg:self-auto"
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* 3×2 capability cards — redesigned */}
            {(() => {
              const capabilities = [
                { icon: Code2,        title: "Application Development",  desc: "Web and mobile application engineering using modern technologies and best practices." },
                { icon: Brain,        title: "AI & Innovation",          desc: "AI-powered automation, intelligent solutions, and smart process optimization." },
                { icon: FlaskConical, title: "Quality & Validation",     desc: "Independent testing, CSV validation, and quality assurance for regulated environments." },
                { icon: Shield,       title: "Cybersecurity",            desc: "Security assessments, VAPT services, and data protection strategies." },
                { icon: Database,     title: "Enterprise Solutions",     desc: "Structured, scalable enterprise technology systems built for long-term growth." },
                { icon: Cog,          title: "Digital Transformation",   desc: "End-to-end modernization, cloud migration, and digital strategy for growing businesses." },
              ];
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {capabilities.map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.07 }}
                      className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#E63946]/35 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {/* Red top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E63946] to-[#ff6b6b] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                      {/* Icon + number row */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-[#E63946]/10 flex items-center justify-center group-hover:bg-[#E63946] transition-colors duration-300">
                          <Icon className="w-6 h-6 text-[#E63946] group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                        </div>
                        <span className="text-[13px] font-bold text-slate-200 group-hover:text-[#E63946]/40 transition-colors duration-300 tabular-nums pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title + desc */}
                      <h3 className="font-sans text-[15px] font-bold text-[#111111] mb-2 leading-snug">
                        {title}
                      </h3>
                      <p className="font-sans text-[13px] text-slate-500 leading-relaxed flex-1">
                        {desc}
                      </p>

                      {/* Arrow indicator bottom-right on hover */}
                      <div className="mt-5 flex justify-end">
                        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#E63946] group-hover:bg-[#E63946] transition-all duration-300">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="pt-14 pb-8 lg:pt-16 lg:pb-10 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-[#E63946]" />
                How We Work
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111111] leading-tight mb-3">
                From Requirements to Reliable Solutions
              </h2>
              <p className="font-sans text-slate-500 text-base leading-relaxed max-w-2xl">
                A structured and transparent approach to deliver high-quality technology solutions.
              </p>
            </div>

            {/* 2-col: photo left, timeline steps right */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

              {/* Left — team photo fills column height */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="h-full"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-full min-h-[420px]">
                  <img
                    src={howWeWorkTeam}
                    alt="Team collaborating"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Right — timeline fills same height as photo */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative flex flex-col justify-between py-3"
              >
                {/* Vertical connector line through all circles */}
                <div className="absolute left-6 top-9 bottom-9 w-px bg-gradient-to-b from-[#E63946]/60 via-[#E63946]/30 to-[#E63946]/10" />

                {[
                  { num: "01", title: "Understand",        desc: "Business needs, objectives, and challenges." },
                  { num: "02", title: "Design",            desc: "Scalable and secure solution architecture." },
                  { num: "03", title: "Develop",           desc: "Build and implement technology solutions." },
                  { num: "04", title: "Validate",          desc: "Test functionality, quality, security, and compliance." },
                  { num: "05", title: "Deliver & Support", desc: "Deploy solutions and provide continuous improvement." },
                ].map(({ num, title, desc }, i) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    className="group relative flex items-center gap-5"
                  >
                    {/* Circle above the line */}
                    <div className="shrink-0 relative z-10 w-12 h-12 rounded-full bg-[#E63946] flex items-center justify-center shadow-md shadow-[#E63946]/35 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-[13px] font-bold tabular-nums">{num}</span>
                    </div>
                    <div>
                      <h3 className="font-sans text-[15px] font-bold text-[#111111] mb-0.5 leading-snug group-hover:text-[#E63946] transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="font-sans text-[13px] text-slate-500 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="pt-12 pb-20 lg:pt-14 lg:pb-24 bg-slate-50">
          <div className="container mx-auto px-4 text-center mb-14">
            <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4">
              Our Foundation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              Our Core Values
            </h2>
            <p className="font-sans text-slate-600 text-base max-w-xl mx-auto">
              The principles that guide every product we build and every client we serve
            </p>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#E63946]/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E63946]/10 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-[#E63946]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#111111] mb-1.5">
                    {value.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
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

export default About;

