"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    LayoutDashboard,
    ShoppingBag,
    Smartphone,
    Sparkles,
    Globe2,
} from "lucide-react";

const solutions = [
    {
        number: "01",
        icon: Globe2,
        title: "Business Websites",
        description:
            "Professional websites that establish credibility and help customers understand your business.",
        gradient: "linear-gradient(135deg, #ff4f81 0%, #ff8a3d 100%)",
    },
    {
        number: "02",
        icon: LayoutDashboard,
        title: "Corporate Websites",
        description:
            "Modern digital experiences for companies, organizations and established businesses.",
        gradient: "linear-gradient(135deg, #24a8ff 0%, #19d3c5 100%)",
    },
    {
        number: "03",
        icon: ShoppingBag,
        title: "E-Commerce",
        description:
            "Online stores designed to showcase products and provide a smooth purchasing experience.",
        gradient: "linear-gradient(135deg, #22c55e 0%, #d4df25 100%)",
    },
    {
        number: "04",
        icon: Smartphone,
        title: "Landing Pages",
        description:
            "Focused pages designed for campaigns, products, services and lead generation.",
        gradient: "linear-gradient(135deg, #b14cff 0%, #4d7cff 100%)",
    },
    {
        number: "05",
        icon: Code2,
        title: "Web Applications",
        description:
            "Interactive browser-based platforms, dashboards, portals and custom business systems.",
        gradient: "linear-gradient(135deg, #ff4545 0%, #ff9a3d 100%)",
    },
    {
        number: "06",
        icon: Sparkles,
        title: "Website Redesign",
        description:
            "Transform an outdated website into a modern, responsive and professional experience.",
        gradient: "linear-gradient(135deg, #ffc400 0%, #ff7a18 100%)",
    },
];

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We understand your business, audience, goals and what the website needs to achieve.",
    },
    {
        number: "02",
        title: "Plan",
        description:
            "We define the structure, pages, content flow and functionality before development begins.",
    },
    {
        number: "03",
        title: "Design",
        description:
            "We create a clean visual direction that represents your brand and makes information easy to understand.",
    },
    {
        number: "04",
        title: "Build",
        description:
            "We develop the website using modern technologies with responsiveness and performance in mind.",
    },
    {
        number: "05",
        title: "Test",
        description:
            "We test layouts, interactions, forms and responsiveness across different screen sizes.",
    },
    {
        number: "06",
        title: "Launch",
        description:
            "Your website goes live and we remain available for improvements, updates and future requirements.",
    },
];

