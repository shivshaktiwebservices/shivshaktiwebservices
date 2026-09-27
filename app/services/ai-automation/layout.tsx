import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Automation Solutions | ShivShakti Web Services',
  description: 'Streamline your operations with AI integrations, custom chatbots, WhatsApp automation, and API solutions designed to save time.',
  keywords: ['AI integration', 'chatbots', 'WhatsApp automation', 'business automation', 'API integration', 'AI-powered web features'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
