"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, Check, MessageCircle, Workflow, Zap, Plug, Sparkles } from "lucide-react";

const solutions = [
  { title: "AI Integration", text: "Integrate AI capabilities into existing websites, platforms and business workflows.", icon: Sparkles, gradient: "linear-gradient(135deg,#ff4f81,#ff8a3d)" },
  { title: "AI Chatbots", text: "Create intelligent conversational experiences to answer questions and assist customers.", icon: Bot, gradient: "linear-gradient(135deg,#24a8ff,#19d3c5)" },
  { title: "WhatsApp Automation", text: "Automate customer communication, notifications and common business workflows.", icon: MessageCircle, gradient: "linear-gradient(135deg,#22c55e,#d4df25)" },
  { title: "Business Automation", text: "Reduce repetitive manual tasks by connecting your tools and automating workflows.", icon: Workflow, gradient: "linear-gradient(135deg,#b14cff,#4d7cff)" },
  { title: "API Integrations", text: "Connect different platforms and services to create a smoother digital workflow.", icon: Plug, gradient: "linear-gradient(135deg,#ff4545,#ff9a3d)" },
  { title: "AI-Powered Features", text: "Add practical AI capabilities to websites and applications where they provide real value.", icon: Zap, gradient: "linear-gradient(135deg,#ffc400,#ff7a18)" },
];

const benefits = [
  "Reduce repetitive work",
  "Faster customer responses",
  "Connect different tools",
  "Automate routine workflows",
  "Add useful AI features",
  "Improve operational efficiency",
];

const steps = [
  ["01", "Understand", "We identify repetitive tasks, bottlenecks and opportunities for automation."],
  ["02", "Plan", "We define the workflow, tools and integrations needed for the solution."],
  ["03", "Build", "We connect the systems and develop the required AI or automation features."],
  ["04", "Improve", "We refine the workflow based on how your business actually uses it."],
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* HERO */}
      <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]" />

        <div className="mx-auto max-w-[1180px]">

          <Link href="/services" className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[11px] font-semibold text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]">
            <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
            Back to Services
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* CONTENT */}
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>

              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(232,111,45,.7)]" />
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                  AI & Automation
                </span>
              </div>

              <h1 className="mt-7 text-[42px] font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                Make your business
                <span className="block text-[var(--accent)]">smarter and faster.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                We integrate AI and automation into practical business workflows
                to reduce repetitive work, improve customer experiences and create
                useful digital capabilities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-xs font-bold text-[var(--background)] transition hover:-translate-y-1">
                  Discuss Your Idea
                  <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link href="/#work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-xs font-bold transition hover:-translate-y-1 hover:border-[var(--foreground)]">
                  See Our Work
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 border-t border-[var(--border)] pt-6">
                {["Practical AI", "Smart Automation", "Custom Workflows"].map(item => (
                  <span key={item} className="flex items-center gap-2 text-[10px] font-semibold text-[var(--muted)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                      <Check size={10} className="text-[var(--accent)]" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>

            {/* AI VISUAL */}
            <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="relative">

              <div className="absolute -inset-6 rounded-[35px] bg-[var(--accent)] opacity-[.07] blur-3xl" />

              <div className="relative rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">

                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                      Automation System
                    </p>
                    <h2 className="mt-1 text-sm font-bold">
                      Your workflow, simplified
                    </h2>
                  </div>

                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_0_20px_rgba(232,111,45,.3)]"
                  >
                    <Zap size={16} />
                  </motion.span>
                </div>

                {/* FLOW */}
                <div className="relative mt-6">

                  <div className="absolute left-[24px] top-8 bottom-8 w-px bg-[var(--border)]" />

                  {[
                    [Bot, "AI Input", "Understand the request"],
                    [Workflow, "Automation", "Process the workflow"],
                    [MessageCircle, "Response", "Send the result"],
                  ].map(([Icon, title, text], index) => (
                    <motion.div
                      key={title as string}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: .3 + index * .15 }}
                      className="relative mb-5 flex items-center gap-4 last:mb-0"
                    >
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)]">
                        <Icon size={18} className="text-[var(--accent)]" />
                      </span>

                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5">
                        <p className="text-[11px] font-bold">{title as string}</p>
                        <p className="mt-1 text-[9px] text-[var(--muted)]">{text as string}</p>
                      </div>
                    </motion.div>
                  ))}

                </div>

                {/* STATUS */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(232,111,45,.7)]" />
                    <span className="text-[10px] font-bold">Workflow ready</span>
                  </div>

                  <span className="text-[9px] font-semibold text-[var(--muted)]">
                    Automated
                  </span>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">

          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Technology that works
              <span className="block text-[var(--muted)]">for your business.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              We focus on practical applications of AI and automation rather than
              adding technology just for the sake of it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .06 }}
                  className="group relative"
                >

                  <div
                    className="absolute -inset-[2px] rounded-[25px] opacity-30 blur-[5px] transition group-hover:opacity-80"
                    style={{ background: solution.gradient }}
                  />

                  <div
                    className="relative rounded-[24px] p-[1px]"
                    style={{ background: solution.gradient }}
                  >
                    <div className="min-h-[245px] rounded-[23px] bg-[var(--background)] p-6 transition group-hover:-translate-y-1">

                      <div className="flex items-start justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                          <Icon size={19} className="text-[var(--accent)]" />
                        </div>

                        <span className="text-[10px] font-bold text-[var(--muted)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      <h3 className="mt-10 text-xl font-bold">
                        {solution.title}
                      </h3>

                      <p className="mt-3 text-[13px] leading-6 text-[var(--muted)]">
                        {solution.text}
                      </p>

                      <ArrowUpRight
                        size={15}
                        className="absolute bottom-6 right-6 text-[var(--muted)] transition group-hover:text-[var(--accent)]"
                      />

                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
              Why Automation
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Spend less time
              <span className="block text-[var(--accent)]">
                doing repetitive work.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              Good automation should remove unnecessary manual steps while
              keeping your business processes simple and manageable.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map(item => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:-translate-y-1 hover:border-[var(--accent)]/50"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10">
                  <Check size={12} className="text-[var(--accent)]" />
                </span>

                <span className="text-xs font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">

          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
            Our Approach
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
            Find the problem.
            <span className="block text-[var(--muted)]">
              Then automate it.
            </span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="group rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[10px] font-bold text-[var(--accent)]">
                    {number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--muted)] transition group-hover:text-[var(--accent)]"
                  />
                </div>

                <h3 className="mt-7 text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px] bg-[var(--foreground)] px-6 py-12 text-[var(--background)] sm:px-10 sm:py-14 lg:px-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-20 blur-[90px]" />

          <div className="relative">

            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
              Have An Idea?
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
              What could your business automate?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 opacity-60">
              Tell us what currently takes too much time in your business.
              We'll explore where AI or automation could make the process simpler.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-6 py-3.5 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-1"
            >
              Discuss Your Idea
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}