"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Business First",
    text: "We understand your business and goals before deciding what to build.",
    gradient: "linear-gradient(135deg, #ff4f81 0%, #ff8a3d 100%)",
  },
  {
    number: "02",
    title: "Custom, Not Generic",
    text: "Your digital presence should represent your business, not look like everyone else's.",
    gradient: "linear-gradient(135deg, #24a8ff 0%, #19d3c5 100%)",
  },
  {
    number: "03",
    title: "Modern Technology",
    text: "We use modern tools and technologies to create fast and reliable experiences.",
    gradient: "linear-gradient(135deg, #22c55e 0%, #d4df25 100%)",
  },
  {
    number: "04",
    title: "Transparent Process",
    text: "Clear communication and visibility throughout the entire project.",
    gradient: "linear-gradient(135deg, #b14cff 0%, #4d7cff 100%)",
  },
  {
    number: "05",
    title: "Built to Grow",
    text: "We build solutions that can evolve as your business grows.",
    gradient: "linear-gradient(135deg, #ff4545 0%, #ff9a3d 100%)",
  },
  {
    number: "06",
    title: "Long-Term Support",
    text: "Our relationship doesn't have to end when your website goes live.",
    gradient: "linear-gradient(135deg, #ffc400 0%, #ff7a18 100%)",
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
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-[1180px]">
        {/* HEADER */}
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="mb-10 flex flex-col gap-7 border-b border-[var(--border)] pb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.div variants={cardVariants} className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px]">
                Why ShivShakti
              </span>
            </motion.div>

            <motion.h2 variants={cardVariants} className="max-w-[700px] text-[36px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[var(--foreground)] sm:text-[46px] lg:text-[54px]">
              More than a website.
              <span className="block text-[var(--muted)]">
                A digital partner.
              </span>
            </motion.h2>
          </div>

          <motion.p variants={cardVariants} className="max-w-[390px] text-[13px] leading-6 text-[var(--muted)]">
            We combine strategy, design and technology to create digital experiences around your business.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <motion.article key={reason.number} variants={cardVariants} className="group relative">
              {/* OUTER GLOW */}
              <div className="absolute -inset-[2px] rounded-[26px] opacity-40 blur-[5px] transition-all duration-500 group-hover:opacity-90 group-hover:blur-[8px]" style={{ background: reason.gradient }} />

              {/* GRADIENT BORDER */}
              <div className="relative rounded-[25px] p-[1.5px]" style={{ background: reason.gradient }}>
                {/* CARD */}
                <div className="relative flex min-h-[270px] flex-col overflow-hidden rounded-[23px] bg-[var(--background)] p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_65px_rgba(0,0,0,0.12)] dark:group-hover:shadow-[0_22px_65px_rgba(0,0,0,0.45)] sm:p-7">
                  {/* INNER COLOR GLOW */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.045] blur-[65px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-[0.13]" style={{ background: reason.gradient }} />

                  {/* TOP */}
                  <div className="relative flex items-start justify-between">
                    {/* NUMBER */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)]">
                      <span className="text-[10px] font-bold tracking-[0.08em] text-[var(--foreground)]">
                        {reason.number}
                      </span>
                    </div>

                    {/* ARROW */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative mt-auto pt-14">
                    <h3 className="text-[22px] font-extrabold tracking-[-0.04em] text-[var(--foreground)] transition-transform duration-500 group-hover:translate-x-1 sm:text-[24px]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-[var(--muted)] sm:text-[13px] sm:leading-7">
                      {reason.text}
                    </p>

                    {/* BOTTOM ACCENT */}
                    <div className="mt-6 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: reason.gradient }} />

                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                        ShivShakti Approach
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.65, delay: 0.15 }} className="mt-10 flex flex-col gap-5 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-[14px] font-bold tracking-[-0.02em] text-[var(--foreground)] sm:text-[16px]">
              Ready to build something better?
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[var(--muted)] sm:text-[12px]">
              Tell us what you're working on and let's start a conversation.
            </p>
          </div>

          <a href="#contact" className="group flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-[10px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            Let's Talk
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}