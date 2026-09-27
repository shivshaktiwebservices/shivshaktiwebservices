
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Development & Digital Solutions in Haridwar | ShivShakti Web Services',

  description:
    'ShivShakti Web Services provides website development, web design, custom software, AI automation and digital solutions for businesses in Haridwar and across Uttarakhand.',

  keywords: [
    'web development company in Haridwar',
    'website development company in Haridwar',
    'web design company in Haridwar',
    'web services company in Haridwar',
    'website maker in Haridwar',
    'website development in Haridwar',
    'digital solutions in Haridwar',
    'software development company in Haridwar',
    'custom software development in Haridwar',
    'AI automation services in Haridwar',
    'digital services in Haridwar',
    'web development Uttarakhand',
    'website development Uttarakhand',
    'ShivShakti Web Services',
  ],

  alternates: {
    canonical: 'https://YOUR-DOMAIN.com/services',
  },

  openGraph: {
    title: 'Web Development & Digital Solutions in Haridwar | ShivShakti Web Services',
    description:
      'Website development, web design, custom software, AI automation and digital solutions for businesses in Haridwar and Uttarakhand.',
    url: 'https://YOUR-DOMAIN.com/services',
    siteName: 'ShivShakti Web Services',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Digital Solutions in Haridwar',
    description:
      'ShivShakti Web Services provides web development, web design, custom software and digital solutions in Haridwar and Uttarakhand.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

