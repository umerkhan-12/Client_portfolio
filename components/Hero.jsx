'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero(){
  const words = ["Data Analyst", "Business Analyst", "Supply Chain Expert"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-20 overflow-hidden">
  
      <div className="max-w-6xl mx-auto px-6 py-20 mb-14">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.8}}
          className="text-4xl md:text-9xl font-extrabold"
        >
          Uneeb Ahmed
        </motion.h1>
        <motion.p 
          key={index}
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="mt-4 text-lg md:text-5xl text-gray-600"
        >
          {words[index]}
        </motion.p>
      </div>
      
    </section>
  )
}
