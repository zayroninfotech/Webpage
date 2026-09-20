import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail, Phone, MapPin, Send, Clock,
  MessageCircle, Users, Lightbulb, Rocket,
  Handshake, Headset, Zap, TrendingUp, Lock,
} from "lucide-react";
import heroImg from "@/assets/contact-hero.png";

const MAIL_URL = "";

const heroStats = [
  { icon: MessageCircle, label: "Discuss",    sub: "Your Ideas" },
  { icon: Users,         label: "Explore",    sub: "Opportunities" },
  { icon: Lightbulb,    label: "Get Expert", sub: "Guidance" },
  { icon: Rocket,        label: "Build",      sub: "Together" },
];

const contactCards = [
  {
    icon: MapPin, title: "Visit Us", color: "bg-red-50",
    lines: ["1-6-6, Sriram Nagar, Kakinada (Urban),", "Andhra Pradesh – 533003, India"],
  },
  {
    icon: Phone, title: "Call Us", color: "bg-red-50",
    lines: ["+91 9346083979", "Mon – Sat · 9:00 AM – 6:00 PM IST"],
    href: ["tel:+919346083979"],
  },
  {
    icon: Mail, title: "Email Us", color: "bg-red-50",
    lines: ["info@zayron.in", "support@zayron.in"],
    href: ["mailto:info@zayron.in", "mailto:support@zayron.in"],
  },
  {
    icon: Clock, title: "Quick Response", color: "bg-red-50",
    lines: ["We typically respond", "within 24 hours"],
  },
];

const bottomStats = [
  { icon: Handshake, label: "Trusted by Businesses", sub: "Long-term partnerships" },
  { icon: Headset,   label: "Expert Support",        sub: "Always here to help" },
  { icon: Zap,       label: "Faster Response",       sub: "Within 24 hours" },
  { icon: TrendingUp,label: "Build the Future",      sub: "Together with you" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(MAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch {
      toast({
        title: "Failed to Send",
        description: "Please try again or email info@zayron.in directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden pt-24">
          <div className="grid lg:grid-cols-2 min-h-[460px] items-stretch">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center px-6 lg:px-16 py-14 lg:py-20"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-px bg-[#E63946]" />
                <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">
                  Let's Connect
                </span>
              </div>

              <h1 className="font-serif font-bold text-[#111111] leading-[1.08] mb-4"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)" }}>
                Contact <span className="text-[#E63946]">Us</span>
              </h1>

              <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-8 max-w-[440px]">
                We'd love to hear from you. Reach out to start a conversation about your
                ideas, projects, or future opportunities.
              </p>

              <div className="flex flex-wrap gap-6">
                {heroStats.map(({ icon: Icon, label, sub }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#E63946]" strokeWidth={1.8} />
                    <span className="font-bold text-sm text-[#111111] leading-tight">
                      {label}<br />
                      <span className="font-normal text-xs text-slate-500">{sub}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — hero image full-bleed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden min-h-[340px]"
            >
              <img src={heroImg} alt="Zayron Infotech Office"
                className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* ── REACH US + FORM ── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* LEFT — contact info + map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-px bg-[#E63946]" />
                  <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">Reach Us</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#111111] mb-1">
                  Get in Touch
                </h2>
                <div className="w-8 h-[3px] bg-[#E63946] rounded-full mb-3" />
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                  We are here to help. Whether you have a question, need a quote, or want to
                  discuss a project, our team is ready to assist you.
                </p>

                {/* 2×2 contact cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {contactCards.map((card, i) => (
                    <motion.div key={card.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="bg-white border border-slate-200 hover:border-[#E63946]/30 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                        <card.icon className="w-4 h-4 text-[#E63946]" strokeWidth={1.8} />
                      </div>
                      <p className="text-[#111111] font-bold text-sm mb-1">{card.title}</p>
                      {card.lines.map((line, j) => (
                        card.href?.[j] ? (
                          <a key={j} href={card.href[j]}
                            className="block text-slate-500 text-xs leading-snug hover:text-[#E63946] transition-colors">
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="text-slate-500 text-xs leading-snug">{line}</p>
                        )
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Google Map */}
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <iframe
                    title="Zayron Infotech Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.9168890447!2d82.23738!3d16.9891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827b5b73e7f71%3A0x0!2sSriram+Nagar%2C+Kakinada%2C+Andhra+Pradesh+533003!5e0!3m2!1sen!2sin!4v1695000000000"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* RIGHT — form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-px bg-[#E63946]" />
                  <span className="text-[#E63946] text-[10px] font-bold tracking-[0.22em] uppercase">Send a Message</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-1">
                  Let's Start a Conversation
                </h3>
                <div className="w-8 h-[3px] bg-[#E63946] rounded-full mb-3" />
                <p className="text-slate-500 text-sm mb-6">
                  Fill in the form below and we'll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Your Name *"
                      className="h-11 border-slate-200 focus:border-[#E63946] col-span-2 sm:col-span-1" />
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} required
                      placeholder="Email Address *"
                      className="h-11 border-slate-200 focus:border-[#E63946] col-span-2 sm:col-span-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input name="company" value={formData.company} onChange={handleChange}
                      placeholder="Company Name"
                      className="h-11 border-slate-200 focus:border-[#E63946] col-span-2 sm:col-span-1" />
                    <Input name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="Phone Number"
                      className="h-11 border-slate-200 focus:border-[#E63946] col-span-2 sm:col-span-1" />
                  </div>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required
                    rows={5} placeholder="Your Message *"
                    className="border-slate-200 focus:border-[#E63946] resize-none" />

                  <motion.button type="submit" disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                    className="w-full h-12 rounded-full bg-[#E63946] hover:bg-[#c62f3b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E63946]/20 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </motion.button>

                  <p className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px]">
                    <Lock size={11} />
                    Your information is kept confidential and will only be used to respond to your inquiry.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM STATS STRIP ── */}
        <section className="border-t border-slate-100 py-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-slate-200">
              {bottomStats.map(({ icon: Icon, label, sub }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 px-6 py-3 first:pl-0 last:pr-0"
                >
                  <Icon className="w-7 h-7 text-[#E63946] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[#111111] font-bold text-sm leading-tight">{label}</p>
                    <p className="text-slate-400 text-xs">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
