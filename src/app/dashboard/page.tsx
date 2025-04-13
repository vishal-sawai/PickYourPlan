'use client'

import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { Header } from '@/components/dashboard/Header'
import { MotionDiv } from '@/utils'
import { useState, useEffect } from 'react'
import { 
  Users, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  BarChart2
} from 'lucide-react'

const stats = [
  {
    label: 'Total Users',
    value: '2,543',
    change: '+12.5%',
    isPositive: true,
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    label: 'Monthly Revenue',
    value: '$45,234',
    change: '+23.1%',
    isPositive: true,
    icon: CreditCard,
    color: 'bg-green-500'
  },
  {
    label: 'Active Teams',
    value: '342',
    change: '+8.2%',
    isPositive: true,
    icon: BarChart2,
    color: 'bg-purple-500'
  }
]

const recentActivity = [
  {
    user: 'John Doe',
    action: 'added 5 team members',
    time: '2 hours ago'
  },
  {
    user: 'Sarah Smith',
    action: 'upgraded to Pro plan',
    time: '4 hours ago'
  },
  {
    user: 'Mike Johnson',
    action: 'generated monthly report',
    time: '6 hours ago'
  }
]

export default function DashboardPage() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // Close sidebar when screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className={`min-h-screen ${currentTheme.background}`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Responsive Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Responsive Header */}
      <Header toggleSidebar={toggleSidebar} />

      <main className="pt-16 lg:pl-64">
        <div className="p-4 sm:p-6 md:p-8">
          {/* Welcome Section */}
          <div className="mb-6 md:mb-8">
            <h1 className={`text-xl md:text-2xl font-bold ${currentTheme.text}`}>Welcome back, John! 👋</h1>
            <p className={`mt-1 text-sm md:text-base ${currentTheme.subtext}`}>Here&apos;s what&apos;s happening with your projects today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 md:p-6 rounded-xl ${currentTheme.card} border ${currentTheme.border}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <span className={`flex items-center text-sm md:text-base ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                    {stat.isPositive ? (
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    )}
                  </span>
                </div>
                <div className="mt-3 md:mt-4">
                  <h3 className={`text-xl md:text-2xl font-bold ${currentTheme.text}`}>{stat.value}</h3>
                  <p className={`text-sm md:text-base ${currentTheme.subtext}`}>{stat.label}</p>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Recent Activity */}
          <div className={`rounded-xl ${currentTheme.card} border ${currentTheme.border} p-4 md:p-6`}>
            <h2 className={`text-base md:text-lg font-semibold mb-3 md:mb-4 ${currentTheme.text}`}>Recent Activity</h2>
            <div className="space-y-3 md:space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-2 md:py-3 ${
                    index !== recentActivity.length - 1 ? `border-b ${currentTheme.border}` : ''
                  }`}
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <span className={`text-xs md:text-sm font-medium text-indigo-600 dark:text-indigo-400`}>
                        {activity.user.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className={`text-xs md:text-sm font-medium ${currentTheme.text}`}>
                        {activity.user} <span className={`${currentTheme.subtext}`}>{activity.action}</span>
                      </p>
                      <p className={`text-xs ${currentTheme.subtext}`}>{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}