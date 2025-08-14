// 'use client'
// import { motion } from 'framer-motion'

// const experiences = [
//   {
//     role: "Data Analyst",
//     company: "Digital Ocean",
//     date: "Jan 2024 – Present",
//     details: [
//       "Created interactive Power BI dashboards for KPI tracking",
//       "Developed data pipelines for supply chain analytics"
//     ]
//   },
//   {
//     role: "Business Analyst",
//     company: "Berlin Brands Group",
//     date: "Jun 2021 – Dec 2023",
//     details: [
//       "Analyzed procurement spend and vendor performance",
//       "Worked with stakeholders to improve reporting processes"
//     ]
//   },
//   {
//     role: "Operations Analyst",
//     company: "OOCL",
//     date: "Feb 2019 – May 2021",
//     details: [
//       "Monitored logistics KPIs and improved workflow efficiency",
//       "Created weekly Excel reports for performance tracking"
//     ]
//   },
//   {
//     role: "Analyst",
//     company: "MCB Arif Habib",
//     date: "Jan 2018 – Jan 2019",
//     details: [
//       "Prepared financial performance reports",
//       "Supported business decision-making with data insights"
//     ]
//   }
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20 ">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-10">Experience</h2>
//         <div className="space-y-8">
//           {experiences.map((exp, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
//               initial={{opacity:0, y:50}}
//               whileInView={{opacity:1, y:0}}
//               viewport={{once:true}}
//               transition={{duration:0.5, delay: idx * 0.2}}
//               whileHover={{ scale: 1.02, y: -3 }}
//             >
//               <h3 className="text-xl font-semibold">{exp.role}</h3>
//               <p className="text-gray-600 mb-2">{exp.company} • {exp.date}</p>
//               <ul className="list-disc pl-5 text-gray-700 space-y-1">
//                 {exp.details.map((d, i) => (
//                   <li key={i}>{d}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import Link from 'next/link'

const experiences = [
  { role: "Data Analyst", company: "Digital Ocean", date: "Jan 2024 – Present" },
  { role: "Business Analyst", company: "Berlin Brands Group", date: "Jun 2021 – Dec 2023" },
  { role: "Operations Analyst", company: "OOCL", date: "Feb 2019 – May 2021" },
  { role: "Analyst", company: "MCB Arif Habib", date: "Jan 2018 – Jan 2019" }
]

export default function ExperienceShort() {
  return (
    <section id="experience" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-10"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="flex items-center gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="bg-fuchsia-100 p-3 rounded-full">
                <FaBriefcase className="text-fuchsia-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-2xl">{exp.role}</h3>
                <p className="text-xl text-gray-500">{exp.company} • {exp.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Experience Button */}
        <div className="mt-8 text-center">
          <Link href="/experience">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-fuchsia-600 text-white rounded-lg shadow hover:bg-fuchsia-700 transition"
            >
              View Full Experience →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
