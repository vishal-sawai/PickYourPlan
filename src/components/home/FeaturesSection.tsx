import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { MotionDiv } from '@/utils'
import { BarChart2, Lock, Users } from 'lucide-react'
import { memo } from 'react'

const features = [
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage your team with ease and flexibility',
    benefits: ['Unlimited team members', 'Role-based permissions', 'Team analytics']
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Get insights into your team\'s performance',
    benefits: ['Real-time dashboards', 'Custom reports', 'Export capabilities']
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade security for your peace of mind',
    benefits: ['End-to-end encryption', 'Two-factor authentication', 'Compliance reporting']
  },
]

const FeatureCard = memo(({ feature, index }: { feature: typeof features[0], index: number }) => {
  const { theme } = useTheme()
  const Icon = feature.icon

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl backdrop-blur-md p-8 ${
        theme === 'dark' ? 'bg-gray-800/70' : 'bg-white/90'
      } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-6">
        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
      <ul className="space-y-3">
        {feature.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </MotionDiv>
  )
})

FeatureCard.displayName = 'FeatureCard'

export function FeaturesSection() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24" id="features">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-16"
      >
        <h2 className={`text-3xl font-bold ${currentTheme.text} sm:text-4xl mb-4`}>
          All-in-one platform for your subscription needs
        </h2>
        <p className={`${currentTheme.subtext} max-w-2xl mx-auto`}>
          Everything you need to manage subscriptions efficiently and securely, all in one place.
        </p>
      </MotionDiv>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </div>
  )
} 