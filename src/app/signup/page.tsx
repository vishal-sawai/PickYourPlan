'use client'

import { SignupForm } from '@/components/SignupForm'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'

export default function SignupPage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`min-h-screen w-full flex flex-col lg:flex-row overflow-hidden ${currentTheme.background}`}>
      {/* Left side - Hero/Branding section */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white flex-col justify-center p-8 xl:px-12">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl xl:text-4xl font-bold mb-4 xl:mb-6">Start your journey with us</h1>
          <p className="text-base xl:text-lg mb-6 xl:mb-8 text-indigo-100">
            Join thousands of users who are already enjoying our platform. Get access to all features and start growing today.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2 flex-shrink-0">
                <svg className="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4 text-sm xl:text-base">30-day free trial</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2 flex-shrink-0">
                <svg className="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4 text-sm xl:text-base">No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2 flex-shrink-0">
                <svg className="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4 text-sm xl:text-base">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 ${currentTheme.background}`}>
        <div className="w-full max-w-md">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.text}`}>Create your account</h2>
            <p className={`mt-4 sm:mt-6 text-sm ${currentTheme.subtext}`}>
              Already have an account?{' '}
              <a href="/login" className="font-medium text-indigo-500 hover:text-indigo-400">
                Sign in
              </a>
            </p>
          </div>
          
          <SignupForm />
        </div>
      </div>
    </div>
  )
}