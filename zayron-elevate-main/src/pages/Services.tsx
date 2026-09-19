import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import {
  Code2,
  Shield,
  TestTube,
  Cpu,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import servicesBg from "@/assets/hero-100.jpg";

const services = [
  {
    id: "app-dev",
    icon: Code2,
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

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        <PageHero
          title="Our Services"
          subtitle="End-to-End Technology & Business Solutions"
          description="From AI-powered products and application development to CSV compliance, security testing, and digital marketing — comprehensive services for every enterprise need."
          bgImage={servicesBg}
          badge="What We Offer"
          breadcrumbs={[{ label: "Services" }]}
        />

        {/* SERVICES LIST */}
        <section className="py-20 lg:py-28 bg-white">
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
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] mb-2">
                    {service.title}
                  </h2>

                  <p className="font-sans text-orange-600 font-medium mb-4">
                    {service.subtitle}
                  </p>

                  <p className="font-sans text-slate-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <span className="font-sans text-slate-600 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT CARD */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm">
                    <h3 className="font-serif text-xl font-bold text-[#111111] mb-6">
                      Business Value
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-orange-600" />
                          </div>
                          <span className="font-sans text-slate-700">
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
