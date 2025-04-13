'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MotionDiv } from '@/utils'
import { PricingCard } from '@/components/PricingCard'
import { PlanToggle } from '@/components/PlanToggle'
import { Navbar } from '@/components/Navbar'
import { ThreeScene } from '@/components/ThreeScene'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { plans } from '@/lib/plans'
import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import Link from 'next/link'
import type { BillingPeriod } from '@/types'


export default function PricingPage() {
  const router = useRouter()
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  const handlePlanSelect = (planId: string) => {
    router.push(`/signup?plan=${planId}&billing=${billingPeriod}`)
  }

  const frequentlyAskedQuestions = [
    {
      question: 'How does the 14-day trial work?',
      answer: 'You can try any plan for 14 days without being charged. If you decide to keep using StackSuck, you\'ll be billed at the end of your trial. You can cancel anytime during your trial period.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you\'ll be prorated for the remainder of your billing period. When you downgrade, changes will take effect at the end of your current billing period.'
    },
    {
      question: 'Do you offer enterprise plans?',
      answer: 'Yes, we offer custom enterprise plans with dedicated support, custom integrations, and advanced security features. Contact our sales team to discuss your organization\'s needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and for annual enterprise plans, we can accommodate bank transfers or checks. All payments are securely processed and encrypted.'
    }
  ]

  return (
    <div className={`relative min-h-screen ${currentTheme.background} transition-colors duration-300`}>
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-purple-900/10 pointer-events-none" />
      
      {/* Animated Particles Background */}
      <ThreeScene />
      
      {/* Navigation */}
      <Navbar />
      
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 sm:py-32 pt-28 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                Special offer: 20% off annual plans
              </span>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
                Simple pricing for everyone
              </h1>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`mt-6 text-lg leading-8 ${currentTheme.subtext} max-w-2xl mx-auto`}
            >
              Choose the perfect plan for your team&apos;s needs. All plans include a 14-day free
              trial with all features unlocked. No credit card required to start.
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <PlanToggle
              billingPeriod={billingPeriod}
              onChange={setBillingPeriod}
            />
          </MotionDiv>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {plans.map((plan, index) => (
              <MotionDiv
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl backdrop-blur-md ${
                  theme === 'dark' ? 'bg-gray-800/70' : 'bg-white/90'
                } border ${
                  plan.isFeatured
                    ? 'border-indigo-500' 
                    : theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                } overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-indigo-600 text-white text-center text-sm font-medium py-1">
                    Most Popular
                  </div>
                )}
                <PricingCard
                  description={''} 
                  {...plan}
                  billingPeriod={billingPeriod}
                  onSelect={() => handlePlanSelect(plan.id)}
                  price={{
                    monthly: plan.price.monthly,
                    annual: plan.price.yearly
                  }}
                />
              </MotionDiv>
            ))}
          </div>
          
          {/* Enterprise CTA Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16"
          >
            <div className={`rounded-2xl ${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md p-8 lg:p-12 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-x-3 mb-4">
                    <Sparkles className="h-6 w-6 text-indigo-500" />
                    <h3 className={`text-2xl font-bold ${currentTheme.text}`}>Enterprise Plan</h3>
                  </div>
                  <p className={`${currentTheme.subtext} max-w-lg`}>
                    Need a custom solution for your large organization? Our enterprise plan includes
                    dedicated support, custom integrations, and advanced security features.
                  </p>
                </div>
                <Link
                  href="/contact-sales"
                  className="group relative overflow-hidden rounded-full px-6 py-3 text-base font-semibold bg-indigo-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <span className="relative z-10 flex items-center justify-center gap-x-2">
                    Contact Sales
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </MotionDiv>
          
          {/* FAQ Section */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-24"
          >
            <div className="mx-auto max-w-4xl">
              <h2 className={`text-3xl font-bold ${currentTheme.text} text-center mb-12`}>
                Frequently asked questions
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {frequentlyAskedQuestions.map((faq, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    <h3 className={`text-lg font-semibold ${currentTheme.text} mb-3`}>
                      {faq.question}
                    </h3>
                    <p className={`${currentTheme.subtext}`}>
                      {faq.answer}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>
          
          {/* Guarantee Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-24 flex justify-center"
          >
            <div className={`rounded-full ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md p-4 px-6 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} inline-flex items-center`}>
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className={`${currentTheme.subtext} text-sm`}>
                30-day money-back guarantee. No questions asked.
              </span>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
      
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mb-12">
        <div
          className={`rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl overflow-hidden`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90" />
            <div className="relative z-10 py-12 px-6 md:py-16 md:px-12 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                Ready to simplify your subscriptions?
              </h2>
              <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="rounded-full bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors"
                >
                  Start your free trial
                </Link>
                <Link
                  href="/demo"
                  className="rounded-full bg-indigo-800/40 backdrop-blur-sm border border-indigo-400/30 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-800/60 transition-colors"
                >
                  Watch demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}