'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left side - Email with animated icon */}
        <Link href="mailto:ahmed.uneeb@yahoo.com" className="flex items-center gap-2 group">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-cyan-500 text-2xl"
          >
            <HiOutlineMail />
          </motion.div>
          <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
            ahmed.uneeb@yahoo.com
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${
                pathname === link.href
                  ? 'text-cyan-400 font-semibold'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md shadow-md overflow-hidden"
          >
            <ul className="flex flex-col items-center py-4 gap-4">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`transition-colors ${
                    pathname === link.href
                      ? 'text-cyan-500 font-semibold'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
