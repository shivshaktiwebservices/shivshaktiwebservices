"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your business, requirements, audience and goals.",
    gradient: "linear-gradient(135deg, #ff4f81 0%, #ff8a3d 100%)",
  },
  {
    number: "02",
    title: "Plan",
    text: "We define the right structure, features and solution for your needs.",
    gradient: "linear-gradient(135deg, #24a8ff 0%, #19d3c5 100%)",
  },
  {
    number: "03",
    title: "Design",
    text: "We create a modern experience aligned with your brand.",
    gradient: "linear-gradient(135deg, #22c55e 0%, #d4df25 100%)",
  },
  {
    number: "04",
    title: "Build",
    text: "We turn the approved idea into a fast, responsive digital product.",
    gradient: "linear-gradient(135deg, #b14cff 0%, #4d7cff 100%)",
  },
  {
    number: "05",
    title: "Test",
    text: "We test functionality, responsiveness, performance and usability.",
    gradient: "linear-gradient(135deg, #ff4545 0%, #ff9a3d 100%)",
  },
  {
    number: "06",
    title: "Launch & Grow",
    text: "We launch your solution and can continue supporting your digital growth.",
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

const itemVariants = {
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

export default function HowWeWork() {
  return (
    <section id="process" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute right-[-180px] top-[25%] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1180px]">
        {/* HEADER */}
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="grid gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <motion.div variants={itemVariants} className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px]">
                How We Work
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="max-w-[700px] text-[36px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[var(--foreground)] sm:text-[46px] lg:text-[54px]">
              From idea
              <span className="text-[var(--muted)]"> to launch.</span>
            </motion.h2>
          </div>

          <motion.p variants={itemVariants} className="max-w-[390px] text-[13px] leading-6 text-[var(--muted)] lg:pb-1">
            A simple, transparent process that keeps your project moving from the first conversation to launch and beyond.
          </motion.p>
        </motion.div>

        {/* DESKTOP PROCESS */}
        <div className="mt-10 hidden lg:block">
          <div className="relative">
            {/* PROCESS LINE */}
            <div className="absolute left-[8.33%] right-[8.33%] top-[25px] h-px bg-[var(--border)]" />

            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewport} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }} className="absolute left-[8.33%] right-[8.33%] top-[25px] h-px origin-left bg-gradient-to-r from-[#ff4f81] via-[#24a8ff] via-[#22c55e] via-[#b14cff] via-[#ff4545] to-[#ffc400]" />

            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="grid grid-cols-6 gap-3">
              {steps.map((step) => (
                <motion.div key={step.number} variants={itemVariants} className="group relative">
                  {/* NUMBER */}
                  <div className="relative z-10 mx-auto flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] transition-all duration-500 group-hover:border-transparent group-hover:bg-[var(--foreground)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.18)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]">
                    <span className="text-[10px] font-bold text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--background)]">
                      {step.number}
                    </span>
                  </div>

                  {/* CARD */}
                  <div className="relative mt-6 rounded-[23px] p-[1.5px] transition-all duration-500 group-hover:-translate-y-1">
                    {/* GLOWING GRADIENT BORDER */}
                    <div className="absolute -inset-[2px] rounded-[25px] opacity-40 blur-[5px] transition-all duration-500 group-hover:opacity-90 group-hover:blur-[8px]" style={{ background: step.gradient }} />

                    {/* GRADIENT BORDER */}
                    <div className="relative rounded-[22px] p-[1px]" style={{ background: step.gradient }}>
                      {/* CARD */}
                      <div className="relative min-h-[275px] overflow-hidden rounded-[21px] bg-[var(--surface)] p-5">
                        {/* SOFT COLOR GLOW INSIDE */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-[0.05] blur-[60px] transition-all duration-700 group-hover:opacity-[0.14] group-hover:scale-125" style={{ background: step.gradient }} />

                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
                              Step {step.number}
                            </span>

                            <ArrowRight size={12} className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--foreground)]" />
                          </div>

                          <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background)] shadow-sm">
                            <span className="h-2.5 w-2.5 rounded-full" style={{ background: step.gradient }} />
                          </div>

                          <h3 className="mt-5 text-[18px] font-extrabold tracking-[-0.04em] text-[var(--foreground)]">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-[10px] leading-5 text-[var(--muted)]">
                            {step.text}
                          </p>

                          <div className="absolute bottom-[-72px] left-0 flex items-center gap-2">
                            <Check size={11} className="text-[var(--muted)]" />

                            <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
                              ShivShakti Process
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE PROCESS */}
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="relative mt-10 lg:hidden">
          {/* TIMELINE */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[var(--border)]" />

          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={viewport} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }} className="absolute bottom-8 left-[19px] top-8 w-px origin-top bg-gradient-to-b from-[#ff4f81] via-[#24a8ff] via-[#22c55e] via-[#b14cff] via-[#ff4545] to-[#ffc400]" />

          <div className="space-y-5">
            {steps.map((step) => (
              <motion.div key={step.number} variants={itemVariants} className="group relative flex gap-5">
                {/* NUMBER */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] transition-all duration-500 group-hover:border-transparent group-hover:bg-[var(--foreground)]">
                  <span className="text-[9px] font-bold text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--background)]">
                    {step.number}
                  </span>
                </div>

                {/* CARD OUTER */}
                <div className="relative mb-1 flex-1 rounded-[22px] p-[1.5px] transition-all duration-500 group-hover:-translate-y-0.5">
                  {/* GLOW */}
                  <div className="absolute -inset-[2px] rounded-[24px] opacity-40 blur-[5px] transition-all duration-500 group-hover:opacity-90 group-hover:blur-[8px]" style={{ background: step.gradient }} />

                  {/* GRADIENT BORDER */}
                  <div className="relative rounded-[21px] p-[1px]" style={{ background: step.gradient }}>
                    {/* CARD */}
                    <div className="relative min-h-[205px] overflow-hidden rounded-[20px] bg-[var(--surface)] p-5">
                      {/* INNER GLOW */}
                      <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full opacity-[0.05] blur-[55px] transition-all duration-700 group-hover:opacity-[0.14] group-hover:scale-125" style={{ background: step.gradient }} />

                      <div className="relative">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
                            Step {step.number}
                          </span>

                          <ArrowRight size={12} className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--foreground)]" />
                        </div>

                        <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)] shadow-sm">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: step.gradient }} />
                        </div>

                        <h3 className="mt-4 text-[20px] font-extrabold tracking-[-0.04em] text-[var(--foreground)]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-6 text-[var(--muted)]">
                          {step.text}
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                          <Check size={11} className="text-[var(--muted)]" />

                          <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
                            ShivShakti Process
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.65, delay: 0.2 }} className="mt-10 flex flex-col gap-5 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-[14px] font-bold tracking-[-0.02em] text-[var(--foreground)] sm:text-[16px]">
              Have a project in mind?
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[var(--muted)] sm:text-[12px]">
              Start with a conversation. We'll figure out the right next step together.
            </p>
          </div>

          <a href="#contact" className="group flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-[10px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            Start a Project
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}