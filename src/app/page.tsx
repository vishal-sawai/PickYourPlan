'use client'

import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { Suspense } from 'react'
import { MotionDiv } from '@/utils'

// Loading fallback components
const HeroSectionFallback = () => (
  <div className="animate-pulse">
    <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
  </div>
)

const FeaturesSectionFallback = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
      ))}
    </div>
  </div>
)

export default function HomePage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`relative min-h-screen ${currentTheme.background} transition-colors duration-300`}>
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-purple-900/10 pointer-events-none" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Suspense fallback={<HeroSectionFallback />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<FeaturesSectionFallback />}>
          <FeaturesSection />
        </Suspense>

        {/* Newsletter Section */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24"
        >
          <div className={`rounded-2xl ${theme === 'dark' ? 'bg-gray-800/70' : 'bg-white/90'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} p-8 md:p-12 backdrop-blur-md`}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className={`text-3xl font-bold ${currentTheme.text} sm:text-4xl mb-4`}>
                Stay updated with our newsletter
              </h2>
              <p className={`${currentTheme.subtext} mb-8`}>
                Get the latest updates about new features and product announcements.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-3 rounded-full border ${currentTheme.border} ${currentTheme.background} ${currentTheme.text} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </MotionDiv>
      </main>
    </div>
  )
}