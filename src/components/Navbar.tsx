'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { MotionButton } from '@/utils'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.background} backdrop-blur-md py-4 px-6 flex items-center justify-between border-b ${currentTheme.border}`}>
      <div className="flex items-center space-x-2">
        <Sparkles className="h-6 w-6 text-indigo-500" />
        <Link href="/" className={`font-bold text-xl ${currentTheme.text}`}>PickYourPlan</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className={`p-2 rounded-full ${currentTheme.card} border ${currentTheme.border} hover:border-indigo-500 transition-colors`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </MotionButton>
        
        <Link
          href="/login"
          className={`hidden md:block px-4 py-2 rounded-full ${currentTheme.subtext} hover:text-indigo-500 transition-colors`}
        >
          Login
        </Link>
        
        <Link
          href="/pricing"
          className={`hidden md:block relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white ${currentTheme.primary} transition-all duration-300`}
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}