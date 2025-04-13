'use client'

import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import type { BillingPeriod } from '@/types'

type PlanToggleProps = {
  billingPeriod: BillingPeriod
  onChange: (period: BillingPeriod) => void
}

export function PlanToggle({ billingPeriod, onChange }: PlanToggleProps) {
  const { theme } = useTheme()
  const currentTheme = themes[theme]
  
  return (
    <div className={`flex items-center justify-center p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="flex rounded-full p-1">
        <button
          type="button"
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            billingPeriod === 'monthly'
              ? `bg-indigo-600 text-white`
              : `bg-transparent ${currentTheme.subtext}`
          }`}
          onClick={() => onChange('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            billingPeriod === 'yearly'
              ? `bg-indigo-600 text-white`
              : `bg-transparent ${currentTheme.subtext}`
          }`}
          onClick={() => onChange('yearly')}
        >
          Annual
          <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Save 20%
          </span>
        </button>
      </div>
    </div>
  )
}