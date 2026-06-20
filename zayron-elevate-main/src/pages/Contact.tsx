import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import contactBg from "@/assets/hero-15.jpg";

const MAIL_URL = "";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "1-6-6, Sriram Nagar, Kakinada (Urban),",
      "Andhra Pradesh – 533003, India",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9346083979"],
    href: ["tel:+919346083979"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@zayron.in", "support@zayron.in"],
    href: ["mailto:info@zayron.in", "mailto:support@zayron.in"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you shortly.",
        });
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email info@zayron.in directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactBg})` }}
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-amber-900/50" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
              <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed">
                We'd love to hear from you. Reach out to start a conversation
                about your future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

              {/* LEFT – INFO */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-6 text-amber-400">
                  Get in Touch
                </h2>

                <div className="space-y-4 mb-10">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-6 bg-black/60 rounded-xl border border-amber-500/20 hover:border-amber-400/40 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.details.map((line, i) => (
                          item.href ? (
                            <a
                              key={i}
                              href={item.href[i]}
                              className="block text-white/60 hover:text-amber-400 text-sm leading-relaxed transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-white/60 text-sm leading-relaxed">
                              {line}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-white/80 text-sm font-medium mb-1">
                        We typically respond within 24 hours
                      </p>
                      <p className="font-sans text-white/50 text-xs">
                        Mon – Sat · 9:00 AM – 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT – FORM */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black/60 rounded-2xl p-8 lg:p-10 border border-amber-500/20"
              >
                <h3 className="font-serif text-2xl font-bold mb-2">
                  Send Us a Message
                </h3>
                <p className="font-sans text-white/50 text-sm mb-6">
                  Fill in the form and we'll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name *"
                      className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400 col-span-2 sm:col-span-1"
                    />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400 col-span-2 sm:col-span-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400 col-span-2 sm:col-span-1"
                    />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400 col-span-2 sm:col-span-1"
                    />
                  </div>

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your Message *"
                    className="bg-black/70 border-amber-500/20 focus:border-amber-400 resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 border-2 border-black/40 border-t-black rounded-full animate-spin inline-block" />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <Send size={18} className="ml-2" /></>
                    )}
                  </Button>

                  <p className="font-sans text-white/30 text-xs text-center">
                    * Required fields. Your information is kept confidential.
                  </p>
                </form>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
