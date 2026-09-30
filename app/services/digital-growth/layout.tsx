import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Growth & SEO Services in Haridwar",
  description: "Improve your online presence, local visibility, SEO, lead generation, and digital marketing with ShivShakti Web Services.",
  alternates: { canonical: "/services/digital-growth" },
};

export default function DigitalGrowthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
