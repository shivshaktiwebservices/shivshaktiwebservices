"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, Database, LayoutDashboard, Settings2, Workflow, Wrench } from "lucide-react";

const solutions = [
    {
        title: "Custom Platforms",
        text: "Purpose-built digital platforms designed around the specific needs of your business.",
        icon: Code2,
    },
    {
        title: "Business Tools",
        text: "Custom tools that simplify internal work and help your team manage everyday tasks.",
        icon: Wrench,
    },
    {
        title: "Dashboards",
        text: "Clear dashboards that bring important business information and operations into one place.",
        icon: LayoutDashboard,
    },
    {
        title: "Portals",
        text: "Secure and intuitive portals for customers, employees, partners or other users.",
        icon: Database,
    },
    {
        title: "Custom Integrations",
        text: "Connect your existing tools and services so information can move smoothly between them.",
        icon: Settings2,
    },
    {
        title: "Workflows",
        text: "Digital workflows that reduce unnecessary steps and make business processes easier to manage.",
        icon: Workflow,
    },
];

const benefits = [
    "Designed around your business",
    "Flexible and scalable",
    "Connects with existing tools",
    "Simplifies internal processes",
    "Built for your actual users",
    "Can evolve with your business",
];

const steps = [
    {
        number: "01",
        title: "Understand",
        text: "We learn how your business works and identify what the solution needs to accomplish.",
    },
    {
        number: "02",
        title: "Design",
        text: "We plan the user experience, features and structure around your requirements.",
    },
    {
        number: "03",
        title: "Build",
        text: "We develop the platform, tool or workflow using suitable modern technology.",
    },
    {
        number: "04",
        title: "Improve",
        text: "We refine the solution as your business requirements evolve.",
    },
];

export default function CustomSolutionsPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

            {/* HERO */}
            <section className="px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
                <div className="mx-auto max-w-[1180px]">

                    <Link href="/services" className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[11px] font-semibold text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]">
                        <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
                        Back to Services
                    </Link>

                    <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* LEFT */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                                    Custom Solutions
                                </span>
                            </div>

                            <h1 className="mt-7 text-[42px] font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                                Technology built
                                <span className="block text-[var(--accent)]">
                                    around your business.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                                When an off-the-shelf solution isn't enough, we build custom
                                digital tools, platforms and workflows around the way your
                                business actually works.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link href="/#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-xs font-bold text-[var(--background)] transition hover:-translate-y-1">
                                    Discuss Your Idea
                                    <ArrowUpRight size={15} />
                                </Link>

                                <Link href="/#work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-xs font-bold transition hover:-translate-y-1 hover:border-[var(--foreground)]">
                                    See Our Work
                                    <ArrowRight size={15} />
                                </Link>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4 border-t border-[var(--border)] pt-6">
                                {["Custom Built", "Business Focused", "Scalable"].map((item) => (
                                    <span key={item} className="flex items-center gap-2 text-[10px] font-semibold text-[var(--muted)]">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                                            <Check size={10} className="text-[var(--accent)]" />
                                        </span>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="relative">
                            <div className="absolute -inset-6 rounded-[35px] bg-[var(--accent)] opacity-[.07] blur-3xl" />

                            <div className="relative rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">

                                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[var(--muted)]">
                                            Custom System
                                        </p>
                                        <h2 className="mt-1 text-sm font-bold">
                                            Business Dashboard
                                        </h2>
                                    </div>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                                        <Settings2 size={16} />
                                    </div>
                                </div>

                                <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--background)] p-4">

           

                                    <div className="mt-5 grid grid-cols-3 gap-2">
                                        {[
                                            ["Projects", "24"],
                                            ["Customers", "186"],
                                            ["Tasks", "42"],
                                        ].map(([title, value]) => (
                                            <div key={title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
                                                <p className="text-[8px] text-[var(--muted)]">
                                                    {title}
                                                </p>
                                                <p className="mt-1 text-lg font-black">
                                                    {value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[9px] font-bold">
                                                Business Workflow
                                            </p>

                                            <span className="text-[8px] text-[var(--accent)]">
                                                Active
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                                            <div className="h-px flex-1 bg-[var(--border)]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                                            <div className="h-px flex-1 bg-[var(--border)]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {[
                                        { icon: LayoutDashboard, title: "Dashboard" },
                                        { icon: Database, title: "Data" },
                                        { icon: Workflow, title: "Workflow" },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3">
                                                <Icon size={15} className="text-[var(--accent)]" />
                                                <p className="mt-3 text-[9px] font-bold">
                                                    {item.title}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>

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
                            Built around your needs.
                            <span className="block text-[var(--muted)]">
                                Not someone else's template.
                            </span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                            We create digital systems around your processes, users and
                            business requirements.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {solutions.map((solution, index) => {
                            const Icon = solution.icon;

                            return (
                                <div key={solution.title} className="group relative">

                                    <div className="absolute -inset-[2px] rounded-[25px] bg-gradient-to-br from-orange-500 to-orange-300 opacity-20 blur-[5px] transition group-hover:opacity-60" />

                                    <div className="relative rounded-[24px] border border-[var(--border)] bg-[var(--background)] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)]/60">

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
                            Why Custom
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">
                            Your business is different.
                            <span className="block text-[var(--accent)]">
                                Your tools can be too.
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                            Instead of forcing your process into a generic product, a
                            custom solution can be designed around how your team and
                            customers actually work.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {benefits.map((item) => (
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
                        Understand the problem.
                        <span className="block text-[var(--muted)]">
                            Build the right solution.
                        </span>
                    </h2>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="group rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]/50"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[10px] font-bold text-[var(--accent)]">
                                        {step.number}
                                    </span>

                                    <ArrowUpRight
                                        size={15}
                                        className="text-[var(--muted)] transition group-hover:text-[var(--accent)]"
                                    />
                                </div>

                                <h3 className="mt-7 text-lg font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                                    {step.text}
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
                            Have A Requirement?
                        </p>

                        <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-.045em] sm:text-5xl">
                            Tell us what you need to build.
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 opacity-60">
                            If you have a business process, platform or tool that needs
                            a custom digital solution, let's discuss it.
                        </p>

                        <Link
                            href="/#contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-6 py-3.5 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-1"
                        >
                            Discuss Your Requirement
                            <ArrowUpRight size={15} />
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
}