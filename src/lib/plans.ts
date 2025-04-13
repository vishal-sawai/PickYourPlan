import { Plan } from '@/types'

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: { monthly: 29, yearly: 279 },
    features: [
      'Up to 10 team members',
      'Basic analytics',
      'Weekly reports',
      '24/7 support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 79, yearly: 759 },
    features: [
      'Up to 50 team members',
      'Advanced analytics',
      'Daily reports',
      'Custom integrations',
      'Priority support',
    ],
    isFeatured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { monthly: 199, yearly: 1919 },
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      'Real-time reporting',
      'Custom solutions',
      'Dedicated support team',
    ],
  },
]

export function getPlanById(id: string): Plan | undefined {
  return plans.find(plan => plan.id === id)
} 