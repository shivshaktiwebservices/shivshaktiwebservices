"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Shiv Shakti Multi Service",
    category: "Recruitment Platform",
    description: "A professional recruitment platform built to connect candidates with career opportunities.",
    url: "https://www.shivshaktimultiservice.co.in/",
  },
  {
    number: "02",
    title: "LuggageFree",
    category: "Logistics Platform",
    description: "A digital platform designed around convenient luggage delivery and logistics.",
  },
  {
    number: "03",
    title: "Devine Tour & Travels",
    category: "Travel Website",
    description: "A modern travel experience for discovering destinations, tours and customized journeys.",
    
  },
];

const additionalWork = [
  "Business Websites",
  "E-Commerce",
  "Landing Pages",
  "Web Applications",
  "Admin Dashboards",
  "Booking Systems",
  "AI Integrations",
  "Automation",
  "Custom Platforms",
];

const viewport = { once: true, margin: "-80px" };

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function OurWork() {
  return (
    <section id="work" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-[20%] h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.025] blur-[130px]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6 }}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px]">Our Work</span>
            </div>

            <h2 className="max-w-[680px] text-[36px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[var(--foreground)] sm:text-[46px] lg:text-[54px]">
              A few things
              <span className="block text-[var(--muted)]">we've built.</span>
            </h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-[390px] text-[13px] leading-6 text-[var(--muted)] lg:pb-1">
            Digital experiences created for businesses, ideas and real-world problems.
          </motion.p>
        </div>

        <div className="mt-8">
          {projects.map((project) => (
            <motion.a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" initial="hidden" whileInView="show" viewport={viewport} variants={itemVariants} className="group block border-b border-[var(--border)]">
              <div className="relative flex flex-col gap-6 py-7 transition-all duration-500 sm:py-9 lg:flex-row lg:items-center lg:gap-8 lg:px-4">
                <div className="pointer-events-none absolute inset-0 -z-10 scale-y-0 rounded-2xl bg-[var(--surface)] opacity-0 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-100" />

                <div className="flex items-center gap-4 lg:w-[110px] lg:shrink-0">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-[var(--accent)]">{project.number}</span>
                  <span className="h-px w-8 bg-[var(--border)] transition-all duration-500 group-hover:w-12 group-hover:bg-[var(--accent)]" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{project.category}</span>
                  </div>

                  <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-[var(--foreground)] transition-transform duration-500 group-hover:translate-x-1 sm:text-[30px] lg:text-[34px]">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-[620px] text-[12px] leading-6 text-[var(--muted)] sm:text-[13px]">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 lg:w-[170px] lg:shrink-0 lg:justify-end">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
                    View Project
                  </span>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-5 text-center text-[10px] leading-5 text-[var(--muted)] sm:text-[11px]">
          Project links are provided for demonstration purposes only and are subject to the consent of their respective owners.
        </p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6 }} className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">More Work</p>
              <p className="mt-2 text-[12px] text-[var(--muted)]">Projects, products and digital solutions across different categories.</p>
            </div>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)] sm:block">
              Selected Capabilities
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {additionalWork.map((item, index) => (
              <motion.span key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.4, delay: index * 0.035 }} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[10px] font-semibold text-[var(--muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--foreground)]">
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6, delay: 0.15 }} className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-bold text-[var(--foreground)]">Have something in mind?</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Let's build something meaningful together.</p>
          </div>

          <a href="#contact" className="group flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-[10px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            Start a Project
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
