import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PickYourPlan | Subscription Simplified',
  description: 'Pick a plan. Join the stack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
