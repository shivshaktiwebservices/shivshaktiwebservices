"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const heroImages = [
  {
    src: "/hero_pic1.png",
    alt: "Shiv Shakti Web Services digital experience",
  },
  {
    src: "/hero_pic2.png",
    alt: "Shiv Shakti Web Services web development",
  },
  {
    src: "/hero_pic3.png",
    alt: "Shiv Shakti Web Services AI and automation",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((previous) => (previous + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setActiveImage((previous) => (previous + 1) % heroImages.length);
  };

  return (
    <section id="home" className={`${plusJakarta.variable} relative min-h-screen overflow-hidden bg-[var(--background)] px-4 pb-12 pt-36 font-[family-name:var(--font-plus-jakarta)] sm:px-6 sm:pt-40 md:pt-44 lg:px-8 lg:pb-16 lg:pt-48`}>

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[5%] right-[8%] h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 opacity-[0.035]" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid items-center gap-10 md:min-h-[calc(100vh-150px)] md:grid-cols-[1.08fr_0.92fr] md:gap-10 xl:gap-16">

          {/* LEFT CONTENT */}
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10">

            {/* BRAND LABEL */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--muted)] shadow-sm sm:mb-7 sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              Shiv Shakti Web Services
            </div>

            {/* HEADING */}
            <h1 className="max-w-[700px] text-[36px] font-extrabold leading-[1.05] tracking-[-0.055em] text-[var(--foreground)] sm:text-[42px] md:text-[46px] lg:text-[58px] xl:text-[68px]">
              We build digital
              <span className="block">experiences that</span>
              <span className="relative inline-block text-[var(--accent)]">
                grow businesses.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[560px] text-[14px] font-medium leading-6 tracking-[-0.01em] text-[var(--muted)] sm:mt-7 sm:text-[15px] sm:leading-7">
              Websites, web applications, AI integrations and digital solutions designed around your business.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Link href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Start a Project
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--foreground)]">
                Explore Our Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-5 sm:mt-9 sm:gap-x-7 sm:pt-6">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--muted)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--surface)]">
                  <Check size={10} />
                </span>
                Custom Built
              </div>

              <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--muted)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--surface)]">
                  <Check size={10} />
                </span>
                Modern Technology
              </div>

              <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--muted)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--surface)]">
                  <Check size={10} />
                </span>
                Business Focused
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SLIDESHOW */}
          <motion.div initial={{ opacity: 0, x: 25, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }} className="relative mx-auto w-full max-w-[450px]">

            {/* IMAGE GLOW */}
            <div className="pointer-events-none absolute -inset-10 opacity-[0.045]" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />

            {/* IMAGE CONTAINER */}
            <button type="button" onClick={nextImage} aria-label="Show next image" className="group relative block w-full cursor-pointer overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[0_25px_65px_rgba(0,0,0,0.13)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:rounded-[30px]">

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] sm:rounded-[24px]">

                <AnimatePresence mode="wait">
                  <motion.div key={activeImage} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 0.7, ease: "easeInOut" }} className="absolute inset-0">
                    <Image src={heroImages[activeImage].src} alt={heroImages[activeImage].alt} fill priority={true} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 450px" className="object-cover transition-transform duration-700 group-hover:scale-[1.015]" />
                  </motion.div>
                </AnimatePresence>

                {/* DARK EDGE */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* CLICK INDICATOR */}
                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white opacity-80 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
                  <ArrowRight size={15} />
                </div>
              </div>
            </button>

            {/* SLIDESHOW INDICATORS */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {heroImages.map((_, index) => {
                const isActive = activeImage === index;

                return (
                  <button key={index} type="button" onClick={() => setActiveImage(index)} aria-label={`Show image ${index + 1}`} className={`relative h-1.5 overflow-hidden rounded-full bg-[var(--border)] transition-all duration-300 ${isActive ? "w-12" : "w-6"}`}>
                    {isActive && (
                      <motion.span initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.5, ease: "linear" }} className="absolute inset-y-0 left-0 rounded-full bg-[var(--accent)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* IMAGE NUMBER */}
            <div className="mt-2 text-center text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
              0{activeImage + 1} / 03
            </div>
          </motion.div>
        </div>

        {/* SERVICE STRIP */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="relative mt-8 border-t border-[var(--border)] pt-5 lg:mt-2">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--muted)] sm:justify-between sm:text-[10px] sm:tracking-[0.18em]">
            <span>Web Development</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--border)] sm:block" />
            <span>Digital Growth</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--border)] sm:block" />
            <span>AI & Automation</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--border)] sm:block" />
            <span>Custom Solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}