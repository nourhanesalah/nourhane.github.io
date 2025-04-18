import { motion } from 'framer-motion'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-nude-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="page-container flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-2xl font-serif text-nude-900 hover:text-nude-700 transition-colors duration-200"
          >
            Nourhane Attia
          </Link>
          <div className="hidden md:flex gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/portfolio/branding" className="nav-link">Branding</Link>
            <Link to="/portfolio/ux-ui" className="nav-link">UX/UI</Link>
            <Link to="/portfolio/illustration" className="nav-link">Illustration</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nude-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-white border-t border-nude-200 mt-16">
        <div className="page-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nude-600 text-center md:text-left">
              © {new Date().getFullYear()} Nourhane Attia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/tinytalesbynour"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/nourhanesalah/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/nourhanesalah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Behance Portfolio"
              >
                <i className="fab fa-behance"></i>
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
