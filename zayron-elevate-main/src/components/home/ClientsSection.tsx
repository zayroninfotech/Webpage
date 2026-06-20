import { motion } from "framer-motion";
import { Star } from "lucide-react";

const clients = [
  { name: "Dr. Reddy's Laboratories", logo: "/Client/Dr.Reddy's.png" },
  { name: "PixelMind Solutions Pvt Ltd", logo: "/Client/pixelmind.png" },
  { name: "Prakom Group of Companies", logo: "/Client/prakom.png" },
];

export const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] tracking-[0.18em] uppercase font-bold mb-5">
            <Star size={10} fill="currentColor" /> Our Clients
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Clients We're <span className="text-amber-400">Proud</span> Of
          </h2>
          <p className="font-sans text-white/55 text-base max-w-xl mx-auto leading-relaxed">
            Our strategies speak for themselves — here are some of the companies we're proud to work with.
          </p>
        </motion.div>

        {/* Client Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Logo with no card */}
              <div className="flex items-center justify-center w-full h-32 px-8">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 max-w-[200px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
              {/* Name below in white */}
              <p className="text-white text-sm font-semibold text-center leading-snug">{client.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </section>
  );
};
