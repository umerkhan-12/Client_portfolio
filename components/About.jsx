
// 'use client'
// import { FaDatabase, FaChartLine, FaPython } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { HiArrowNarrowRight } from 'react-icons/hi'
// import { FaUserTie } from 'react-icons/fa'

// export default function About() {
//   return (
//     <section id="about" className="max-w-6xl mx-auto px-6 py-12">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-5xl font-semibold">About</h2>
//         <p className="mt-3 text-gray-700 max-w-3xl text-xl">
//           Detail-oriented Data Analyst and Business Analyst with over 8 years of experience
//           in translating complex data into actionable insights. Skilled in SQL, Excel,
//           Tableau, Power BI, and SAP with strong expertise in data modeling, KPI development,
//           dashboard design, and root cause analysis.
//         </p>

//         {/* Skills Grid */}
//         <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="p-4 bg-white rounded shadow flex items-center gap-3">
//             <FaDatabase className="text-3xl text-blue-600" />
//             <div>
//               <div className="font-semibold text-xl">SQL</div>
//               <div className="text-sm text-gray-500">Data modeling & queries</div>
//             </div>
//           </div>
//           <div className="p-4 bg-white rounded shadow flex items-center gap-3">
//             <FaChartLine className="text-3xl text-green-600" />
//             <div>
//               <div className="font-semibold text-xl">Power BI</div>
//               <div className="text-sm text-gray-500">Dashboards & forecasting</div>
//             </div>
//           </div>
//           <div className="p-4 bg-white rounded shadow flex items-center gap-3">
//             <FaPython className="text-3xl text-yellow-600" />
//             <div>
//               <div className="font-semibold text-xl">Python</div>
//               <div className="text-sm text-gray-500">Pandas, automation</div>
//             </div>
//           </div>
//           <div className="p-4 bg-white rounded shadow flex items-center gap-3">
//             <div className="text-3xl text-purple-600">💼</div>
//             <div>
//               <div className="font-semibold text-xl">SAP</div>
//               <div className="text-sm text-gray-500">MM/SD & Fiori</div>
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-wrap gap-4">
//           {/* Hire Me Button */}
//           <a
//             href="mailto:ahmed.uneeb@yahoo.com"
//             className="flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-violet-600 transition"
//           >
//             Hire Me
//             <motion.div
//               animate={{ x: [0, 5, 0] }}
//               transition={{ repeat: Infinity, duration: 1 }}
//             >
//               <HiArrowNarrowRight />
//             </motion.div>
//           </a>

//           {/* Learn More Button */}
//           <a
//             href="/about"
//             className="flex items-center gap-2 border border-violet-500 text-violet-500 px-6 py-3 rounded-full hover:bg-violet-500 hover:text-white transition"
//           >
//             <FaUserTie />
//             Learn More
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   )
// }
'use client'
import { FaDatabase, FaChartLine, FaPython } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaUserTie } from 'react-icons/fa'

export default function About() {
  return (
    <section 
      id="about" 
      className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-white via-fuchsia-50/30 to-white rounded-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          About Me
        </h2>
        <p 
          className="mt-3 text-gray-700 max-w-3xl text-lg leading-relaxed"
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
            { icon: <FaDatabase className="text-3xl text-blue-600" />, title: "SQL", desc: "Data modeling & queries" },
            { icon: <FaChartLine className="text-3xl text-green-600" />, title: "Power BI", desc: "Dashboards & forecasting" },
            { icon: <FaPython className="text-3xl text-yellow-600" />, title: "Python", desc: "Pandas, automation" },
            { icon: <span className="text-3xl text-purple-600">💼</span>, title: "SAP", desc: "MM/SD & Fiori" }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg flex items-center gap-3 transition"
            >
              {skill.icon}
              <div>
                <div 
                  className="font-semibold text-lg"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {skill.title}
                </div>
                <div 
                  className="text-sm text-gray-500"
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
            className="flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-violet-700 transition"
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
            className="flex items-center gap-2 border border-violet-500 text-violet-600 px-6 py-3 rounded-full hover:bg-violet-600 hover:text-white transition"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            <FaUserTie />
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  )
}
