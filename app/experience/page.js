// 'use client'
// import { motion } from 'framer-motion'
// import { FaBuilding, FaChartLine, FaCogs, FaDatabase } from 'react-icons/fa'

// const experiences = [
//   {
//     role: "Data Analyst",
//     company: "Digital Ocean",
//     date: "Jan 2024 – Present",
//     details: [
//       "Designed and deployed interactive Power BI dashboards to track KPIs across departments.",
//       "Built automated data pipelines integrating SQL queries and Python scripts for supply chain analytics.",
//       "Collaborated with cross-functional teams to deliver actionable insights for decision-making."
//     ],
//     tech: ["Power BI", "SQL", "Python"],
//     color: "from-fuchsia-500 to-purple-500",
//     icon: <FaDatabase />
//   },
//   {
//     role: "Business Analyst",
//     company: "Berlin Brands Group",
//     date: "Jun 2021 – Dec 2023",
//     details: [
//       "Analyzed procurement spend, vendor performance, and operational bottlenecks.",
//       "Led data-driven recommendations that improved reporting accuracy by 25%.",
//       "Developed Tableau and Power BI dashboards for management reporting."
//     ],
//     tech: ["Excel", "Power BI", "Tableau"],
//     color: "from-blue-500 to-cyan-500",
//     icon: <FaChartLine />
//   },
//   {
//     role: "Operations Analyst",
//     company: "OOCL",
//     date: "Feb 2019 – May 2021",
//     details: [
//       "Monitored logistics KPIs and implemented process improvements that increased efficiency by 15%.",
//       "Generated weekly performance reports in Excel and SQL for operations review.",
//       "Worked closely with port teams to optimize cargo handling timelines."
//     ],
//     tech: ["Excel", "SQL", "Logistics Data"],
//     color: "from-green-500 to-emerald-500",
//     icon: <FaCogs />
//   },
//   {
//     role: "Analyst",
//     company: "MCB Arif Habib",
//     date: "Jan 2018 – Jan 2019",
//     details: [
//       "Prepared financial performance reports for senior management.",
//       "Provided business insights through data-driven reporting in SAP and Excel.",
//       "Assisted in developing reporting frameworks to improve tracking of KPIs."
//     ],
//     tech: ["Excel", "SAP", "Reporting"],
//     color: "from-orange-500 to-yellow-500",
//     icon: <FaBuilding />
//   }
// ]

// export default function ExperiencePage() {
//   return (
//     <section className="relative max-w-7xl mx-auto px-6 py-20">
//       {/* Background gradient */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50 to-white"></div>

//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold mb-16 text-center text-gray-800"
//       >
//         My Professional Journey
//       </motion.h1>

//       <div className="space-y-16">
//         {experiences.map((exp, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: idx * 0.1 }}
//             className={`flex flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-8`}
//           >
//             {/* Icon circle */}
//             <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg text-3xl`}>
//               {exp.icon}
//             </div>

//             {/* Experience details */}
//             <div className="flex-1 bg-white shadow-lg rounded-lg p-6 border-l-4 border-fuchsia-400 hover:shadow-xl transition">
//               <h3 className="text-2xl font-semibold">{exp.role}</h3>
//               <p className="text-gray-500 mb-3">{exp.company} • {exp.date}</p>
              
//               <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
//                 {exp.details.map((detail, i) => (
//                   <li key={i}>{detail}</li>
//                 ))}
//               </ul>

//               <div className="flex flex-wrap gap-2">
//                 {exp.tech.map((tech, i) => (
//                   <span key={i} className="px-3 py-1 text-sm bg-fuchsia-100 text-fuchsia-700 rounded-full">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaDatabase, FaChartLine, FaCogs, FaBuilding } from 'react-icons/fa'

const experiences = [
  {
    role: "Data Analyst",
    company: "Digital Ocean",
    date: "Jan 2024 – Present",
    details: [
      "Designed and deployed interactive Power BI dashboards to track KPIs.",
      "Built automated data pipelines integrating SQL & Python for analytics.",
      "Collaborated with teams to deliver actionable insights."
    ],
    tech: ["Power BI", "SQL", "Python"],
    color: "from-fuchsia-500 to-purple-500",
    icon: <FaDatabase />
  },
  {
    role: "Business Analyst",
    company: "Berlin Brands Group",
    date: "Jun 2021 – Dec 2023",
    details: [
      "Analyzed procurement spend & vendor performance.",
      "Improved reporting accuracy by 25% through data-driven recommendations.",
      "Developed Tableau and Power BI dashboards for management."
    ],
    tech: ["Excel", "Power BI", "Tableau"],
    color: "from-blue-500 to-cyan-500",
    icon: <FaChartLine />
  },
  {
    role: "Operations Analyst",
    company: "OOCL",
    date: "Feb 2019 – May 2021",
    details: [
      "Improved logistics efficiency by 15% through process changes.",
      "Created Excel & SQL reports for performance tracking.",
      "Worked with port teams to optimize cargo handling."
    ],
    tech: ["Excel", "SQL", "Logistics Data"],
    color: "from-green-500 to-emerald-500",
    icon: <FaCogs />
  },
  {
    role: "Analyst",
    company: "MCB Arif Habib",
    date: "Jan 2018 – Jan 2019",
    details: [
      "Prepared financial performance reports.",
      "Provided business insights using SAP & Excel.",
      "Developed KPI tracking frameworks."
    ],
    tech: ["Excel", "SAP", "Reporting"],
    color: "from-orange-500 to-yellow-500",
    icon: <FaBuilding />
  }
]

export default function ExperiencePage() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev + 1) % experiences.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + experiences.length) % experiences.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white px-4 sm:px-6">
      
      {/* Heading */}
      <h1 className="absolute top-20 sm:top-24 text-2xl sm:text-4xl font-bold text-gray-800 text-center px-4"> 
        My Professional Journey
      </h1>

      {/* Slider Container */}
      <div className="relative w-full h-full flex items-center justify-center mt-20 sm:mt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full flex justify-center"
          >
            <div className="max-w-5xl w-full mx-auto p-6 sm:p-8 bg-white shadow-xl rounded-lg border-l-4 border-fuchsia-400 text-center sm:text-left">
              
              {/* Icon */}
              <div className={`mx-auto sm:mx-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r ${experiences[index].color} flex items-center justify-center text-white text-3xl sm:text-4xl shadow-lg mb-4 sm:mb-6`}>
                {experiences[index].icon}
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-3xl font-semibold">{experiences[index].role}</h3>
              <p className="text-gray-500 mb-4 text-sm sm:text-base">{experiences[index].company} • {experiences[index].date}</p>

              {/* Details */}
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base text-left sm:text-left max-w-3xl mx-auto sm:mx-0">
                {experiences[index].details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {experiences[index].tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs sm:text-sm bg-fuchsia-100 text-fuchsia-700 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide} 
          className="absolute left-3 sm:left-6 text-xl sm:text-3xl p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-3 sm:right-6 text-xl sm:text-3xl p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-8 flex gap-3">
        {experiences.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${i === index ? 'bg-fuchsia-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  )
}

