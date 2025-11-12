import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-blue-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-display hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="text-blue-800 dark:text-blue-400">
              Web Forge Conf
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="#developer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Developers
            </Link>
            <Link
              to="#creator"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Creators
            </Link>
            <Link
              to="#sponsor"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sponsors
            </Link>
            <Link
              to="#organizer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Organizers
            </Link>
            <Link
              to="#faq"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              FAQ
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
