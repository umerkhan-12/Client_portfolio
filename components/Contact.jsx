'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import Image from 'next/image'
import { Montserrat, Lato } from 'next/font/google'

// Import fonts
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center relative overflow-hidden"
    >
      {/* Gradient Blobs for depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>

      {/* Illustration */}
      <div className="relative w-full flex justify-center mb-10">
        <Image
          src="/images/chatting.svg"
          alt="Contact Illustration"
          width={400}
          height={400}
          className="drop-shadow-xl"
        />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${montserrat.className} text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-cyan-300 to-green-400 bg-clip-text text-transparent`}
      >
        Let’s Collaborate on Data & Supply Chain Solutions
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`${lato.className} max-w-2xl mx-auto text-lg text-gray-300 mb-8`}
      >
        Whether you want to optimize supply chain operations, improve forecasting, or build
        powerful dashboards — I help turn data into actionable business strategies.
        Let’s connect and create measurable impact together.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Link
          href="/contact"
          className={`${montserrat.className} inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-medium rounded-full shadow-lg transition`}
        >
          Get in Touch
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <HiArrowRight />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

