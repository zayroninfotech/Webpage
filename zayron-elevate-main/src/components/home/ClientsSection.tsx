import { motion } from "framer-motion";
import { Star } from "lucide-react";

const clients = [
  { name: "Dr. Reddy's Laboratories", logo: "/Client/Dr.Reddy's.png" },
  { name: "PixelMind Solutions Pvt Ltd", logo: "/Client/pixelmind.png" },
  { name: "Prakom Group of Companies", logo: "/Client/prakom.png" },
];

/* Duplicate clients for seamless marquee loop */
const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-40 pointer-events-none" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-300 text-orange-700 text-[11px] tracking-[0.18em] uppercase font-bold mb-5">
            <Star size={10} fill="currentColor" /> Our Clients
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 leading-tight">
            Clients We&apos;re <span className="text-orange-600">Proud</span> Of
          </h2>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Serving IT, Pharma, Power, and Manufacturing industries — here are some of the organizations that trust Zayron Infotech.
          </p>
        </motion.div>

        {/* Infinite marquee */}
        <div className="relative mb-14 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-10 items-center" style={{ width: "max-content" }}>
            {marqueeClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex flex-col items-center gap-3 group min-w-[200px]"
              >
                <div className="w-full h-24 flex items-center justify-center px-6 bg-white rounded-xl border border-slate-200 group-hover:border-orange-300 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-14 max-w-[160px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
                  />
                </div>
                <p className="text-[#111111] text-xs font-semibold text-center leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
