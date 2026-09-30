import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services",
  description: "Explore web development, digital growth, AI automation, and custom digital solutions from ShivShakti Web Services in Haridwar.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
