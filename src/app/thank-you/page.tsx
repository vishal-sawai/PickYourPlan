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
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden ${currentTheme.background}`}>
      <MotionSpan
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="mb-6 sm:mb-8 block"
      >
        <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
      </MotionSpan>

      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center w-full max-w-lg px-4"
      >
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 ${currentTheme.text}`}>
          Thank you for signing up!
        </h1>
        <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${currentTheme.subtext}`}>
          We&apos;re excited to have you on board. Your account has been successfully created.
        </p>

        <div className="space-y-4 sm:space-y-6">
          <div className={`p-4 sm:p-6 rounded-lg border ${currentTheme.border} ${currentTheme.card}`}>
            <h2 className={`text-lg sm:text-xl font-semibold mb-4 ${currentTheme.text}`}>
              What&apos;s next?
            </h2>
            <ul className="space-y-3 sm:space-y-4">
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
                  className={`flex items-center text-sm sm:text-base ${currentTheme.text}`}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-indigo-500 flex-shrink-0" />
                  {item}
                </MotionLi>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <MotionSpan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/"
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base font-medium ${currentTheme.primary} hover:bg-indigo-500 transition-colors inline-flex items-center justify-center`}
              >
                Go to Dashboard
              </Link>
            </MotionSpan>
            
            <MotionSpan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/"
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium border ${currentTheme.border} ${currentTheme.text} hover:border-indigo-500 transition-colors inline-flex items-center justify-center`}
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
        className="mt-8 sm:mt-12 text-center w-full max-w-lg px-4"
      >
        <p className={`text-xs sm:text-sm ${currentTheme.subtext}`}>
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