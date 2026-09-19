import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  bgImage: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  accentColor?: "orange" | "blue" | "purple" | "green";
}

export const PageHero = ({
  title,
  titleHighlight,
  subtitle,
  description,
  bgImage,
  breadcrumbs,
  badge,
  accentColor = "orange",
}: PageHeroProps) => {
  const accentFrom = {
    orange: "from-orange-900/40",
    blue: "from-blue-900/40",
    purple: "from-purple-900/40",
    green: "from-emerald-900/40",
  }[accentColor];

  return (
    <section className="relative pt-40 pb-28 overflow-hidden text-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-[#111111]/78" />
      <div className={`absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/68 to-${accentFrom}`} />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right rings */}
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-orange-400/12"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-orange-400/18"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        {/* Bottom-left diamond */}
        <motion.div
          className="absolute bottom-10 left-10 w-12 h-12 border border-orange-400/25 rotate-45"
          animate={{ y: [0, -14, 0], rotate: [45, 55, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-400/30"
            style={{ width: 4 + i * 2, height: 4 + i * 2, top: `${20 + i * 18}%`, left: `${3 + i * 3}%` }}
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -12, 0] }}
            transition={{ duration: 2.5 + i, delay: i * 0.4, repeat: Infinity }}
          />
        ))}
        {[0, 1].map((i) => (
          <motion.div
            key={`r${i}`}
            className="absolute rounded-full bg-orange-300/25"
            style={{ width: 3 + i * 2, height: 3 + i * 2, top: `${35 + i * 20}%`, right: `${5 + i * 4}%` }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.2, delay: i * 0.6, repeat: Infinity }}
          />
        ))}
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/6 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 text-xs text-white/45 mb-8"
          >
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-white/25" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-orange-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-300 text-[11px] tracking-[0.18em] uppercase font-bold mb-5">
              {badge}
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {title}{" "}
            {titleHighlight && (
              <span className="text-orange-400">{titleHighlight}</span>
            )}
          </h1>

          {/* Gold underline */}
          <div className="w-20 h-[3px] bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-6 rounded-full" />

          {subtitle && (
            <p className="font-sans text-orange-400/90 text-sm font-semibold tracking-wider uppercase mb-3">
              {subtitle}
            </p>
          )}

          <p className="font-sans text-white/75 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};
