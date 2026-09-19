import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
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
      "Andhra Pradesh â€“ 533003, India",
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
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        <PageHero
          title="Contact Us"
          description="We'd love to hear from you. Reach out to start a conversation about your future."
          bgImage={contactBg}
          badge="Get In Touch"
          breadcrumbs={[{ label: "Contact" }]}
        />

        {/* CONTACT CONTENT */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

              {/* LEFT â€“ INFO */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-6 text-orange-600">
                  Get in Touch
                </h2>

                <div className="space-y-4 mb-10">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-orange-400/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#111111] mb-1">{item.title}</h3>
                        {item.details.map((line, i) => (
                          item.href ? (
                            <a
                              key={i}
                              href={item.href[i]}
                              className="block text-slate-500 hover:text-orange-600 text-sm leading-relaxed transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-slate-500 text-sm leading-relaxed">
                              {line}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-slate-700 text-sm font-medium mb-1">
                        We typically respond within 24 hours
                      </p>
                      <p className="font-sans text-slate-400 text-xs">
                        Mon â€“ Sat Â· 9:00 AM â€“ 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT â€“ FORM */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm"
              >
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                  Send Us a Message
                </h3>
                <p className="font-sans text-slate-500 text-sm mb-6">
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
                      className="h-12 bg-white border-slate-300 focus:border-orange-500 col-span-2 sm:col-span-1"
                    />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className="h-12 bg-white border-slate-300 focus:border-orange-500 col-span-2 sm:col-span-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="h-12 bg-white border-slate-300 focus:border-orange-500 col-span-2 sm:col-span-1"
                    />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="h-12 bg-white border-slate-300 focus:border-orange-500 col-span-2 sm:col-span-1"
                    />
                  </div>

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your Message *"
                    className="bg-white border-slate-300 focus:border-orange-500 resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-400 text-black font-semibold shadow-lg shadow-orange-500/20 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 border-2 border-black/40 border-t-black rounded-full animate-spin inline-block" />
                        Sendingâ€¦
                      </>
                    ) : (
                      <>Send Message <Send size={18} className="ml-2" /></>
                    )}
                  </Button>

                  <p className="font-sans text-slate-400 text-xs text-center">
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
