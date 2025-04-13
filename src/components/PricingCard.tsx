'use client'

import { CheckCircle } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import type { BillingPeriod } from '@/types'
import { MotionButton } from '@/utils'

type PricingCardProps = {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    annual: number
  }
  features: string[]
  popular?: boolean
  billingPeriod: BillingPeriod
  onSelect: () => void
}

export function PricingCard({
  name,
  description,
  price,
  features,
  popular = false,
  billingPeriod,
  onSelect
}: PricingCardProps) {
  const { theme } = useTheme()
  const currentTheme = themes[theme]
  
  // Calculate savings for annual billing
  const monthlySavings = popular ? 
    `Save ${Math.round(100 - (price.annual / 12 / price.monthly * 100))}%` : null

  return (
    <div className="flex flex-col h-full p-8">
      <div className="mb-6">
        <h3 className={`text-2xl font-bold ${currentTheme.text}`}>{name}</h3>
        <p className={`mt-2 ${currentTheme.subtext}`}>{description}</p>
      </div>
      
      <div className="mt-2 mb-8">
        <div className="flex items-baseline">
          <span className={`text-5xl font-bold tracking-tight ${popular ? 'text-indigo-600 dark:text-indigo-400' : currentTheme.text}`}>
            ${billingPeriod === 'monthly' ? price.monthly : Math.round(price.annual / 12)}
          </span>
          <span className={`ml-1 text-lg ${currentTheme.subtext}`}>
            /month
          </span>
        </div>
        
        {billingPeriod === 'yearly' && (
          <div className="mt-1">
            <span className={`text-sm ${currentTheme.subtext}`}>
              Billed annually (${price.annual}/year)
            </span>
            {monthlySavings && (
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                {monthlySavings}
              </span>
            )}
          </div>
        )}
      </div>
      
      <ul className="mt-2 space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className={`h-5 w-5 ${popular ? 'text-indigo-600 dark:text-indigo-400' : 'text-green-500'} mr-2 flex-shrink-0 mt-0.5`} />
            <span className={`${currentTheme.subtext} text-sm`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <MotionButton
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onSelect}
          className={`w-full rounded-full px-4 py-3 text-base font-semibold ${
            popular
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : `${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`
          } transition-colors duration-300`}
        >
          {popular ? 'Get started' : 'Select plan'}
        </MotionButton>
      </div>
    </div>
  )
}