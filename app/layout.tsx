import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TechFix - Electronics Repair Shop',
  description: 'Professional electronics repair services for all your devices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
