import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import {
  Star,
  ShieldCheck,
  Users,
  Target,
  CheckCircle,
  Cpu,
  Code2,
} from "lucide-react";
import whyBg from "@/assets/hero-3.jpg";

const reasons = [
  {
    icon: Cpu,
    title: "50+ AI-Powered Tools",
    description:
      "Our ZayroDocX platform provides access to 50+ AI-integrated tools, giving your organization advanced AI capabilities without the complexity of building them from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Industry Compliance Expertise",
    description:
      "Deep expertise in CSV activities, internal and external audits, and gap assessments for Pharma, Power, and Manufacturing industries — ensuring audit-ready compliance.",
  },
  {
    icon: Code2,
    title: "End-to-End Development",
    description:
      "We deliver complete web, mobile, and .Exe application development with rigorous manual and automation testing, OWASP security testing, and code quality certificates.",
  },
  {
    icon: Target,
    title: "ISO-Standard Implementation",
    description:
      "Our HRMS and business solutions are implemented to ISO standards. ZayroConnect HRMS and our HRMS implementation services for other companies meet international quality benchmarks.",
  },
  {
    icon: Star,
    title: "Security-First Approach",
    description:
      "From OWASP testing and security testing to code quality checks and vulnerability assessments — security is built into every layer of our development and compliance services.",
  },
  {
    icon: Users,
    title: "Digital Transformation",
    description:
      "We enable complete digital transformation through SAP-based activities, digital marketing services, enterprise application development, and full-spectrum IT solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        <PageHero
          title="Why Choose"
          titleHighlight="Zayron"
          description="From 50+ AI-powered tools and CSV compliance expertise to end-to-end application development and ISO-standard HRMS — here is why businesses choose Zayron Infotech."
          bgImage={whyBg}
          badge="Our Differentiators"
          breadcrumbs={[{ label: "Why Choose Us" }]}
        />

        {/* REASONS */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 hover:border-orange-400/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center">
                      <reason.icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#111111]">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="font-sans text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE POINTS */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
                What Sets Us Apart
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                "ZayroDocX with 50+ AI-integrated tools",
                "CSV, OWASP & security testing expertise",
                "ISO-standard HRMS implementation",
                "Internal & external audit capabilities",
                "SAP-based activities & gap assessments",
                "End-to-end application development",
              ].map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-400/40 shadow-sm flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-orange-600 shrink-0" />
                  <span className="font-sans text-slate-700 text-sm">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
