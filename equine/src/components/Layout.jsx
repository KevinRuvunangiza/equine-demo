import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMapPin, FiMail, FiClock } from 'react-icons/fi';

const EMERGENCY_PHONE = '063 149 4716';

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className={`text-2xl font-display font-bold transition-colors ${
                isScrolled ? 'text-hunter' : 'text-white'
              }`}>
                Fourways Equine Clinic
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:text-hunter'
                      : 'text-white hover:text-warm-cream'
                  } ${location.pathname === link.to ? (isScrolled ? 'text-hunter' : 'text-warm-cream') : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}
                className="bg-hunter hover:bg-hunter-dark text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg flex items-center space-x-2"
              >
                <FiPhone className="w-4 h-4" />
                <span>Emergency</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-hunter' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block text-base font-medium transition-colors ${
                      location.pathname === link.to
                        ? 'text-hunter'
                        : 'text-gray-700 hover:text-hunter'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}
                  className="block bg-hunter hover:bg-hunter-dark text-white px-6 py-3 rounded-full font-medium text-center transition-all"
                >
                  Call Emergency Line
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-hunter-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="font-display text-2xl mb-4">Fourways Equine Clinic</h3>
              <p className="text-gray-300 mb-4">
                Dedicated to world-class equine medicine and surgery since 1980.
              </p>
              <div className="flex space-x-4">
                <a
                  href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}
                  className="bg-emergency hover:bg-emergency-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm font-medium">24/7 Emergency</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Kyalami, Johannesburg<br />Gauteng, South Africa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 flex-shrink-0" />
                  <a href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`} className="hover:text-white">
                    {EMERGENCY_PHONE}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@fourwaysequine.co.za" className="hover:text-white">
                    info@fourwaysequine.co.za
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FiClock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>24/7 Ambulatory Emergency Service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Fourways Equine Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Emergency Bar (Mobile) */}
      <motion.a
        href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-emergency text-white py-4 px-4 md:hidden shadow-2xl animate-pulse-glow"
      >
        <div className="flex items-center justify-center space-x-3">
          <FiPhone className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-base uppercase tracking-wider">
            🚨 24/7 Ambulatory Emergency
          </span>
        </div>
        <div className="text-center text-sm mt-1 font-medium">
          Tap to Call: {EMERGENCY_PHONE}
        </div>
      </motion.a>

      {/* Desktop Emergency Bar (Bottom Right) */}
      <motion.a
        href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-emergency hover:bg-emergency-dark text-white px-6 py-4 rounded-2xl shadow-2xl items-center space-x-3 transition-all hover:scale-105"
      >
        <FiPhone className="w-6 h-6" />
        <div>
          <div className="font-bold text-sm uppercase tracking-wider">
            🚨 Emergency
          </div>
          <div className="text-xs">
            {EMERGENCY_PHONE}
          </div>
        </div>
      </motion.a>
    </div>
  );
}

export default Layout;