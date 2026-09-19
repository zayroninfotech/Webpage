import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Layers, Lock, Server, MessageSquare } from "lucide-react";
import promoBg from "@/assets/promo-bg-new.png";
import promoImg from "@/assets/hero-20.avif";

const features = [
  { icon: Cpu,           title: "Product-Focused Development",   desc: "Building innovative products and tailored digital solutions." },
  { icon: Layers,        title: "AI & Intelligent Automation",    desc: "Applying AI and automation to simplify workflows and improve productivity." },
  { icon: ShieldCheck,   title: "Quality & Compliance",           desc: "Supporting CSV, GxP, ISO, validation, testing, and regulatory requirements." },
  { icon: Lock,          title: "Secure Technology Solutions",    desc: "Developing secure solutions with security and data protection at every stage." },
  { icon: Server,        title: "Scalable Architecture",          desc: "Designing reliable technology that supports business growth and changing needs." },
  { icon: MessageSquare, title: "Transparent Delivery",           desc: "Structured execution, clear communication, and measurable project outcomes." },
];

const rightStats = [
  { value: "99%",  title: "On-Time Delivery",    desc: "Projects delivered within agreed timelines" },
  { value: "100%", title: "Quality Focus",        desc: "Structured development and validation practices" },
  { value: "24/7", title: "Technical Support",    desc: "Responsive support for critical requirements" },
  { value: "10+",  title: "Industries Served",    desc: "Technology solutions across multiple sectors" },
];

export const PromoSection = () => {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${promoBg})` }} />
      <div className="absolute inset-0 bg-[#0a0a0a]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/75 to-[#0a0a0a]/55" />

      {/* Red accent lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />

      {/* Animated rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-red-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-8 -right-8 w-44 h-44 rounded-full border border-red-500/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-16 left-10 w-12 h-12 border border-red-500/20 rotate-45"
          animate={{ y: [0, -14, 0], rotate: [45, 55, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] tracking-[0.22em] uppercase font-semibold mb-6">
              <span className="w-3 h-px bg-red-400" />
              Why Partner With Us
              <span className="w-3 h-px bg-red-400" />
            </span>

            {/* Title */}
            <h2
              className="font-bold text-white leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)" }}
            >
              Technology That Drives
              <br />
              <span className="text-red-500">Business Growth.</span>
            </h2>

            {/* Description */}
            <p className="text-white/70 text-[0.95rem] leading-relaxed mb-8 max-w-[480px]">
              We build intelligent products, enterprise applications, and secure digital solutions
              that help organizations improve efficiency, solve complex challenges, and scale with confidence.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group flex items-start gap-3 rounded-lg px-3 py-3 border border-white/15 bg-[#0d0d0d]/85 hover:border-red-500/40 hover:bg-[#151515]/90 transition-all duration-300 cursor-default"
                >
                  <div className="shrink-0 w-8 h-8 rounded-md bg-red-500/12 flex items-center justify-center mt-0.5 group-hover:bg-red-500/20 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-red-400" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-white/90 text-[12px] font-semibold leading-snug">{item.title}</p>
                    <p className="text-white/40 text-[11px] mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* ── Right — card + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Top brand card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 mb-4">
              {/* Brand bar */}
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-black/70 backdrop-blur-sm border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-[15px] font-bold leading-none" style={{ fontFamily: "'Bodoni MT', 'Bodoni 72', 'Didot', serif", letterSpacing: "0.04em" }}>
                      <span className="text-white">Zayron</span>{" "}
                      <span style={{ color: "#E63946" }}>Infotech</span>
                    </p>
                    <p className="text-white/45 text-[9px] tracking-widest uppercase">Products · Technology · Business Solutions</p>
                  </div>
                </div>
                <span className="text-[9px] text-red-400 font-bold tracking-[0.2em] uppercase">Innovation In Action</span>
              </div>

              {/* Right side label */}
              <div className="absolute top-16 right-4 z-20 flex flex-col gap-1">
                {["PEOPLE", "PRODUCTS", "PROGRESS"].map((w) => (
                  <span key={w} className="text-[9px] font-bold tracking-widest text-white/30">{w}</span>
                ))}
              </div>

              <img src={promoImg} alt="Team at work" className="w-full h-44 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-16 z-10">
                <p className="text-white font-bold text-base leading-snug mb-1">Turning Ideas into Scalable Solutions</p>
                <p className="text-white/50 text-[10px] tracking-wide">
                  Products &nbsp;|&nbsp; AI &nbsp;|&nbsp; Enterprise Applications &nbsp;|&nbsp; Quality &nbsp;|&nbsp; Security
                </p>
              </div>

              {/* Red left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-red-500/0 via-red-500/70 to-red-500/0" />
            </div>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {rightStats.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  className="group relative rounded-xl p-4 border border-white/15 bg-[#0d0d0d]/85 hover:border-red-500/40 hover:bg-[#151515]/90 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(230,57,70,0.1) 0%, transparent 70%)" }}
                  />
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="font-bold text-white text-xl tabular-nums">{stat.value}</span>
                  </div>
                  <p className="text-white/85 font-semibold text-[12px] leading-snug mb-0.5">{stat.title}</p>
                  <p className="text-white/40 text-[10px] leading-relaxed">{stat.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/40 transition-all duration-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
