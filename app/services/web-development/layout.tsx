import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web Development | ShivShakti Web Services',
  description: 'Professional, custom-built business websites, e-commerce stores, and web applications designed to engage your audience and drive growth.',
  keywords: ['web development', 'business websites', 'e-commerce development', 'landing pages', 'custom web applications', 'website redesign'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
