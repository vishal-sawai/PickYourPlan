export type Theme = 'light' | 'dark'

export const themes = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
    subtext: 'text-gray-600',
    primary: 'bg-indigo-600 hover:bg-indigo-500',
    secondary: 'bg-gray-100 hover:bg-gray-200',
    card: 'bg-white',
    border: 'border-gray-200',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-white',
    subtext: 'text-gray-300',
    primary: 'bg-indigo-500 hover:bg-indigo-400',
    secondary: 'bg-gray-800 hover:bg-gray-700',
    card: 'bg-gray-800',
    border: 'border-gray-700',
  },
} 