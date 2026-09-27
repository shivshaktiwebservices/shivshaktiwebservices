"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Work", href: "/#work", id: "work" },
  { name: "Why Us", href: "/#why-us", id: "why-us" },
  { name: "Process", href: "/#process", id: "process" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const isHomePage = pathname === "/";
  const isServicesPage = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      if (isServicesPage) {
        setActiveSection("services");
      } else {
        setActiveSection("");
      }

      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHomePage, isServicesPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    setLogoClicked(true);
    setMenuOpen(false);
    setActiveSection("home");

    window.setTimeout(() => {
      setLogoClicked(false);
    }, 450);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-7">
      <div className={`pointer-events-none absolute left-3 right-3 top-3 mx-auto h-[calc(100%-12px)] max-w-[1380px] rounded-[30px] blur-[7px] transition-all duration-500 sm:left-5 sm:right-5 sm:top-4 ${dark ? "bg-white/30 shadow-[0_0_28px_rgba(255,255,255,0.28)]" : "bg-black/25 shadow-[0_0_28px_rgba(0,0,0,0.25)]"} ${scrolled ? "opacity-90" : "opacity-60"}`} />

      <nav className={`relative mx-auto flex max-w-[1380px] items-center justify-between border bg-[var(--nav-bg)] backdrop-blur-xl transition-all duration-500 ${dark ? "border-white/75 shadow-[0_0_18px_rgba(255,255,255,0.20),inset_0_0_12px_rgba(255,255,255,0.04)]" : "border-black/75 shadow-[0_0_18px_rgba(0,0,0,0.18),inset_0_0_12px_rgba(0,0,0,0.03)]"} ${scrolled ? "rounded-[24px] px-4 py-2.5 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-6" : "rounded-[28px] px-4 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:px-6"}`}>
        
        {/* LOGO */}
        <motion.div
          animate={logoClicked ? { scale: 1.12 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="origin-left"
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Shiv Shakti Web Services Home"
          >
            <motion.div
              animate={logoClicked ? { scale: 1.16 } : { scale: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
              className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--background)] shadow-sm transition-all duration-300 sm:h-12 sm:w-12 ${logoClicked ? dark ? "shadow-[0_0_24px_rgba(255,255,255,0.45)]" : "shadow-[0_0_24px_rgba(0,0,0,0.35)]" : ""}`}
            >
              <Image
                src="/logo.png"
                alt="Shiv Shakti Web Services logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <div className="font-serif text-[21px] font-black leading-[0.9] tracking-[-0.045em] text-[var(--foreground)] sm:text-[24px] lg:text-[26px]">
                Shiv Shakti
              </div>

              <div className="mt-1.5 flex items-center overflow-visible">
                <motion.span
                  animate={{ scale: [1, 1.08, 1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-2 origin-left text-[9px] font-black uppercase tracking-[0.28em] text-[var(--accent)] sm:text-[10px]"
                >
                  Web Services
                </motion.span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden xl:flex">
          <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className="group relative whitespace-nowrap rounded-full px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 2xl:px-4 2xl:text-[13px]"
                >
                  <span className={`absolute inset-0 rounded-full bg-[var(--background)] shadow-sm transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`} />

                  <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-[var(--foreground)]" : "text-[var(--muted)] group-hover:text-[var(--foreground)]"}`}>
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-dot"
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          
          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-300 hover:scale-105 hover:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:h-11 sm:w-11"
          >
            <motion.span
              key={dark ? "sun" : "moon"}
              initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              {dark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
            </motion.span>
          </button>

          {/* LET'S TALK */}
          <Link
            href="/#contact"
            onClick={() => handleNavClick("contact")}
            className="hidden items-center gap-1.5 rounded-full bg-[var(--foreground)] px-4 py-2.5 text-xs font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] sm:flex"
          >
            Let's Talk
            <ArrowUpRight size={15} strokeWidth={2} />
          </Link>

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface)] xl:hidden sm:h-11 sm:w-11"
          >
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ rotate: -20, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={19} strokeWidth={2} /> : <Menu size={19} strokeWidth={2} />}
            </motion.span>
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={`mx-auto mt-2 max-w-[1380px] overflow-hidden rounded-[24px] border bg-[var(--nav-bg)] p-3 backdrop-blur-xl xl:hidden ${dark ? "border-white/70 shadow-[0_0_22px_rgba(255,255,255,0.18),0_20px_50px_rgba(0,0,0,0.12)]" : "border-black/70 shadow-[0_0_22px_rgba(0,0,0,0.16),0_20px_50px_rgba(0,0,0,0.12)]"}`}
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${isActive ? "bg-[var(--surface)] text-[var(--foreground)]" : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"}`}
                >
                  <span>{item.name}</span>

                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 border-t border-[var(--border)] pt-3">
            <Link
              href="/#contact"
              onClick={() => handleNavClick("contact")}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--foreground)] px-5 py-3.5 text-sm font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}