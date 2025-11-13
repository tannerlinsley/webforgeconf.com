import { Link } from '@tanstack/react-router'
import { LuFlame } from 'react-icons/lu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-blue-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-display hover:opacity-80 transition-opacity flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <LuFlame className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <span className="text-black dark:text-white">Web Forge 2026</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              hash="developer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Developers
            </Link>
            <Link
              to="/"
              hash="creator"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Creators
            </Link>
            <Link
              to="/"
              hash="sponsor"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sponsors
            </Link>
            <Link
              to="/"
              hash="partner"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Partners
            </Link>
            <Link
              to="/"
              hash="faq"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/"
              hash="discord"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Community
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdNYlfKaLvHry4Z-8bgbeszCMgQOSSB1drOE1EgKD5FUrQUoA/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
