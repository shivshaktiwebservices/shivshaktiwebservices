"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const clients = [
  {
    number: "01",
    name: "Shubham Machal",
    company: "Placement Agency",
    text: "Website and digital presence developed for a professional placement and recruitment business.",
    gradient: "linear-gradient(135deg, #ff4f81 0%, #ff8a3d 100%)",
  },
  {
    number: "02",
    name: "Sangam Singh",
    company: "Logistics Business",
    text: "Digital platform developed around the needs of a modern logistics and delivery business.",
    gradient: "linear-gradient(135deg, #24a8ff 0%, #19d3c5 100%)",
  },
  {
    number: "03",
    name: "Krishna Goyal",
    company: "Tour & Travels Business",
    text: "Travel website designed to present destinations, services and travel experiences professionally.",
    gradient: "linear-gradient(135deg, #22c55e 0%, #d4df25 100%)",
  },
];

const viewport = {
  once: true,
  margin: "-80px",
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HappyClients() {
  return (
    <section id="clients" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1180px]">
        {/* HEADER */}
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="mx-auto max-w-[720px] text-center">
          <motion.div variants={cardVariants} className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px]">
              Our Clients
            </span>

            <span className="h-px w-8 bg-[var(--accent)]" />
          </motion.div>

          <motion.h2 variants={cardVariants} className="text-[36px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[var(--foreground)] sm:text-[46px] lg:text-[54px]">
            Businesses we've
            <span className="block text-[var(--muted)]">
              worked with.
            </span>
          </motion.h2>

          <motion.p variants={cardVariants} className="mx-auto mt-5 max-w-[540px] text-[13px] leading-6 text-[var(--muted)]">
            Helping businesses establish a stronger digital presence through modern websites and digital solutions.
          </motion.p>
        </motion.div>

        {/* CLIENT CARDS */}
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <motion.article key={client.number} variants={cardVariants} className="group relative">
              {/* GLOW */}
              <div className="absolute -inset-[2px] rounded-[26px] opacity-40 blur-[5px] transition-all duration-500 group-hover:opacity-90 group-hover:blur-[8px]" style={{ background: client.gradient }} />

              {/* GRADIENT BORDER */}
              <div className="relative rounded-[25px] p-[1.5px]" style={{ background: client.gradient }}>
                {/* CARD */}
                <div className="relative flex min-h-[330px] flex-col overflow-hidden rounded-[23px] bg-[var(--background)] p-6 sm:p-7">
                  {/* INNER GLOW */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.045] blur-[65px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-[0.13]" style={{ background: client.gradient }} />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)]">
                      <Quote size={17} className="text-[var(--muted)]" />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.12em] text-[var(--muted)]">
                      {client.number}
                    </span>
                  </div>

                  <div className="relative mt-auto">
                    <div className="mb-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                        {client.company}
                      </span>
                    </div>

                    <h3 className="text-[23px] font-extrabold tracking-[-0.04em] text-[var(--foreground)] transition-transform duration-500 group-hover:translate-x-1 sm:text-[25px]">
                      {client.name}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-[var(--muted)] sm:text-[13px] sm:leading-7">
                      {client.text}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                        Client
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]">
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.65, delay: 0.2 }} className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] px-6 py-6 text-center sm:flex-row sm:text-left sm:px-8">
          <div>
            <p className="text-[13px] font-bold text-[var(--foreground)] sm:text-[14px]">
              Your business could be next.
            </p>

            <p className="mt-1 text-[10px] leading-5 text-[var(--muted)] sm:text-[11px]">
              Let's create a digital presence that works for you.
            </p>
          </div>

          <a href="#contact" className="group flex shrink-0 items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-[10px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            Start a Project
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}