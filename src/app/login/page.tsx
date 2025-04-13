'use client'

import { LoginForm } from '@/components/LoginForm'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'

export default function LoginPage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`min-h-screen flex ${currentTheme.background}`}>
      {/* Left side - Hero/Branding section */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white flex-col justify-center px-12">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-6">Welcome back!</h1>
          <p className="text-lg mb-8 text-indigo-100">
            Log in to your account to access all features and continue your journey with us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4">Secure authentication</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4">Access all features</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-500 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-4">24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 ${currentTheme.background}`}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold ${currentTheme.text}`}>Sign in to your account</h2>
            <p className={`mt-6 text-sm ${currentTheme.subtext}`}>
              Don&apos;t have an account?{' '}
              <a href="/signup" className="font-medium text-indigo-500 hover:text-indigo-400">
                Sign up
              </a>
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
} 