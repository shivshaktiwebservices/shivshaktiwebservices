import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Applications & Business Solutions",
  description: "Get custom platforms, dashboards, portals, integrations, and business workflows built around your specific requirements.",
  alternates: { canonical: "/services/custom-solutions" },
};

export default function CustomSolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
