import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Heart, Shield, Users, Lightbulb, ArrowRight, ArrowUpRight, Sparkles, Award, BadgeCheck, Building2, UsersRound, FileCheck, Headset, Globe2, Cog, FlaskConical, CloudCog } from "lucide-react";
import aboutBg from "@/assets/hero-5.jpg";
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

const products = [
  {
    icon: FileCheck,
    title: "ZayroDocX",
    description: "AI tools suite for intelligent document processing.",
  },
  {
    icon: UsersRound,
    title: "ZayroConnect",
    description: "People & performance (HRMS) platform.",
  },
  {
    icon: ArrowUpRight,
    title: "ZayroDeck",
    description: "Presentation & collaboration platform.",
  },
  {
    icon: Building2,
    title: "ZayroInvoice",
    description: "Billing, invoicing & business records.",
  },
  {
    icon: Globe2,
    title: "ZayroPlay",
    description: "Knowledge, learning & internal engagement.",
  },
  {
    icon: Headset,
    title: "ZayroSuite",
    description: "Integrated AI productivity suite.",
  },
];

const capabilities = [
  {
    icon: Building2,
    title: "Application Development",
    description: "Web and mobile application engineering.",
  },
  {
    icon: Lightbulb,
    title: "AI & Innovation",
    description: "AI-powered automation and intelligent solutions.",
  },
  {
    icon: FlaskConical,
    title: "Quality & Validation",
    description: "Independent testing, validation and quality assurance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security assessments and VAPT services.",
  },
  {
    icon: CloudCog,
    title: "Enterprise Solutions",
    description: "Structured, scalable enterprise technology systems.",
  },
  {
    icon: Cog,
    title: "Digital Transformation",
    description: "End-to-end modernization for growing businesses.",
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

          <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-28">
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
        <section className="py-24 lg:py-32 bg-white">
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
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111111] leading-[1.15] mb-8">
                  Building Technology.
                  <br />
                  Creating <span className="text-[#E63946]">Business Value</span>
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

              {/* PRODUCTS */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 gap-3"
              >
                {products.map((product) => (
                  <div
                    key={product.title}
                    className="bg-white rounded-xl p-4 border border-slate-200 hover:border-[#E63946]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E63946]/10 flex items-center justify-center mb-3">
                      <product.icon className="w-4 h-4 text-[#E63946]" />
                    </div>
                    <h3 className="font-sans text-[13px] font-bold text-[#111111] mb-1">
                      {product.title}
                    </h3>
                    <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="pt-6 lg:pt-8 pb-16 lg:pb-20 bg-slate-50" style={{ marginTop: "-1px" }}>
          <div className="container mx-auto px-4 text-center mb-10">
            <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-3">
              Technology Built Around Your Business
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <Button
                asChild
                size="lg"
                className="bg-[#E63946] hover:bg-[#c9182f] text-white font-semibold rounded-full px-7 shadow-lg shadow-[#E63946]/25"
              >
                <Link to="/projects">
                  Explore Our Products <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 border-slate-300 text-[#111111] hover:border-[#E63946] hover:text-[#E63946] font-semibold"
              >
                <Link to="/services">
                  Explore Our Services <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#E63946]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E63946]/10 flex items-center justify-center mb-4">
                    <capability.icon className="w-5 h-5 text-[#E63946]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#111111] mb-1.5">
                    {capability.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="pt-20 lg:pt-28 pb-20 lg:pb-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#E63946] uppercase mb-4">
                  How We Work
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111111] leading-tight mb-5">
                  From Requirements to Reliable Solutions
                </h2>
                <p className="font-sans text-slate-600 leading-relaxed max-w-xl mb-8">
                  A proven delivery approach that ensures every solution is secure,
                  validated, and aligned with business goals.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E63946] flex items-center justify-center shrink-0 shadow-md shadow-[#E63946]/25">
                    <FlaskConical className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-sans text-sm font-semibold text-[#111111]">
                    5-stage delivery framework
                    <span className="block font-normal text-xs text-slate-500">
                      Structured, traceable, and quality-verified at every stage
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100">
                  <img
                    src={deliveryWide}
                    alt="Team collaborating around a laptop"
                    className="w-full h-[300px] lg:h-[400px] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#c9182f] text-white px-6 py-5 shadow-xl shadow-[#E63946]/30">
                  <p className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase opacity-90 mb-1">
                    Collaboration
                  </p>
                  <p className="font-serif text-lg font-bold leading-snug">
                    Reliable Technology Delivery
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Steps — horizontal stepper */}
            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#E63946]/35 to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                {processSteps.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative inline-flex mb-5">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                        <img
                          src={item.image}
                          alt={`${item.title} illustration`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#E63946] text-white text-xs font-bold flex items-center justify-center ring-4 ring-white">
                        {index + 1}
                      </span>
                    </div>
                    <p className="font-sans text-[10px] font-bold tracking-[0.18em] text-[#E63946] uppercase mb-1">
                      {item.step}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-[#111111] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 lg:py-28 bg-slate-50">
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

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#c9182f]">
          <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 text-white">
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Let&apos;s Build a Smarter Tomorrow Together
              </h2>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#c9182f] hover:bg-white/90 font-semibold rounded-full px-8 shadow-xl shrink-0"
            >
              <Link to="/contact">
                Start the Conversation <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;

