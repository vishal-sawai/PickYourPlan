'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { plans, getPlanById } from '@/lib/plans'
import type { BillingPeriod, Plan } from '@/types'
import { MotionForm } from '@/utils'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'

export function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { theme } = useTheme()
  const currentTheme = themes[theme]
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<Plan | undefined>()
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    const planId = searchParams.get('plan')
    const billing = searchParams.get('billing') as BillingPeriod
    
    if (planId) {
      const plan = getPlanById(planId)
      setSelectedPlan(plan)
    }
    
    if (billing) {
      setBillingPeriod(billing)
    }
  }, [searchParams])

  const validatePasswords = () => {
    const newErrors = { password: '', confirmPassword: '' }
    
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return !newErrors.password && !newErrors.confirmPassword
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validatePasswords()) {
      return
    }
    
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push('/thank-you')
    } catch (error) {
      console.error('Signup error:', error)
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <MotionForm
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium ${currentTheme.text}`}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={`mt-1 block w-full rounded-md border ${currentTheme.border} ${currentTheme.background} ${currentTheme.text} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className={`block text-sm font-medium ${currentTheme.text}`}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`mt-1 block w-full rounded-md border ${currentTheme.border} ${currentTheme.background} ${currentTheme.text} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className={`block text-sm font-medium ${currentTheme.text}`}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className={`mt-1 block w-full rounded-md border ${currentTheme.border} ${currentTheme.background} ${currentTheme.text} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className={`block text-sm font-medium ${currentTheme.text}`}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className={`mt-1 block w-full rounded-md border ${currentTheme.border} ${currentTheme.background} ${currentTheme.text} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        {plans && (
          <div>
            <label htmlFor="plan" className={`block text-sm font-medium ${currentTheme.text}`}>
              Select Your Plan
            </label>
            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  className={`relative rounded-lg border p-4 cursor-pointer ${
                    selectedPlan?.id === plan.id
                      ? 'border-indigo-500 ring-2 ring-indigo-500'
                      : currentTheme.border
                  } ${currentTheme.card}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <h3 className={`text-sm font-medium ${currentTheme.text}`}>{plan.name}</h3>
                  <p className={`mt-1 text-sm ${currentTheme.subtext}`}>{plan.features?.[0]}</p>
                  <p className={`mt-2 text-lg font-semibold ${currentTheme.text}`}>
                    ${plan.price[billingPeriod]}/{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            required
            className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
          />
          <label htmlFor="terms" className={`text-sm ${currentTheme.text}`}>
            I agree to the{' '}
            <a href="/terms" className="font-medium text-indigo-500 hover:text-indigo-400">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="font-medium text-indigo-500 hover:text-indigo-400">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${currentTheme.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isLoading ? (
          <span className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating your account...
          </span>
        ) : (
          'Create Account'
        )}
      </button>
    </MotionForm>
  )
}