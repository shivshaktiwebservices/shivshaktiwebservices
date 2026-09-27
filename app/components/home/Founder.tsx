"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1180px]">
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="mb-10">
          <motion.div variants={itemVariants} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px]">
              Meet The Founder
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="max-w-[700px] text-[36px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[var(--foreground)] sm:text-[46px] lg:text-[54px]">
            Built with a
            <span className="text-[var(--muted)]"> clear vision.</span>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={containerVariants} className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-2 sm:rounded-[34px] sm:p-3">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[100px]" />

          <div className="relative grid overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--background)] lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[27px]">
            {/* FOUNDER VISUAL */}
            <motion.div variants={itemVariants} className="relative min-h-[380px] overflow-hidden border-b border-[var(--border)] lg:min-h-[560px] lg:border-b-0 lg:border-r">
              {/* Background grid */}
              <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

              {/* Glow */}
              <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] blur-[90px]" />

              {/* Decorative rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] sm:h-[320px] sm:w-[320px]">
                <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_15px_rgba(232,111,45,0.7)]" />
              </motion.div>

              <motion.div animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] sm:h-[230px] sm:w-[230px]">
                <span className="absolute bottom-[-3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--foreground)]" />
              </motion.div>

              {/* Founder initials */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={viewport} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }} className="flex h-36 w-36 items-center justify-center rounded-[34px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_25px_80px_rgba(0,0,0,0.12)] sm:h-44 sm:w-44 sm:rounded-[40px]">
                  <span className="text-[58px] font-black tracking-[-0.08em] text-[var(--foreground)] sm:text-[70px]">
                    YS
                  </span>
                </motion.div>
              </div>

              {/* Top label */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(232,111,45,0.7)]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Founder
                </span>
              </div>

              {/* Bottom identity */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                    ShivShakti Web Services
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-[var(--foreground)]">
                    Yash Saxena
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                  <Code2 size={14} className="text-[var(--muted)]" />
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                  <Sparkles size={15} className="text-[var(--accent)]" />
                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Founder & Digital Builder
                </span>
              </div>

              <h3 className="mt-6 text-[36px] font-extrabold leading-[1] tracking-[-0.055em] text-[var(--foreground)] sm:text-[46px] lg:text-[52px]">
                Yash
                <span className="text-[var(--muted)]"> Saxena.</span>
              </h3>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                Founder — ShivShakti Web Services
              </p>

              <div className="mt-8 space-y-5">
                <p className="text-[13px] leading-7 text-[var(--muted)] sm:text-[14px] sm:leading-8">
                  ShivShakti was built with a simple vision — to help businesses create a professional digital presence through modern websites, technology and practical digital solutions.
                </p>

                <p className="text-[13px] leading-7 text-[var(--muted)] sm:text-[14px] sm:leading-8">
                  We believe technology should solve real business problems, not simply look impressive. Every project starts with understanding what the business actually needs.
                </p>
              </div>

              {/* PRINCIPLES */}
              <div className="mt-8 grid grid-cols-1 gap-3 border-t border-[var(--border)] pt-7 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--accent)]/30">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                    Focus
                  </p>

                  <p className="mt-2 text-[11px] font-semibold text-[var(--foreground)]">
                    Business-first solutions
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--accent)]/30">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                    Approach
                  </p>

                  <p className="mt-2 text-[11px] font-semibold text-[var(--foreground)]">
                    Design + technology
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-5 py-3 text-[10px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  Work With ShivShakti

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--background)]/10">
                    <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}