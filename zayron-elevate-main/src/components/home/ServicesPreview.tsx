import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Database,
  Shield,
  TestTube,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "IT & Non-IT Talent Solutions",
    description:
      "We deliver high-quality IT and non-IT professionals through flexible contract and permanent staffing models, aligned to meet your business and operational needs.",
    features: ["Contract Hiring", "Permanent Placement", "Resource Augmentation"],
  },
  {
    icon: Database,
    title: "HRMS Application",
    description:
      "A powerful, ready-to-deploy HRMS application designed to digitize and simplify end-to-end human resource operations for modern organizations.",
    features: [
      "Employee Lifecycle Management",
      "Payroll & Statutory Compliance",
      "Performance & Appraisal Management",
      "Attendance & Leave Management",
      "Role-Based Access Control",
      "Employee Self-Service Portal",
    ],
  },
  {
    icon: Shield,
    title: "CSV & Compliance Consulting",
    description:
      "We help organizations reduce compliance risk through structured CSV methodologies and regulatory compliance consulting services.",
    features: [
      "GxP Compliance",
      "Electronic Records & Signatures",
      "Audit & Inspection Support",
    ],
  },
  {
    icon: TestTube,
    title: "Application Testing Services",
    description:
      "Our testing services help organizations improve software quality through structured manual and automated testing methodologies.",
    features: [
      "Functional Testing",
      "Automated Test Frameworks",
      "Performance Validation",
    ],
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs tracking-widest uppercase font-medium mb-5">
            Our Services
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Integrated IT & Non-IT Solutions
          </h2>

          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            End-to-end technology and business services designed to enhance efficiency,
            drive innovation, and support sustainable growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-black/60 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-black" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-sans text-sm text-white/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-sans text-amber-400 font-medium text-sm hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <Button
              variant="heroOutline"
              size="lg"
              className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
            >
              View All Services
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
