import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { ExternalLink, Code2, Layers, ShieldCheck, Users, BarChart3, Cpu } from "lucide-react";
import projectsBg from "@/assets/hero-3.jpg";

const projects = [
  {
    id: "01",
    icon: Cpu,
    category: "AI Tools Platform",
    title: "ZayroDocX",
    description:
      "Our flagship AI-integrated tools platform featuring 50+ powerful tools including special AI-based tools. ZayroDocX consolidates advanced AI capabilities for document processing, automation, and intelligent workflows in one platform.",
    tags: ["AI Integration", "50+ Tools", "Web Platform", "Enterprise"],
    status: "Live",
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: "02",
    icon: Users,
    category: "HRMS System",
    title: "ZayroConnect",
    description:
      "Advanced Human Resource Management System built to ISO standards. ZayroConnect handles the full HR lifecycle and is also provided as an HRMS implementation service for other companies — covering employee management, payroll, attendance, and compliance.",
    tags: ["HRMS", "ISO Standards", "React", "Enterprise"],
    status: "Live",
    color: "from-[#111111] to-indigo-600",
  },
  {
    id: "03",
    icon: Layers,
    category: "File Sharing Platform",
    title: "ZayroDeck",
    description:
      "Enterprise-grade secure file sharing platform designed for teams and organizations. ZayroDeck enables controlled document distribution, secure access management, and seamless collaboration across departments.",
    tags: ["File Sharing", "Security", "Cloud Storage", "Collaboration"],
    status: "Live",
    color: "from-slate-700 to-slate-500",
  },
  {
    id: "04",
    icon: BarChart3,
    category: "Invoice Management",
    title: "ZayroInvoice",
    description:
      "Comprehensive invoice creation and management application for businesses. ZayroInvoice streamlines billing workflows, tracks payment status, generates professional invoices, and provides financial reporting capabilities.",
    tags: ["Invoicing", "Finance", "Reporting", "Business"],
    status: "Live",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "05",
    icon: Code2,
    category: "Internal Application",
    title: "ZayroPlay",
    description:
      "An internally developed application built for operational use within Zayron Infotech. ZayroPlay is part of our growing product ecosystem, demonstrating our in-house software development capability.",
    tags: ["Internal App", "React", "TypeScript", "Enterprise"],
    status: "Live",
    color: "from-orange-500 to-red-400",
  },
  {
    id: "06",
    icon: ShieldCheck,
    category: "AI Tools Suite",
    title: "ZayroSuite",
    description:
      "A curated AI tools suite that brings together a collection of powerful artificial intelligence utilities. ZayroSuite complements ZayroDocX, providing specialized AI capabilities for targeted business use cases and workflows.",
    tags: ["AI Suite", "Automation", "Productivity", "Enterprise"],
    status: "Live",
    color: "from-pink-500 to-rose-400",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main>
        <PageHero
          title="Our Products &amp;"
          titleHighlight="Platforms"
          description="Internally built enterprise applications — from ZayroDocX with 50+ AI tools to ZayroConnect HRMS, ZayroDeck, ZayroInvoice, ZayroPlay, and ZayroSuite."
          bgImage={projectsBg}
          badge="Our Products"
          breadcrumbs={[{ label: "Projects" }]}
        />

        {/* PROJECTS GRID */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white hover:bg-slate-50 border border-slate-200 hover:border-orange-400/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Number + Status */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-slate-300 text-xs">{project.id}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${project.status === "Live" ? "bg-green-500/15 text-green-400 border border-green-500/25" : "bg-orange-500/15 text-orange-400 border border-orange-500/25"}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
                    <project.icon size={22} className="text-black" />
                  </div>

                  {/* Category + Title */}
                  <div>
                    <p className="text-orange-600 text-[10px] font-bold tracking-widest uppercase mb-1">{project.category}</p>
                    <h3 className="font-serif text-[#111111] text-xl font-bold group-hover:text-orange-700 transition-colors">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-slate-500 text-sm leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r ${project.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
