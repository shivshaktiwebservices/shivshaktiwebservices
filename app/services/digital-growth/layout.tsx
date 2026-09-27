import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Growth & Marketing | ShivShakti Web Services',
  description: 'Enhance your online visibility with our SEO, Google Business optimization, and digital marketing strategies tailored for long-term growth.',
  keywords: ['digital marketing', 'SEO services', 'Google Business optimization', 'lead generation', 'social media presence', 'online visibility'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
