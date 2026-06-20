import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import {
  Users,
  Database,
  Shield,
  TestTube,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import servicesBg from "@/assets/hero-100.jpg";

const services = [
  {
    id: "staffing",
    icon: Users,
    title: "IT & Non-IT Manpower Staffing",
    subtitle: "Contract & Permanent Hiring Solutions",
    description:
      "Access top-tier talent through our comprehensive staffing solutions designed to meet dynamic workforce requirements across industries.",
    features: [
      "Contract & permanent hiring models",
      "Resource augmentation services",
      "Domain-specific recruitment expertise",
      "Pre-screened qualified professionals",
      "Fast turnaround time",
      "Flexible engagement options",
    ],
    benefits: [
      "Reduced hiring cycle time",
      "Scalable workforce solutions",
      "Lower recruitment costs",
      "Reliable talent pipeline",
    ],
  },
  {
    id: "hrms",
    icon: Database,
    title: "HRMS Portal Product",
    subtitle: "End-to-End HR Operations",
    description:
      "Digitize and streamline your HR processes with our modern HRMS platform built for growing enterprises.",
    features: [
      "Employee lifecycle management",
      "Attendance & leave tracking",
      "Payroll & compliance",
      "Performance management",
      "Document management",
      "Employee self-service portal",
    ],
    benefits: [
      "Centralized HR operations",
      "Improved operational efficiency",
      "Compliance-ready processes",
      "Real-time analytics",
    ],
  },
  {
    id: "csv",
    icon: Shield,
    title: "Computer System Validation (CSV)",
    subtitle: "Regulatory & Compliance Services",
    description:
      "Ensure regulatory compliance of your computerized systems through structured validation and documentation.",
    features: [
      "21 CFR Part 11 & EU Annex 11",
      "IQ / OQ / PQ documentation",
      "Risk-based validation",
      "Data integrity checks",
      "Audit readiness support",
      "Compliance gap analysis",
    ],
    benefits: [
      "Regulatory compliance assurance",
      "Reduced audit risks",
      "Validated systems",
      "Improved data integrity",
    ],
  },
  {
    id: "testing",
    icon: TestTube,
    title: "Manual & Automation Testing",
    subtitle: "Quality Assurance Services",
    description:
      "Deliver defect-free software through our comprehensive QA and automation testing services.",
    features: [
      "Functional & regression testing",
      "Automation frameworks",
      "API & integration testing",
      "Performance testing",
      "Mobile & web testing",
      "Test strategy & planning",
    ],
    benefits: [
      "Higher product quality",
      "Faster release cycles",
      "Reduced production issues",
      "Cost-efficient QA",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 text-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${servicesBg})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-amber-900/40" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Services
              </h1>

              {/* Gold underline */}
              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />

              <p className="font-sans text-amber-400 text-base md:text-lg mb-4">
                Premium Solutions for Modern Enterprises
              </p>

              <p className="font-sans text-white/75 text-base md:text-lg leading-relaxed">
                Comprehensive IT and business services designed to enable scalability,
                compliance, and long-term success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8 space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* LEFT CONTENT */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-amber-400" />
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    {service.title}
                  </h2>

                  <p className="font-sans text-amber-400 font-medium mb-4">
                    {service.subtitle}
                  </p>

                  <p className="font-sans text-white/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <span className="font-sans text-white/70 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT CARD */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-black/60 border border-amber-500/20 rounded-2xl p-8 lg:p-10">
                    <h3 className="font-serif text-xl font-bold mb-6">
                      Business Value
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-amber-400" />
                          </div>
                          <span className="font-sans text-white/80">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
