import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | ShivShakti Web Services',
  description: 'Explore our range of digital solutions including Custom Web Development, Digital Growth Strategies, AI Automation, and Custom Platforms to elevate your business.',
  keywords: ['digital services', 'web development', 'digital growth', 'AI solutions', 'custom software'],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
