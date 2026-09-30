"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, TrendingUp, Sparkles, Layers3 } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Websites and web apps made for your brand, customers and business goals.",
    items: ["Business Websites", "Company Websites", "Online Stores", "Web Apps", "Dashboards", "Booking Systems"],
    href: "/services/web-development",
    icon: Code2,
    color: "orange",
  },
  {
    number: "02",
    title: "Digital Growth",
    description: "Get found online, reach more customers and grow your business.",
    items: ["Online Presence", "Digital Marketing", "SEO", "Lead Generation"],
    href: "/services/digital-growth",
    icon: TrendingUp,
    color: "blue",
  },
  {
    number: "03",
    title: "AI & Automation",
    description: "Use AI and automation to save time and simplify daily work.",
    items: ["AI Tools", "AI Chatbots", "Automation", "API Connections"],
    href: "/services/ai-automation",
    icon: Sparkles,
    color: "purple",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description: "Need something unique? We build tools and systems around your business.",
    items: ["Custom Platforms", "Business Tools", "Dashboards", "Workflows"],
    href: "/services/custom-solutions",
    icon: Layers3,
    color: "green",
  },
];

const viewportOnce = { once: true, margin: "-70px" };

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const colorStyles = {
  orange: {
    icon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    glow: "bg-orange-500/10",
    hover: "group-hover:border-orange-500/40",
    dot: "bg-orange-500",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    glow: "bg-blue-500/10",
    hover: "group-hover:border-blue-500/40",
    dot: "bg-blue-500",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    glow: "bg-purple-500/10",
    hover: "group-hover:border-purple-500/40",
    dot: "bg-purple-500",
  },
  green: {
    icon: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    glow: "bg-emerald-500/10",
    hover: "group-hover:border-emerald-500/40",
    dot: "bg-emerald-500",
  },
};

