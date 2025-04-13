'use client'

import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import type { BillingPeriod } from '@/types'

export interface PlanToggleProps {
  period: BillingPeriod
  onChange: (period: BillingPeriod) => void
}

export function PlanToggle({ period, onChange }: PlanToggleProps) {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onChange('monthly')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            period === 'monthly'
              ? 'bg-indigo-600 text-white'
              : `${currentTheme.border} ${currentTheme.text}`
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => onChange('yearly')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            period === 'yearly'
              ? 'bg-indigo-600 text-white'
              : `${currentTheme.border} ${currentTheme.text}`
          }`}
        >
          Yearly
          <span className="ml-1 text-xs text-indigo-400">Save 20%</span>
        </button>
      </div>
    </div>
  )
}