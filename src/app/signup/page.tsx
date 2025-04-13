'use client'

import { SignupStepper } from '@/components/SignupStepper'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { Navbar } from '@/components/Navbar'

export default function SignupPage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`min-h-screen ${currentTheme.background}`}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mt-16">
          <SignupStepper />
        </div>
      </main>
    </div>
  )
}