'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { MotionSpan, MotionSection, MotionLi, MotionFooter } from '@/utils'

export default function ThankYouPage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]



  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 pt-20 ${currentTheme.background}`}>
      <MotionSpan
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="mb-8 block"
      >
        <CheckCircle className="w-20 h-20 text-green-500" />
      </MotionSpan>

      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-lg"
      >
        <h1 className={`text-4xl font-bold mb-4 ${currentTheme.text}`}>
          Thank you for signing up!
        </h1>
        <p className={`text-lg mb-8 ${currentTheme.subtext}`}>
          We&apos;re excited to have you on board. Your account has been successfully created.
        </p>

        <div className="space-y-6">
          <div className={`p-6 rounded-lg border ${currentTheme.border} ${currentTheme.card}`}>
            <h2 className={`text-xl font-semibold mb-4 ${currentTheme.text}`}>
              What&apos;s next?
            </h2>
            <ul className="space-y-4">
              {[
                'Complete your profile',
                'Explore our features',
                'Connect with the community',
                'Start your first project'
              ].map((item, index) => (
                <MotionLi
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`flex items-center ${currentTheme.text}`}
                >
                  <ArrowRight className="w-5 h-5 mr-3 text-indigo-500" />
                  {item}
                </MotionLi>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MotionSpan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link
                href="/"
                className={`px-6 py-3 rounded-full text-white font-medium ${currentTheme.primary} hover:bg-indigo-500 transition-colors`}
              >
                Go to Dashboard
              </Link>
            </MotionSpan>
            
            <MotionSpan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Link
                href="/"
                className={`px-6 py-3 rounded-full font-medium border ${currentTheme.border} ${currentTheme.text} hover:border-indigo-500 transition-colors`}
              >
                View Documentation
              </Link>
            </MotionSpan>
          </div>
        </div>
      </MotionSection>

      <MotionFooter
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-12 text-center"
      >
        <p className={`text-sm ${currentTheme.subtext}`}>
          Need help? {' '}
          <Link 
            href="/" 
            className="text-indigo-500 hover:text-indigo-400 font-medium"
          >
            Contact our support team
          </Link>
        </p>
      </MotionFooter>
    </div>
  )
} 