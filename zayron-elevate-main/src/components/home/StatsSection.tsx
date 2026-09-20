import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, Building2, Award } from "lucide-react";
import statsBg from "@/assets/stats-bg.png";

const stats = [
  {
    icon: Cpu,
    value: 50,
    suffix: "+",
    label: "AI Tools",
    description: "AI-powered solutions built for smarter business workflows",
  },
  {
    icon: Layers,
    value: 10,
    suffix: "+",
    label: "Internal Products",
    description: "Applications built for enterprise use",
  },
  {
    icon: Building2,
    value: 20,
    suffix: "+",
    label: "Industries Served",
    description: "IT, Pharma, Power, Manufacturing & more",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations",
  },
];

const Counter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView]);

  return <>{count}{suffix}</>;
};

export const StatsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${statsBg})` }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-transparent to-[#0a0a0a]/80" />

      {/* Red accent lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold text-red-500 mb-3">
            <span className="w-4 h-px bg-red-500" />
            Our Impact
            <span className="w-4 h-px bg-red-500" />
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="text-white/45 text-sm mt-2 max-w-lg mx-auto leading-relaxed">
            We combine AI, enterprise technology, quality, security, and digital expertise to deliver scalable solutions that address complex business needs and accelerate digital transformation.
          </p>
        </motion.div>

        {/* Stats Grid — compact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative rounded-xl p-5 text-center overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover top red line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 transition-all duration-400 rounded-full bg-red-500" />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-xl"
                style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(230,57,70,0.12) 0%, transparent 70%)" }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 border border-red-500/20 group-hover:border-red-500/40 group-hover:scale-105 transition-all duration-300"
                style={{ background: "rgba(230,57,70,0.07)" }}
              >
                <stat.icon className="w-5 h-5 text-red-400" strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div
                className="font-bold text-white leading-none mb-1 tabular-nums"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>

              {/* Label */}
              <p className="text-white/90 font-semibold text-[13px] mb-1 tracking-wide">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-white/35 text-[11px] leading-snug">
                {stat.description}
              </p>

              {/* Bottom red line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-400 bg-red-500/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
