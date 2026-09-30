import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/#work" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
];

const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Digital Growth", href: "/services/digital-growth" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Custom Solutions", href: "/services/custom-solutions" },
];

export default function Footer() {
    return (
        <footer className="bg-[#050505] px-5 pb-6 pt-16 text-white transition-colors duration-500 [data-theme='dark']&:bg-white [data-theme='dark']&:text-black sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1380px]">

                {/* MAIN FOOTER */}
                <div className="grid gap-12 border-b border-white/15 pb-12 [data-theme='dark']&:border-black/10 lg:grid-cols-[1.6fr_1fr_1.2fr_1fr]">

                    {/* BRAND */}
                    <div className="max-w-md">
                        <Link href="/" className="group inline-flex items-center gap-4">
                            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 transition-transform duration-300 group-hover:scale-105 [data-theme='dark']&:border-black/10">
                                <Image src="/logo.png" alt="Shiv Shakti Web Services logo" fill sizes="56px" className="object-contain p-1" />
                            </div>

                            <div>
                                <div className="text-xl font-black tracking-tight text-white [data-theme='dark']&:text-black sm:text-2xl">
                                    Shiv Shakti
                                </div>

                                <div className="mt-1 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
                                    Web Services
                                </div>
                            </div>
                        </Link>

                        <p className="mt-7 max-w-sm text-sm leading-7 text-white/55 [data-theme='dark']&:text-black/55">
                            Professional websites, digital solutions, AI integration and
                            practical digital services built around modern businesses.
                        </p>

                        <Link href="/#contact" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] [data-theme='dark']&:bg-black [data-theme='dark']&:text-white">
                            Start a Project
                            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            Quick Links
                        </p>

                        <div className="mt-6 flex flex-col gap-3.5">
                            {quickLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="group flex w-fit items-center gap-1 text-sm text-white/60 transition-colors duration-300 hover:text-white [data-theme='dark']&:text-black/60 [data-theme='dark']&:hover:text-black">
                                    {link.name}
                                    <ArrowUpRight size={12} className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            What We Do
                        </p>

                        <div className="mt-6 flex flex-col gap-3.5">
                            {services.map((service) => (
                                <Link key={service.name} href={service.href} className="group flex w-fit items-center gap-1 text-sm text-white/60 transition-colors duration-300 hover:text-white [data-theme='dark']&:text-black/60 [data-theme='dark']&:hover:text-black">
                                    {service.name}
                                    <ArrowUpRight size={12} className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            Connect With Us
                        </p>

                        <div className="mt-6 space-y-5">

                            <a href="mailto:shivshaktiwebservices@gmail.com" className="group flex items-start gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white [data-theme='dark']&:text-black/60 [data-theme='dark']&:hover:text-black">
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--accent)] [data-theme='dark']&:border-black/10">
                                    <Mail size={14} />
                                </span>

                                <span className="break-all leading-8">
                                    shivshaktiwebservices@gmail.com
                                </span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-white/60 [data-theme='dark']&:text-black/60">
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--accent)] [data-theme='dark']&:border-black/10">
                                    <MapPin size={14} />
                                </span>

                                <span className="leading-6">
                                    Haridwar,<br />
                                    Uttarakhand, India
                                </span>
                            </div>

                            <div className="space-y-3">
                                <a href="tel:+919105642658" className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white [data-theme='dark']&:text-black/60 [data-theme='dark']&:hover:text-black">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--accent)] [data-theme='dark']&:border-black/10">
                                        <Phone size={14} />
                                    </span>

                                    +91 9105642658
                                </a>

                                <a href="tel:+917302724292" className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white [data-theme='dark']&:text-black/60 [data-theme='dark']&:hover:text-black">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--accent)] [data-theme='dark']&:border-black/10">
                                        <Phone size={14} />
                                    </span>

                                    +91 7302724292
                                </a>
                            </div>

                            <a href="https://wa.me/917302724292" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white [data-theme='dark']&:text-black/60 [data-theme='dark']&:hover:text-black">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--accent)] [data-theme='dark']&:border-black/10">
                                    <MessageCircle size={14} />
                                </span>

                                WhatsApp
                                <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-white/40 [data-theme='dark']&:text-black/40">
                        © {new Date().getFullYear()} ShivShakti Web Services. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 [data-theme='dark']&:text-black/35">
                        <span>Web Development</span>
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        <span>Digital Growth</span>
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        <span>AI & Automation</span>
                    </div>

                    <Link href="/#home" className="group flex items-center gap-2 text-xs font-semibold text-white/50 transition-colors hover:text-white [data-theme='dark']&:text-black/50 [data-theme='dark']&:hover:text-black">
                        Back to top
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)] [data-theme='dark']&:border-black/10">
                            ↑
                        </span>
                    </Link>

                </div>
            </div>
        </footer>
    );
}