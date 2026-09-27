"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Professional, responsive and customized websites designed around your business, brand and customers.",
        features: [
            "Business Websites",
            "Corporate Websites",
            "E-Commerce",
            "Landing Pages",
            "Web Applications",
            "Website Redesign",
        ],
        href: "/services/web-development",
    },
    {
        number: "02",
        title: "Digital Growth",
        description:
            "Build a stronger online presence and create better opportunities to reach and engage your customers.",
        features: [
            "Online Presence",
            "Digital Marketing",
            "SEO",
            "Google Business",
            "Lead Generation",
            "Social Media",
        ],
        href: "/services/digital-growth",
    },
    {
        number: "03",
        title: "AI & Automation",
        description:
            "Integrate AI and automation into your business to improve efficiency, customer experience and workflows.",
        features: [
            "AI Integration",
            "AI Chatbots",
            "WhatsApp Automation",
            "Business Automation",
            "API Integrations",
            "AI Features",
        ],
        href: "/services/ai-automation",
    },
    {
        number: "04",
        title: "Custom Solutions",
        description:
            "Have a unique requirement? We understand your business and build a digital solution specifically around your needs.",
        features: [
            "Custom Platforms",
            "Business Tools",
            "Dashboards",
            "Portals",
            "Internal Systems",
            "Custom Integrations",
        ],
        href: "/services/custom-solutions",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
            {/* HERO */}
            <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24">
                <div className="mx-auto max-w-[1240px]">
                    {/* BACK BUTTON */}
                    <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Link href="/#home" className="group mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-x-1 hover:border-[var(--accent)]">
                            <ArrowLeft size={15} />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* IMAGE HERO */}
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="group relative min-h-[570px] overflow-hidden rounded-[30px] border border-[var(--border)] sm:min-h-[620px] lg:min-h-[680px]">
                        <Image src="/services_pic2.png" alt="Shiv Shakti Web Services digital solutions" fill priority sizes="(max-width: 768px) 100vw, 1240px" className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]" />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/15" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                        {/* ORANGE GLOW */}
                        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />

                        {/* HERO CONTENT */}
                        <div className="relative z-10 flex min-h-[570px] flex-col justify-between p-7 sm:min-h-[620px] sm:p-10 lg:min-h-[680px] lg:max-w-[720px] lg:p-14">
                            <div>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                                    Our Services
                                </div>

                                <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                                    Digital solutions
                                    <span className="block">built around</span>
                                    <span className="block text-orange-400">your business.</span>
                                </h1>

                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
                                    From professional websites to AI-powered solutions,
                                    we help businesses build, improve and grow their
                                    digital presence.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,255,255,0.18)]">
                                        Discuss Your Project
                                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>

                                    <Link href="/#work" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                                        See Our Work
                                    </Link>
                                </div>
                            </div>

                            {/* TRUST POINTS */}
                            <div className="grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
                                <div>
                                    <p className="text-sm font-semibold text-white">Business Focused</p>
                                    <p className="mt-1 text-xs text-white/50">Solutions around your goals</p>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-white">Modern Technology</p>
                                    <p className="mt-1 text-xs text-white/50">Built for today's digital world</p>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-white">Long-Term Support</p>
                                    <p className="mt-1 text-xs text-white/50">Here beyond the launch</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES INTRO */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-[1240px]">
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
                        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            What We Offer
                        </p>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                            Four key areas to support your growth.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                            We combine design, technology and practical digital
                            solutions to help businesses establish and grow online.
                        </p>
                    </motion.div>

                    {/* SERVICE CARDS */}
                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {services.map((service, index) => (
                            <motion.div key={service.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.08 }} className="group relative">
                                {/* GLOW */}
                                <div className="absolute -inset-[1px] rounded-[27px] bg-gradient-to-br from-orange-500/50 via-transparent to-orange-300/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" />

                                {/* CARD */}
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--accent)] sm:p-9">
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold tracking-[0.2em] text-[var(--accent)]">
                                            {service.number}
                                        </span>

                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>

                                    <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
                                        {service.description}
                                    </p>

                                    <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                                                    <Check size={11} strokeWidth={3} />
                                                </span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-9 border-t border-[var(--border)] pt-5">
                                        <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                                            Explore Service
                                            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
                <div className="mx-auto max-w-[1240px]">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[28px] bg-[#111111] p-8 text-white sm:p-12 lg:p-16">
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-[90px]" />
                        <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-orange-400/10 blur-[90px]" />

                        <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                            <div className="max-w-2xl">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400">
                                    Start Something Better
                                </p>

                                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                                    Not sure what your business needs?
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                                    Tell us about your business and we'll help identify
                                    the right digital solution for you.
                                </p>
                            </div>

                            <Link href="/#contact" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.12)]">
                                Let's Talk
                                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}