import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";
import statsBg from "@/assets/hero101.avif";

const stats = [
  {
    icon: TrendingUp,
    value: 1,
    suffix: "+",
    label: "Years of Experience",
    description: "Delivering excellence since day one",
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "IT Professionals",
    description: "Skilled experts across domains",
  },
  {
    icon: Building2,
    value: 8,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Trusted by leading organizations",
  },
  {
    icon: Award,
    value: 98,
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

    const duration = 1800;
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

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export const StatsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBg})` }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-amber-900/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs tracking-widest uppercase font-medium mb-5">
            Our Impact
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Driving Business Success
          </h2>

          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and long-term client satisfaction
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 mb-6">
                <stat.icon className="w-8 h-8 text-amber-400" />
              </div>

              {/* Value (NUMERIC FONT) */}
              <div className="mb-2 font-mono tabular-nums text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>

              {/* Label */}
              <h3 className="font-sans font-semibold text-white text-base md:text-lg mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
