import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-black via-black/90 to-amber-900/70 rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-amber-500/20"
        >
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="font-sans text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with Zayron Infotech to deliver reliable, scalable, and compliant IT and non-IT solutions.
            Let’s collaborate to drive business transformation and long-term value.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="heroOutline"
                size="xl"
                className="min-w-[220px] border-amber-400 text-amber-400 hover:bg-amber-400/10"
              >
                Get Started Today
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
