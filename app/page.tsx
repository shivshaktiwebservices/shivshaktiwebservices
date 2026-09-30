
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
  title: "Web Development, Digital Growth & AI Automation in Haridwar",
  description: "Get a professional business website, custom web application, digital growth strategy, or AI automation from ShivShakti Web Services in Haridwar, India.",
  alternates: { canonical: "/" },
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