function FeaturedService({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon;

  return (
    <motion.div variants={fadeUp} className="mt-7">
      <Link href={service.href} className="group relative block overflow-hidden rounded-[28px] border border-[#292929] bg-[#111111] text-white shadow-[0_25px_70px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]">

        {/* TOP ACCENT */}
        <div className="absolute left-0 right-0 top-0 z-20 h-[3px] bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />

        {/* ORANGE GLOW */}
        <div className="pointer-events-none absolute -right-32 -top-32 z-10 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[100px] transition-all duration-700 group-hover:bg-orange-500/20" />

        <div className="relative grid lg:grid-cols-[1fr_0.65fr]">

          {/* LEFT CONTENT */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-9">

            {/* TOP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <motion.span whileHover={{ rotate: 8, scale: 1.08 }} className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <Icon size={19} className="text-orange-400" strokeWidth={1.8} />
                </motion.span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">
                    Service
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold tracking-[0.12em] text-orange-400">
                    01
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-orange-400">
                Core Service
              </span>
            </div>

            {/* TITLE */}
            <h3 className="mt-8 max-w-[600px] text-[30px] font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-[38px] lg:text-[42px]">
              Web Development
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-[600px] text-[13px] leading-6 text-white/55 sm:text-[14px] sm:leading-7">
              {service.description}
            </p>

            {/* SERVICE ITEMS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {service.items.map((item, index) => (
                <motion.span key={item} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.35, delay: 0.1 + index * 0.05 }} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-medium text-white/65 transition-all duration-300 group-hover:border-orange-500/20 group-hover:text-white/80 sm:text-[10px]">
                  {item}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex items-center gap-3">
              <span className="text-[11px] font-bold text-white">
                Explore Web Development
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-orange-500 group-hover:text-white">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[280px] overflow-hidden border-t border-white/10 lg:min-h-[330px] lg:border-l lg:border-t-0">

            {/* IMAGE */}
            <Image src="/services_pic1.png" alt="Shiv Shakti digital services" fill sizes="(max-width: 1024px) 100vw, 420px" className="object-cover opacity-70 transition-transform duration-[1200ms] ease-out group-hover:scale-105" />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/45 to-[#111111]/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

            {/* ORANGE LIGHT */}
            <motion.div animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.08, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/20 blur-[80px]" />

            {/* WEB LABEL */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 left-6 rounded-xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-xl sm:left-8">

              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
                Digital Experience
              </p>

              <p className="mt-1 text-[11px] font-bold text-white">
                Built Around Your Business
              </p>
            </motion.div>

            {/* SMALL TAGS */}
            <div className="absolute right-5 top-5 flex flex-wrap justify-end gap-1.5 sm:right-8 sm:top-8">
              <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
                Web
              </span>

              <span className="rounded-full border border-orange-400/20 bg-orange-500/10 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.15em] text-orange-300 backdrop-blur-md">
                Modern
              </span>
            </div>

            {/* NUMBER */}
            <span className="absolute bottom-6 right-6 text-[9px] font-bold tracking-[0.2em] text-white/25 lg:right-8">
              01
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[1] }) {
  const Icon = service.icon;
  const colors = colorStyles[service.color as keyof typeof colorStyles];

  const isAiService = service.number === "03";

  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link href={service.href} className={`group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-500 hover:-translate-y-1 ${colors.hover} hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-6`}>

        {/* AI IMAGE */}
        {isAiService && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <Image src="/services_pic1.png" alt="AI and automation solutions" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-[0.32] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.45]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/75 to-[#111111]/95" />

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/20 blur-[80px]" />
          </>
        )}

        {/* COLOR GLOW */}
        {!isAiService && (
          <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${colors.glow} opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100`} />
        )}

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col">

          {/* TOP */}
          <div className="flex items-center justify-between">

            <motion.div whileHover={{ rotate: -6, scale: 1.08 }} className={`flex h-11 w-11 items-center justify-center rounded-xl border ${isAiService ? "border-purple-400/30 bg-purple-500/15 text-purple-300" : colors.icon}`}>
              <Icon size={19} strokeWidth={1.8} />
            </motion.div>

            <span className={`text-[9px] font-bold tracking-[0.2em] ${isAiService ? "text-white/45" : "text-[var(--muted)]"}`}>
              {service.number}
            </span>
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="mt-7">

            <h3 className={`text-[24px] font-extrabold leading-tight tracking-[-0.04em] sm:text-[26px] ${isAiService ? "text-white" : "text-[var(--foreground)]"}`}>
              {service.title}
            </h3>

            <p className={`mt-3 max-w-[360px] text-[12px] leading-6 sm:text-[13px] ${isAiService ? "text-white/65" : "text-[var(--muted)]"}`}>
              {service.description}
            </p>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {service.items.map((item) => (
              <span key={item} className={`rounded-full border px-2.5 py-1.5 text-[9px] font-semibold transition-all duration-300 ${isAiService ? "border-white/15 bg-white/10 text-white/75 group-hover:border-purple-400/30 group-hover:text-white" : "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] group-hover:border-[var(--accent)]/30 group-hover:text-[var(--foreground)]"}`}>
                {item}
              </span>
            ))}
          </div>

          {/* BOTTOM */}
          <div className={`relative mt-auto flex items-center justify-between border-t pt-5 ${isAiService ? "border-white/10" : "border-[var(--border)]"}`}>

            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${isAiService ? "bg-purple-400" : colors.dot}`} />

              <span className={`text-[9px] font-bold uppercase tracking-[0.16em] ${isAiService ? "text-white/45" : "text-[var(--muted)]"}`}>
                Explore
              </span>
            </div>

            <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isAiService ? "border-white/15 bg-white/10 text-white group-hover:border-purple-400 group-hover:bg-purple-500" : "border-[var(--border)] bg-[var(--background)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white"}`}>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[350px] w-[350px] rounded-full bg-[var(--accent)] opacity-[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px]">

        {/* HEADER */}
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerParent} className="grid gap-6 border-b border-[var(--border)] pb-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">

          <div>

            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[10px]">
                What We Do
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="max-w-[650px] text-[34px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[var(--foreground)] sm:text-[40px] lg:text-[46px]">
              Digital solutions
              <span className="block text-[var(--muted)]">
                built for your business.
              </span>
            </motion.h2>
          </div>

          <motion.p variants={fadeUp} className="max-w-[390px] text-[13px] leading-6 text-[var(--muted)] lg:pb-1">
            From websites to AI and automation, we build digital solutions that help your business work better and grow online.
          </motion.p>
        </motion.div>

        {/* WEB DEVELOPMENT */}
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerParent}>
          <FeaturedService service={services[0]} />
        </motion.div>

        {/* OTHER SERVICES */}
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerParent} className="mt-4 grid gap-4 md:grid-cols-3">
          {services.slice(1).map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-[11px] font-bold text-[var(--foreground)]">
              Need something different?
            </p>

            <p className="mt-1 text-[10px] text-[var(--muted)]">
              Tell us what you need. We can build it for you.
            </p>
          </div>

          <Link href="/services/custom-solutions" className="group flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[10px] font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
            Discuss a Custom Project
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}