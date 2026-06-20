import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Database, Shield, TestTube, ArrowRight } from "lucide-react";
import servicesBg from "@/assets/hero-10.avif";

const services = [
  {
    icon: Users,
    title: "IT & Non-IT Talent Solutions",
    description:
      "We deliver high-quality IT and non-IT professionals through flexible contract and permanent staffing models, aligned to meet your business and operational needs.",
    features: ["Contract Hiring", "Permanent Placement", "Resource Augmentation"],
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
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Glow accents */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-yellow-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-400 text-xs tracking-widest uppercase font-medium mb-5">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-black/60 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-400 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              {/* Number badge */}
              <div className="absolute top-6 right-6 font-mono text-4xl font-bold text-white/5 group-hover:text-amber-400/10 transition-colors duration-300 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
                <service.icon className="w-7 h-7 text-black" />
              </div>

              {/* Title */}
              <h3 className="relative font-serif text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative font-sans text-white/65 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 font-sans text-sm text-white/65">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <Link
                to="/services"
                className="relative inline-flex items-center gap-2 font-sans text-amber-400 font-medium text-sm group-hover:gap-3 transition-all duration-300"
              >
                Learn More <ArrowRight size={16} />
              </Link>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500" />
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
