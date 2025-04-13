import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { MotionDiv } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className="relative px-6 pt-8 lg:px-8" id="hero">
      <div className="mx-auto max-w-7xl py-20 sm:py-32 lg:py-40 flex flex-col lg:flex-row items-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
              New: Smart Analytics Dashboard 2.0
            </span>
          </MotionDiv>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Subscription <br />
            <span className="relative">
              Simplified
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7C50 5 100 3 150 3C200 3 250 5 297 7" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className={`mt-6 text-lg leading-8 ${currentTheme.subtext} max-w-2xl`}>
            Streamline your subscription management with PickYourPlan. The most powerful
            platform for managing team subscriptions, analytics, and security in one place.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link
              href="/signup"
              className="group relative overflow-hidden rounded-full w-full sm:w-auto px-8 py-4 text-base font-semibold bg-indigo-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-x-2">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>

            <Link
              href="/pricing"
              className={`group w-full sm:w-auto relative overflow-hidden rounded-full border border-indigo-300 dark:border-indigo-800 px-8 py-4 text-base font-semibold ${currentTheme.text} transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30`}
            >
              see pricing plans
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-900 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/profile/user.webp`}
                    alt={`User ${i}`}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="32px"
                  />
                </div>
              ))}
            </div>
            <div className={`ml-4 text-sm ${currentTheme.subtext}`}>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">500+</span> teams already onboard
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:w-1/2 lg:pl-12"
        >
          <div className={`relative rounded-xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border border-gray-200 dark:border-gray-700`}>
            <div className={`px-4 py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex items-center`}>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className={`mx-auto text-xs ${currentTheme.subtext}`}>Dashboard Preview</div>
            </div>
            <div className="p-4">
              <Image
                src="/dashboard.webp"
                alt="Dashboard"
                width={600}
                height={400}
                className="rounded-lg w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
              />
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
} 