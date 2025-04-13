import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { MotionDiv } from '@/utils'
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'
import { plans } from '@/lib/plans'
import type { BillingPeriod, Plan } from '@/types'
import { PlanToggle } from './PlanToggle'

type Step = 'plan' | 'account' | 'team' | 'complete'

export function SignupStepper() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]
  const [currentStep, setCurrentStep] = useState<Step>('plan')
  const [selectedPlan, setSelectedPlan] = useState<Plan | undefined>()
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    teamSize: '1-10'
  })

  const steps: { id: Step; title: string }[] = [
    { id: 'plan', title: 'Choose Plan' },
    { id: 'account', title: 'Account Details' },
    { id: 'team', title: 'Team Setup' },
    { id: 'complete', title: 'Complete' }
  ]

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id)
    }
  }

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 'plan':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className={`text-2xl font-bold ${currentTheme.text}`}>Choose your plan</h2>
              <p className={`mt-2 ${currentTheme.subtext}`}>Select a plan that best fits your needs</p>
            </div>

            <PlanToggle
              period={billingPeriod}
              onChange={setBillingPeriod}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`cursor-pointer rounded-xl p-6 ${
                    selectedPlan?.id === plan.id
                      ? 'ring-2 ring-indigo-500 border-transparent'
                      : `border ${currentTheme.border}`
                  } ${currentTheme.card}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-lg font-semibold ${currentTheme.text}`}>{plan.name}</h3>
                      <p className={`mt-1 text-sm ${currentTheme.subtext}`}>{plan.description}</p>
                    </div>
                    {selectedPlan?.id === plan.id && (
                      <CheckCircle className="h-5 w-5 text-indigo-500" />
                    )}
                  </div>
                  <div className="mt-4">
                    <span className={`text-2xl font-bold ${currentTheme.text}`}>
                      ${plan.price[billingPeriod]}
                    </span>
                    <span className={`${currentTheme.subtext}`}>
                      /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features?.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className={`text-sm ${currentTheme.subtext}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )

      case 'account':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className={`text-2xl font-bold ${currentTheme.text}`}>Create your account</h2>
              <p className={`mt-2 ${currentTheme.subtext}`}>Enter your account details</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${currentTheme.text} mb-1.5`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg px-4 py-2.5 bg-transparent border ${currentTheme.border} ${currentTheme.text} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${currentTheme.text} mb-1.5`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg px-4 py-2.5 bg-transparent border ${currentTheme.border} ${currentTheme.text} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className={`block text-sm font-medium ${currentTheme.text} mb-1.5`}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg px-4 py-2.5 bg-transparent border ${currentTheme.border} ${currentTheme.text} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className={`block text-sm font-medium ${currentTheme.text} mb-1.5`}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg px-4 py-2.5 bg-transparent border ${currentTheme.border} ${currentTheme.text} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                  required
                />
              </div>
            </div>
          </div>
        )

      case 'team':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className={`text-2xl font-bold ${currentTheme.text}`}>Set up your team</h2>
              <p className={`mt-2 ${currentTheme.subtext}`}>Tell us about your organization</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="companyName" className={`block text-sm font-medium ${currentTheme.text} mb-1.5`}>
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg px-4 py-2.5 bg-transparent border ${currentTheme.border} ${currentTheme.text} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                  required
                />
              </div>

              <div>
                <label htmlFor="teamSize" className={`block text-sm font-medium ${currentTheme.text} mb-1.5`}>
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg px-4 py-2.5 bg-transparent border ${currentTheme.border} ${currentTheme.text} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`}
                >
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 'complete':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h2 className={`text-2xl font-bold ${currentTheme.text}`}>Setup Complete!</h2>
            <p className={`${currentTheme.subtext}`}>
              Your account has been created and your workspace is ready.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === step.id
                    ? 'bg-indigo-600 text-white'
                    : steps.findIndex(s => s.id === currentStep) > index
                    ? 'bg-green-500 text-white'
                    : `${currentTheme.border} ${currentTheme.text}`
                }`}
              >
                {steps.findIndex(s => s.id === currentStep) > index ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-20 h-1 mx-2 ${
                    steps.findIndex(s => s.id === currentStep) > index
                      ? 'bg-green-500'
                      : currentTheme.border
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <MotionDiv
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="mb-8"
      >
        {renderStepContent()}
      </MotionDiv>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep !== 'plan' && (
          <button
            onClick={handleBack}
            className={`flex items-center px-6 py-2 rounded-lg ${currentTheme.border} ${currentTheme.text}`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
        )}
        {currentStep !== 'complete' && (
          <button
            onClick={handleNext}
            className="flex items-center px-6 py-2 rounded-lg bg-indigo-600 text-white ml-auto"
          >
            {currentStep === 'team' ? 'Complete Setup' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        )}
      </div>
    </div>
  )
} 