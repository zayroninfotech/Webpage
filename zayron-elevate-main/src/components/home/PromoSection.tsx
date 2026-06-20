import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import promoImg from "@/assets/hero-20.avif";

const highlights = [
  "Compliance-Driven Delivery",
  "Industry Best Practices",
  "Transparent Communication",
  "Measurable Outcomes",
  "Long-term Partnerships",
  "Scalable Solutions",
];

const rightStats = [
  { value: "99%", title: "On-Time Delivery", desc: "Consistent project completion within agreed timelines" },
  { value: "100%", title: "Compliance Rate", desc: "Full adherence to regulatory standards" },
  { value: "24/7", title: "Support Available", desc: "Round-the-clock technical assistance" },
  { value: "3+", title: "Active Projects", desc: "Ongoing engagements across industries" },
];

export const PromoSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${hero2})` }} />
      <div className="absolute inset-0 bg-black/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-amber-900/50" />

      {/* Top & bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-400 text-xs tracking-widest uppercase font-medium mb-6">
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
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5 border border-white/10 hover:border-amber-400/30 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-sans text-white/85 text-sm font-medium">{item}</span>
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

          {/* Right — photo + stat overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Photo card */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/60 mb-6">
              <img
                src={promoImg}
                alt="Partnership"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-white font-bold text-lg">Trusted by Leading Organizations</p>
                <p className="font-sans text-white/60 text-sm">Across industries in India and beyond</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {rightStats.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="group bg-black/60 backdrop-blur-sm rounded-xl p-5 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 group-hover:from-amber-500/5 to-transparent transition-all duration-500" />
                  <div className="relative font-mono tabular-nums text-3xl font-bold text-amber-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="relative font-sans text-white font-semibold text-sm">{stat.title}</div>
                  <p className="relative font-sans text-white/50 text-xs mt-1 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
