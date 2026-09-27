import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShivShakti Web Services - Digital Growth & Custom Solutions",
  description:
    "Professional websites, digital solutions, AI integration and business growth solutions built around your unique needs.",
  keywords: ["web development", "digital growth", "AI automation", "custom web solutions", "ShivShakti Web Services"],
  openGraph: {
    title: "ShivShakti Web Services",
    description: "Professional websites, digital solutions, AI integration and business growth solutions.",
    url: "https://shivshaktiwebservice.co.in",
    siteName: "ShivShakti Web Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShivShakti Web Services",
    description: "Professional websites, digital solutions, AI integration and business growth solutions.",
  },
  manifest: "/manifest.json",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white antialiased`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}