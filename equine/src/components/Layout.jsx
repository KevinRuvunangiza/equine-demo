import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMapPin, FiMail, FiClock } from 'react-icons/fi';

const EMERGENCY_PHONE = '063 149 4716';

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <div className="min-h-screen flex flex-col font-sans text-charcoal">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-glass py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="z-50 group">
              <span className={`text-2xl md:text-3xl font-display font-bold tracking-tight transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? 'text-hunter' : 'text-white'
              }`}>
                Fourways Equine
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-semibold uppercase tracking-widest hover:text-emergency transition-colors duration-300 relative group ${
                    isScrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emergency transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <a
                href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 ${
                  isScrolled 
                    ? 'bg-hunter text-white hover:bg-hunter-dark' 
                    : 'bg-white text-hunter hover:bg-gray-100'
                }`}
              >
                <FiPhone className="animate-pulse" /> 
                <span>Emergency</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden z-50 p-2 rounded-full transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? 'text-hunter' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-4xl font-display text-hunter hover:text-emergency transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
              className="mt-8 px-8 py-4 bg-emergency text-white rounded-full font-bold text-xl shadow-xl animate-pulse-glow flex items-center gap-3"
            >
              <FiPhone /> Call Emergency
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-hunter-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-texture opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <h3 className="font-display text-3xl mb-6">Fourways Equine</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dedicated to world-class equine medicine and surgery since 1980. Your partner in equine health excellence.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-emergency uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-emergency uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 flex-shrink-0 text-emergency" />
                  <span>Kyalami, Johannesburg<br/>Gauteng, South Africa</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="flex-shrink-0 text-emergency" />
                  <a href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{EMERGENCY_PHONE}</a>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="flex-shrink-0 text-emergency" />
                  <a href="mailto:info@fourwaysequine.co.za" className="hover:text-white transition-colors">info@fourwaysequine.co.za</a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-emergency uppercase tracking-wider">Hours</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                  <FiClock className="mt-1 flex-shrink-0 text-emergency" />
                  <div>
                    <span className="block text-white font-bold">Emergency Service</span>
                    24 Hours / 7 Days
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiClock className="mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-white font-medium">Office Hours</span>
                    Mon - Fri: 8:00 - 17:00
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Fourways Equine Clinic. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile Only) */}
      <motion.a
        href={`tel:${EMERGENCY_PHONE.replace(/\s/g, "")}`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 bg-emergency text-white p-4 rounded-full shadow-2xl md:hidden animate-pulse-glow"
      >
        <FiPhone size={24} />
      </motion.a>
    </div>
  );
}

export default Layout;