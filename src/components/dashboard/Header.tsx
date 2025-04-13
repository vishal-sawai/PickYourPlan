import { useTheme } from '@/context/ThemeContext'
import { themes } from '@/lib/theme'
import { Bell, Search, Sun, Moon, Menu } from 'lucide-react'
import Image from 'next/image'

export function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { theme, toggleTheme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <header className={`h-16 fixed top-0 right-0 left-0 lg:left-64 ${currentTheme.background} border-b ${currentTheme.border} z-10`}>
      <div className="h-full flex items-center justify-between px-4 sm:px-6">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg ${currentTheme.card} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2`}
            aria-label="Toggle menu"
          >
            <Menu className={`w-5 h-5 ${currentTheme.text}`} />
          </button>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden sm:block">
          <div className={`flex items-center px-3 py-2 rounded-lg border ${currentTheme.border} ${currentTheme.background}`}>
            <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${currentTheme.subtext}`} />
            <input
              type="text"
              placeholder="Search..."
              className={`ml-2 sm:ml-3 flex-1 bg-transparent border-none focus:outline-none text-sm sm:text-base ${currentTheme.text}`}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 sm:p-2 rounded-lg ${currentTheme.card} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            )}
          </button>

          {/* Notifications */}
          <button 
            className={`p-1.5 sm:p-2 rounded-lg ${currentTheme.card} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative`}
            aria-label="Notifications"
          >
            <Bell className={`w-4 h-4 sm:w-5 sm:h-5 ${currentTheme.text}`} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center space-x-1 sm:space-x-3" aria-label="Profile">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
              <Image
                src="/profile/vishal.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`${currentTheme.text} font-medium text-sm sm:text-base hidden sm:inline`}>John Doe</span>
          </button>
        </div>
      </div>
    </header>
  )
}