import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import contactBg from "@/assets/hero-15.jpg";

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
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@zayron.in", "support@zayron.in"],
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Our team will contact you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });

    setIsSubmitting(false);
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

              {/* Gold underline */}
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />

              <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed">
                We’d love to hear from you. Reach out to start a conversation
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

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-6 bg-black/60 rounded-xl border border-amber-500/20"
                    >
                      <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.details.map((line, i) => (
                          <p
                            key={i}
                            className="text-white/60 text-sm leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
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
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400"
                  />

                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400"
                  />

                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400"
                  />

                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="h-12 bg-black/70 border-amber-500/20 focus:border-amber-400"
                  />

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your Message"
                    className="bg-black/70 border-amber-500/20 focus:border-amber-400 resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                  >
                    {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
                  </Button>
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
