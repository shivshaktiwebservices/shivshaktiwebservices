import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services in Haridwar",
  description: "Professional business websites, e-commerce stores, landing pages, and web applications designed for businesses in Haridwar and across India.",
  alternates: { canonical: "/services/web-development" },
};

export default function WebDevelopmentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
