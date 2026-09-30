import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Integration Services",
  description: "Automate workflows, connect business tools, and add practical AI features with ShivShakti Web Services in Haridwar.",
  alternates: { canonical: "/services/ai-automation" },
};

export default function AIAutomationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
