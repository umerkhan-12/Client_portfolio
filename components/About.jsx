'use client'
import { FaDatabase, FaChartLine, FaPython } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaUserTie } from 'react-icons/fa'

export default function About() {
  return (
    <section 
      id="about" 
      className="w-full mx-auto px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 "
    >
      <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          About Me
        </h2>
        <div className="h-1 w-32 bg-cyan-400 rounded-full mb-6"></div>

        <p 
          className="mt-3 text-gray-300 max-w-3xl text-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-lato)' }}
        >
          Detail-oriented Data Analyst and Business Analyst with over <strong>8 years</strong> of experience
          in translating complex data into actionable insights. Skilled in <strong>SQL, Excel, Tableau, Power BI,</strong> 
          and <strong>SAP</strong> with strong expertise in data modeling, KPI development, dashboard design, 
          and root cause analysis.
        </p>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaDatabase className="text-3xl text-cyan-400" />, title: "SQL", desc: "Data modeling & queries" },
            { icon: <FaChartLine className="text-3xl text-cyan-400" />, title: "Power BI", desc: "Dashboards & forecasting" },
            { icon: <FaPython className="text-3xl text-cyan-400" />, title: "Python", desc: "Pandas, automation" },
            { icon: <span className="text-3xl text-cyan-400">💼</span>, title: "SAP", desc: "MM/SD & Fiori" }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-gray-800 rounded-lg shadow-md hover:shadow-cyan-400/40 flex items-center gap-3 transition"
            >
              {skill.icon}
              <div>
                <div 
                  className="font-semibold text-lg text-white"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {skill.title}
                </div>
                <div 
                  className="text-sm text-gray-400"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  {skill.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:ahmed.uneeb@yahoo.com"
            className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-cyan-600 transition"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Hire Me
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <HiArrowNarrowRight />
            </motion.div>
          </a>

          <a
            href="/about"
            className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            <FaUserTie />
            Learn More
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
