import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";
import statsBg from "@/assets/hero101.avif";
import overlayImg from "@/assets/hero1011.jpg";

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

  return <>{count}{suffix}</>;
};

export const StatsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${statsBg})` }} />
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-amber-900/40" />

      {/* Decorative side image */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-center opacity-10 hidden xl:block"
        style={{ backgroundImage: `url(${overlayImg})` }}
      />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-transparent to-black hidden xl:block" />

      {/* Gold horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative group text-center bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-400 overflow-hidden"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-600/5 transition-all duration-500 rounded-2xl" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.15) 0%, transparent 60%)" }} />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                <stat.icon className="w-7 h-7 text-amber-400" />
              </div>

              {/* Value */}
              <div className="mb-2 font-mono tabular-nums text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>

              {/* Label */}
              <h3 className="font-sans font-semibold text-white text-base md:text-lg mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
