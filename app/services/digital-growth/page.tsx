"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Search, Target, Globe, MapPin, Users, Share2, TrendingUp } from "lucide-react";

const services = [
  { title: "Online Presence", text: "Build a professional and consistent presence across the digital platforms where customers discover businesses.", icon: Globe, gradient: "linear-gradient(135deg,#ff4f81,#ff8a3d)" },
  { title: "Digital Marketing", text: "Reach the right audience through practical digital marketing strategies and campaigns.", icon: Target, gradient: "linear-gradient(135deg,#24a8ff,#19d3c5)" },
  { title: "SEO", text: "Improve your search visibility with essential SEO practices and optimization.", icon: Search, gradient: "linear-gradient(135deg,#22c55e,#d4df25)" },
  { title: "Google Business", text: "Improve your local online presence and help customers discover your business.", icon: MapPin, gradient: "linear-gradient(135deg,#b14cff,#4d7cff)" },
  { title: "Lead Generation", text: "Create better pathways for visitors to become enquiries and potential customers.", icon: Users, gradient: "linear-gradient(135deg,#ff4545,#ff9a3d)" },
  { title: "Social Media", text: "Build a consistent digital presence that communicates your brand and services.", icon: Share2, gradient: "linear-gradient(135deg,#ffc400,#ff7a18)" },
];

const points = ["Better online visibility", "Stronger local presence", "More customer touchpoints", "Clearer brand communication", "Better enquiry opportunities", "Practical growth strategy"];

const steps = [
  ["01", "Discover", "Understand your business, audience and current online presence."],
  ["02", "Position", "Create a clearer digital identity around your business."],
  ["03", "Reach", "Connect your business with the right digital channels."],
  ["04", "Grow", "Improve visibility, enquiries and long-term digital presence."],
];

export default function DigitalGrowthPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* HERO */}
      <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]" />

        <div className="mx-auto max-w-[1180px]">
          <Link href="/services" className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[11px] font-semibold text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]">
            <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
            Back to Services
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">Digital Growth</span>
              </div>

              <h1 className="mt-7 text-[42px] font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                Build a stronger
                <span className="block text-[var(--accent)]">online presence.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                A professional website is only the beginning. We help businesses improve their online presence, reach the right audience and create more opportunities for growth.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-xs font-bold text-[var(--background)] transition hover:-translate-y-1">
                  Grow Your Business
                  <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link href="/#work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-xs font-bold transition hover:-translate-y-1 hover:border-[var(--foreground)]">
                  See Our Work
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 border-t border-[var(--border)] pt-6">
                {["Business Focused", "Practical Strategy", "Long Term Growth"].map(item => (
                  <span key={item} className="flex items-center gap-2 text-[10px] font-semibold text-[var(--muted)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                      <Check size={10} className="text-[var(--accent)]" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* GROWTH VISUAL */}
            <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="relative">
              <div className="absolute -inset-5 rounded-[30px] bg-[var(--accent)] opacity-[.07] blur-3xl" />

              <div className="relative rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">

                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">Digital Growth</p>
                    <h2 className="mt-1 text-sm font-bold">Your online ecosystem</h2>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                    <TrendingUp size={16} />
                  </span>
                </div>

                <div className="mt-4 rounded-[22px] border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[.15em] text-[var(--muted)]">Digital Visibility</p>
                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-3xl font-black tracking-[-.05em]">Growing</span>
                    <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[9px] font-bold text-[var(--accent)]">+ Growth</span>
                  </div>

                  <div className="relative mt-8 h-36 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_24%,var(--border)_25%,transparent_26%,transparent_49%,var(--border)_50%,transparent_51%,transparent_74%,var(--border)_75%,transparent_76%)] opacity-60" />
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5 }} className="absolute bottom-4 left-0 h-1 w-full origin-left rotate-[-12deg] rounded-full bg-[var(--accent)] shadow-[0_0_15px_rgba(232,111,45,.4)]" />
                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute right-[8%] top-[8%] h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_15px_rgba(232,111,45,.7)]" />
                  </div>

                  <div className="flex justify-between text-[8px] font-semibold text-[var(--muted)]">
                    <span>Start</span>
                    <span>Build</span>
                    <span>Reach</span>
                    <span>Grow</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    [Search, "Search", "Visibility"],
                    [Users, "Leads", "Enquiries"],
                    [Share2, "Social", "Presence"],
                  ].map(([Icon, title, text]) => (
                    <div key={title as string} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3">
                      <Icon size={15} className="text-[var(--accent)]" />
                      <p className="mt-3 text-[10px] font-bold">{title as string}</p>
                      <p className="text-[8px] text-[var(--muted)]">{text as string}</p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">

          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">What We Do</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Build your presence.
              <span className="block text-[var(--muted)]">Reach the right people.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              We focus on the digital channels that actually matter to your customers.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="group relative">
                  <div className="absolute -inset-[2px] rounded-[25px] opacity-30 blur-[5px] transition group-hover:opacity-80" style={{ background: service.gradient }} />
                  <div className="relative rounded-[24px] p-[1px]" style={{ background: service.gradient }}>
                    <div className="min-h-[245px] rounded-[23px] bg-[var(--background)] p-6 transition group-hover:-translate-y-1">

                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                          <Icon size={19} className="text-[var(--accent)]" />
                        </div>
                        <span className="text-[10px] font-bold text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                      </div>

                      <h3 className="mt-10 text-xl font-bold">{service.title}</h3>
                      <p className="mt-3 text-[13px] leading-6 text-[var(--muted)]">{service.text}</p>

                      <ArrowUpRight size={15} className="absolute bottom-6 right-6 text-[var(--muted)] transition group-hover:text-[var(--accent)]" />

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY GROWTH */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">Why It Matters</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Getting online is one thing.
              <span className="block text-[var(--accent)]">Getting discovered is another.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              Customers can discover businesses through search, maps, social media, recommendations and websites. Your digital presence should connect those touchpoints.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {points.map(point => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:-translate-y-1 hover:border-[var(--accent)]/50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10">
                  <Check size={12} className="text-[var(--accent)]" />
                </span>
                <span className="text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">

          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">Our Approach</p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
            A digital presence that
            <span className="block text-[var(--muted)]">grows with your business.</span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div key={number} className="group rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]/50">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[10px] font-bold text-[var(--accent)]">{number}</span>
                  <ArrowUpRight size={15} className="text-[var(--muted)] transition group-hover:text-[var(--accent)]" />
                </div>

                <h3 className="mt-7 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{text}</p>
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
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">Ready To Grow?</p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Make your business easier to discover.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 opacity-60">
              Tell us where your business is today and where you want it to go.
            </p>

            <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-6 py-3.5 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-1">
              Let's Talk
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}