import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const highlights = [
  "Compliance-Driven Delivery",
  "Industry Best Practices",
  "Transparent Communication",
  "Measurable Outcomes",
  "Long-term Partnerships",
  "Scalable Solutions",
];

export const PromoSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero2})` }}
      />
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-amber-900/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs tracking-widest uppercase font-medium mb-6">
              Why Partner With Us
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Delivering Excellence Through{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Structured Service Models
              </span>
            </h2>

            <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed mb-8">
              Zayron Infotech follows proven service models aligned with client objectives,
              regulatory standards, and evolving business needs. Our commitment to transparency,
              consistency, and measurable outcomes ensures value-driven partnerships.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-sans text-white/90 text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link to="/why-choose-us">
              <Button
                variant="heroOutline"
                size="xl"
                className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
              >
                Discover Our Approach
              </Button>
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                value: "99%",
                title: "On-Time Delivery",
                desc: "Consistent project completion within agreed timelines",
              },
              {
                value: "100%",
                title: "Compliance Rate",
                desc: "Full adherence to regulatory standards",
              },
              {
                value: "24/7",
                title: "Support Available",
                desc: "Round-the-clock technical assistance",
              },
              {
                value: "3+",
                title: "Active Projects",
                desc: "Ongoing engagements across industries",
              },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20"
              >
                <div className="font-mono tabular-nums text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.value}
                </div>

                <div className="font-sans text-white font-medium">
                  {stat.title}
                </div>

                <p className="font-sans text-white/60 text-sm mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
