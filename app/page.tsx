
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import OurWork from "./components/home/OurWork";
import WhyUs from "./components/home/WhyUs";
import HowWeWork from "./components/home/HowWeWork";
import HappyClients from "./components/home/HappyClients";
import Founder from "./components/home/Founder";
import Contact from "./components/home/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShivShakti Web Services - Custom Web Development & Digital Growth",
  description: "We help businesses grow online with professional websites, custom platforms, digital growth strategies, and AI automation. Based in Haridwar, India.",
  keywords: ["web development company", "custom websites", "digital growth", "AI automation", "software development Haridwar", "SEO services", "e-commerce websites"],
};


export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">


      <main>
        <Hero />
        <Services />
        <OurWork />
        <WhyUs />
        <HowWeWork />
        <HappyClients />
        <Founder />
        <Contact />
      </main>


    </div>
  );
}