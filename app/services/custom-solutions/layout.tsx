import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software & Portals | ShivShakti Web Services',
  description: 'We build custom business platforms, internal tools, admin dashboards, and client portals tailored precisely to your workflow.',
  keywords: ['custom software', 'business platforms', 'internal tools', 'admin dashboards', 'customer portals', 'workflow automation'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
