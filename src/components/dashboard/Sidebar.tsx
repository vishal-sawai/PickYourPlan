import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import Link from 'next/link'
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  BarChart2,
  HelpCircle,
  LogOut,
  X
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Team', href: '/dashboard' },
  { icon: CreditCard, label: 'Billing', href: '/dashboard' },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard' },
  { icon: Settings, label: 'Settings', href: '/dashboard' },
  { icon: HelpCircle, label: 'Help', href: '/dashboard' },
]

export function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`w-64 h-screen fixed left-0 top-0 ${currentTheme.background} border-r ${currentTheme.border} z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 sm:p-6 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base">P</span>
          </div>
          <span className={`text-lg sm:text-xl font-bold ${currentTheme.text}`}>PickYourPlan</span>
        </Link>

        {/* Close button only shown on mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="mt-4 sm:mt-6">
        <div className="px-2 sm:px-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg mb-1 ${currentTheme.text} hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors text-sm sm:text-base`}
                onClick={() => {
                  // Close sidebar on mobile when a link is clicked
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="absolute bottom-6 sm:bottom-8 w-full px-4 sm:px-8">
          <Link
            href="/"
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg w-full ${currentTheme.text} hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors text-sm sm:text-base`}
            onClick={() => {
              // Close sidebar on mobile when a link is clicked
              if (window.innerWidth < 1024) {
                toggleSidebar();
              }
            }}
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}