import { Inter , Outfit } from 'next/font/google'
import './globals.css'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Share Vault',
  description: 'secure file sharing platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}</body>
    </html>
  )
}
