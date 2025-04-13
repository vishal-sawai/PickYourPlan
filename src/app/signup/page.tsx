'use client'

import { SignupForm } from '@/components/SignupForm'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'

export default function SignupPage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`min-h-screen flex ${currentTheme.background}`}>
      {/* Left side - Hero/Branding section */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white flex-col justify-center px-12">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-6">Start your journey with us</h1>
          <p className="text-lg mb-8 text-indigo-100">
            Join thousands of users who are already enjoying our platform. Get access to all features and start growing today.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4">30-day free trial</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4">No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 ${currentTheme.background}`}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold ${currentTheme.text}`}>Create your account</h2>
            <p className={`mt-2 text-sm ${currentTheme.subtext}`}>
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