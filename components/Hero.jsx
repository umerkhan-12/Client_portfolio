'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'

export default function Hero() {
  const words = ["Data Analyst", "Business Analyst", "Supply Chain Expert"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 mb-14 text-center md:text-left">
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 leading-tight"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Uneeb Ahmed
        </motion.h1>

        {/* Underline accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-1 bg-violet-400 mt-3 mb-5 rounded-full mx-auto md:mx-0"
        ></motion.div>

        {/* Rotating job titles */}
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl text-gray-700 font-medium"
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          {words[index]}
        </motion.p>

        {/* Download Resume button */}
        <motion.a
          href="/resume.pdf" // Replace with your actual file path
          download
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-violet-600 text-white font-medium rounded-full shadow hover:bg-violet-700 transition"
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          <FaDownload className="text-lg" />
          Download Resume
        </motion.a>

      </div>
    </section>
  )
}