const benefits = [
    "Responsive across mobile, tablet and desktop",
    "Modern and professional visual design",
    "Fast and smooth user experience",
    "SEO-friendly structure",
    "Clear calls-to-action",
    "Built around your actual business goals",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

            {/* HERO */}
            <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">

                {/* Background glow */}
                <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[360px] w-[360px] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]" />

                <div className="pointer-events-none absolute right-[-180px] top-[220px] h-[400px] w-[400px] rounded-full bg-orange-400 opacity-[0.05] blur-[140px]" />

                <div className="relative mx-auto max-w-[1180px]">

                    {/* BACK BUTTON */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[11px] font-semibold text-[var(--muted)] transition-all duration-300 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                        >
                            <ArrowLeft
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            />
                            Back to Services
                        </Link>
                    </motion.div>

                    <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

                        {/* HERO CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1] as const,
                            }}
                        >

                            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(232,111,45,0.7)]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                                    Web Development
                                </span>
                            </div>

                            <h1 className="mt-7 max-w-[720px] text-[42px] font-black leading-[0.98] tracking-[-0.055em] sm:text-[56px] md:text-[64px] lg:text-[70px]">
                                Websites built
                                <span className="block text-[var(--accent)]">
                                    around your business.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] sm:leading-8">
                                From professional business websites to custom web
                                applications, we create digital experiences that
                                look credible, work smoothly and help your business
                                move forward.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/#contact"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-[12px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
                                >
                                    Start Your Website
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>

                                <Link
                                    href="/#work"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-[12px] font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--foreground)]"
                                >
                                    View Our Work
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>

                            </div>

                            {/* TRUST POINTS */}
                            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-[var(--border)] pt-6">

                                {[
                                    "Custom Built",
                                    "Responsive",
                                    "Business Focused",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-[10px] font-semibold text-[var(--muted)] sm:text-[11px]"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
                                            <Check
                                                size={10}
                                                strokeWidth={2.5}
                                                className="text-[var(--accent)]"
                                            />
                                        </span>

                                        {item}
                                    </div>
                                ))}

                            </div>

                        </motion.div>

                        {/* HERO IMAGE */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 35,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1] as const,
                            }}
                            className="relative"
                        >

                            {/* Image glow */}
                            <div className="absolute -inset-4 rounded-[34px] bg-[var(--accent)] opacity-[0.08] blur-[35px]" />

                            {/* Image border */}
                            <div
                                className="relative rounded-[28px] p-[1.5px]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(232,111,45,0.8), rgba(255,255,255,0.18), rgba(232,111,45,0.35))",
                                }}
                            >
                                <div className="relative overflow-hidden rounded-[27px] bg-[var(--surface)]">

                                    <Image
                                        src="/web_pic1.png"
                                        alt="Shiv Shakti Web Services web development"
                                        width={1672}
                                        height={941}
                                        priority
                                        className="h-auto w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.025]"
                                    />

                                    {/* Image overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>

            {/* WHAT WE BUILD */}
            <section className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

                <div className="mx-auto max-w-[1180px]">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[700px]"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                            What We Build
                        </p>

                        <h2 className="mt-4 text-[36px] font-black leading-[1.05] tracking-[-0.045em] sm:text-[48px]">
                            From simple websites
                            <span className="block text-[var(--muted)]">
                                to custom platforms.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]">
                            Whatever stage your business is at, we create websites
                            and web experiences around your actual requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.08,
                        }}
                        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >

                        {solutions.map((solution) => {
                            const Icon = solution.icon;

                            return (
                                <motion.div
                                    key={solution.title}
                                    variants={itemVariants}
                                    className="group relative"
                                >

                                    {/* Glow */}
                                    <div
                                        className="absolute -inset-[2px] rounded-[25px] opacity-25 blur-[5px] transition-all duration-500 group-hover:opacity-75 group-hover:blur-[8px]"
                                        style={{
                                            background: solution.gradient,
                                        }}
                                    />

                                    {/* Gradient border */}
                                    <div
                                        className="relative rounded-[24px] p-[1px]"
                                        style={{
                                            background: solution.gradient,
                                        }}
                                    >

                                        <div className="relative min-h-[260px] overflow-hidden rounded-[23px] bg-[var(--background)] p-6 transition-transform duration-500 group-hover:-translate-y-1 sm:p-7">

                                            <div className="flex items-start justify-between">

                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 group-hover:scale-110">
                                                    <Icon
                                                        size={19}
                                                        strokeWidth={1.8}
                                                        className="text-[var(--accent)]"
                                                    />
                                                </div>

                                                <span className="text-[10px] font-bold tracking-[0.16em] text-[var(--muted)]">
                                                    {solution.number}
                                                </span>

                                            </div>

                                            <h3 className="mt-12 text-[20px] font-bold tracking-[-0.025em]">
                                                {solution.title}
                                            </h3>

                                            <p className="mt-3 text-[13px] leading-6 text-[var(--muted)]">
                                                {solution.description}
                                            </p>

                                            <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                                                <ArrowUpRight size={13} />
                                            </div>

                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>
            </section>

            {/* WHY A GOOD WEBSITE */}
            <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

                <div className="mx-auto max-w-[1180px]">

                    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                                More Than A Website
                            </p>

                            <h2 className="mt-4 text-[36px] font-black leading-[1.05] tracking-[-0.045em] sm:text-[48px]">
                                Your website is often
                                <span className="block text-[var(--accent)]">
                                    your first impression.
                                </span>
                            </h2>

                            <p className="mt-6 text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]">
                                A website should do more than simply exist online.
                                It should explain what you do, build trust and make
                                it easy for the right people to take action.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid gap-3 sm:grid-cols-2"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    variants={itemVariants}
                                    className="group flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                                        <Check size={12} strokeWidth={2.5} />
                                    </span>

                                    <span className="text-[12px] font-semibold leading-5 text-[var(--foreground)]">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                </div>
            </section>

            {/* PROCESS */}
            <section className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

                <div className="mx-auto max-w-[1180px]">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                            Our Approach
                        </p>

                        <h2 className="mt-4 max-w-[800px] text-[36px] font-black leading-[1.05] tracking-[-0.045em] sm:text-[48px]">
                            We don't start with code.
                            <span className="block text-[var(--muted)]">
                                We start by understanding.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="relative mt-12">

                        {/* Desktop timeline */}
                        <div className="pointer-events-none absolute left-[8.33%] right-[8.33%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent lg:block" />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        >

                            {process.map((step) => (
                                <motion.div
                                    key={step.number}
                                    variants={itemVariants}
                                    className="group relative rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/50 sm:p-7"
                                >

                                    <div className="flex items-center justify-between">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[11px] font-bold text-[var(--accent)] transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_18px_rgba(232,111,45,0.2)]">
                                            {step.number}
                                        </div>

                                        <ArrowUpRight
                                            size={16}
                                            className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                                        />

                                    </div>

                                    <h3 className="mt-8 text-[18px] font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-[12px] leading-6 text-[var(--muted)]">
                                        {step.description}
                                    </p>

                                </motion.div>
                            ))}

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* TECHNOLOGY STRIP */}
            <section className="px-4 py-12 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-[1180px]">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)]"
                    >

                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-7 sm:gap-x-12">

                            {[
                                "Responsive Design",
                                "Modern Technology",
                                "Performance",
                                "SEO Friendly",
                                "Scalable",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)] sm:text-[11px]">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* CTA */}
            <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px] bg-[var(--foreground)] px-6 py-12 text-[var(--background)] sm:px-10 sm:py-14 lg:px-14 lg:py-16"
                >

                    {/* CTA glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-20 blur-[90px]" />

                    <div className="relative">

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                            Start Something New
                        </p>

                        <h2 className="mt-4 max-w-[720px] text-[36px] font-black leading-[1.05] tracking-[-0.045em] sm:text-[48px]">
                            Ready to build your website?
                        </h2>

                        <p className="mt-5 max-w-[600px] text-[13px] leading-7 opacity-60 sm:text-[14px]">
                            Tell us about your business, your goals and what you
                            want to build. We'll take it from there.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <Link
                                href="/#contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--background)] px-6 py-3.5 text-[12px] font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1"
                            >
                                Start a Project

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                            <Link
                                href="/services"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--background)]/20 px-6 py-3.5 text-[12px] font-bold transition-all duration-300 hover:border-[var(--background)]/50"
                            >
                                Explore Other Services

                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                        </div>

                    </div>

                </motion.div>

            </section>

        </main>
    );
}