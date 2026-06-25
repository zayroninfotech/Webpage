import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { ExternalLink, Code2, Layers, ShieldCheck, Users, BarChart3, Cpu } from "lucide-react";
import projectsBg from "@/assets/hero-3.jpg";

const projects = [
  {
    id: "01",
    icon: Users,
    category: "HR Product",
    title: "HRMS Portal",
    description:
      "A comprehensive Human Resource Management System built for modern enterprises. Streamlines employee lifecycle, payroll, attendance, and compliance under one platform.",
    tags: ["React", "Django", "PostgreSQL", "REST API"],
    status: "Live",
    color: "from-amber-500 to-yellow-400",
  },
  {
    id: "02",
    icon: ShieldCheck,
    category: "Compliance Product",
    title: "CSV Validation Suite",
    description:
      "A regulatory compliance tool designed for pharmaceutical companies. Automates Computer System Validation processes as per 21 CFR Part 11 and EU Annex 11 standards.",
    tags: ["Python", "Django", "PDF Engine", "Audit Trail"],
    status: "Live",
    color: "from-purple-500 to-violet-400",
  },
  {
    id: "03",
    icon: BarChart3,
    category: "Analytics Project",
    title: "Enterprise Dashboard",
    description:
      "Real-time analytics and reporting dashboard for tracking business KPIs, employee performance, project status, and operational metrics across departments.",
    tags: ["React", "Recharts", "WebSocket", "Node.js"],
    status: "In Progress",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "04",
    icon: Layers,
    category: "Staffing Platform",
    title: "TalentBridge Portal",
    description:
      "An end-to-end staffing and recruitment platform connecting businesses with verified IT and non-IT professionals for contract and permanent roles.",
    tags: ["React", "Python", "AI Matching", "Cloud"],
    status: "In Progress",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "05",
    icon: Code2,
    category: "Academic Project",
    title: "Student Project Hub",
    description:
      "A platform for students to submit, manage, and showcase final year projects with mentor guidance, feedback loops, and industry review integration.",
    tags: ["React", "Django", "SQLite", "File Storage"],
    status: "Live",
    color: "from-orange-500 to-red-400",
  },
  {
    id: "06",
    icon: Cpu,
    category: "Automation Project",
    title: "QA Automation Framework",
    description:
      "A reusable automation testing framework supporting web, API, and mobile testing using Selenium, Appium, and Pytest for enterprise QA pipelines.",
    tags: ["Python", "Selenium", "Appium", "CI/CD"],
    status: "Live",
    color: "from-pink-500 to-rose-400",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden text-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${projectsBg})` }} />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-amber-900/40" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[11px] tracking-[0.18em] uppercase font-bold mb-5">
                Our Work
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Projects & Products
              </h1>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
              <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed">
                Innovative solutions we've built and delivered — from enterprise products to client-specific projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="py-20 lg:py-28 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white/3 hover:bg-white/6 border border-white/8 hover:border-amber-400/30 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Number + Status */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-white/20 text-xs">{project.id}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${project.status === "Live" ? "bg-green-500/15 text-green-400 border border-green-500/25" : "bg-amber-500/15 text-amber-400 border border-amber-500/25"}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
                    <project.icon size={22} className="text-black" />
                  </div>

                  {/* Category + Title */}
                  <div>
                    <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-1">{project.category}</p>
                    <h3 className="font-serif text-white text-xl font-bold group-hover:text-amber-300 transition-colors">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-white/55 text-sm leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-medium">
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
