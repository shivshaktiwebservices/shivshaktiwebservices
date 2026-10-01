import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivshaktiweb.online"),
  title: {
    default: "ShivShakti Web Services | Web Development & Digital Growth in Haridwar",
    template: "%s | ShivShakti Web Services",
  },
  description:
    "ShivShakti Web Services creates professional websites, custom web applications, digital growth strategies, and AI automation for businesses in Haridwar and across India.",
  applicationName: "ShivShakti Web Services",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "ShivShakti Web Services | Web Development & Digital Growth",
    description: "Professional websites, custom digital solutions, AI integration, and business growth support from Haridwar.",
    url: "https://shivshaktiweb.online",
    siteName: "ShivShakti Web Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShivShakti Web Services | Web Development & Digital Growth",
    description: "Professional websites, custom digital solutions, AI integration, and business growth support from Haridwar.",
  },
  icons: {
    icon: "/web-app-manifest-192x192.png",
    apple: "/apple-icon.png",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "ShivShakti Web Services",
    url: "https://shivshaktiweb.online",
    logo: "https://shivshaktiweb.online/logo.png",
    email: "shivshaktiwebservices@gmail.com",
    telephone: "+91-9105642658",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Mantra Apartment, Integrated Industrial Estate, Nehru Colony, BHEL Township, Salempur Mahdood",
      addressLocality: "Haridwar",
      addressRegion: "Uttarakhand",
      postalCode: "249403",
      addressCountry: "IN",
    },
    openingHours: "10:00-18:00",
    areaServed: ["Haridwar", "Uttarakhand", "India"],
    sameAs: ["https://www.shivshaktimultiservice.co.in/"],
  };

  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
