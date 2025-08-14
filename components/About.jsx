
'use client'
import { FaDatabase, FaChartLine, FaPython } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaUserTie } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-semibold">About</h2>
        <p className="mt-3 text-gray-700 max-w-3xl text-2xl">
          Detail-oriented Data Analyst and Business Analyst with over 8 years of experience
          in translating complex data into actionable insights. Skilled in SQL, Excel,
          Tableau, Power BI, and SAP with strong expertise in data modeling, KPI development,
          dashboard design, and root cause analysis.
        </p>

        {/* Skills Grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow flex items-center gap-3">
            <FaDatabase className="text-3xl text-blue-600" />
            <div>
              <div className="font-semibold text-xl">SQL</div>
              <div className="text-sm text-gray-500">Data modeling & queries</div>
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow flex items-center gap-3">
            <FaChartLine className="text-3xl text-green-600" />
            <div>
              <div className="font-semibold text-xl">Power BI</div>
              <div className="text-sm text-gray-500">Dashboards & forecasting</div>
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow flex items-center gap-3">
            <FaPython className="text-3xl text-yellow-600" />
            <div>
              <div className="font-semibold text-xl">Python</div>
              <div className="text-sm text-gray-500">Pandas, automation</div>
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow flex items-center gap-3">
            <div className="text-3xl text-purple-600">💼</div>
            <div>
              <div className="font-semibold text-xl">SAP</div>
              <div className="text-sm text-gray-500">MM/SD & Fiori</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          {/* Hire Me Button */}
          <a
            href="mailto:ahmed.uneeb@yahoo.com"
            className="flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-violet-600 transition"
          >
            Hire Me
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <HiArrowNarrowRight />
            </motion.div>
          </a>

          {/* Learn More Button */}
          <a
            href="/about"
            className="flex items-center gap-2 border border-violet-500 text-violet-500 px-6 py-3 rounded-full hover:bg-violet-500 hover:text-white transition"
          >
            <FaUserTie />
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  )
}
