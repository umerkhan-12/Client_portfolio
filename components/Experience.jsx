// // 'use client'
// // import { motion } from 'framer-motion'
// // import { FaBriefcase } from 'react-icons/fa'
// // import Link from 'next/link'

// // const experiences = [
// //   {
// //     role: "Asset & Logistics Analytics Manager",
// //     company: "Digital Ocean",
// //     date: "May 2023 – Sep 2024",
// //     points: [
// //       "Reduced aged inventory by 35% across EU warehouses through advanced analytics.",
// //       "Developed automated forecasting models for demand planning."
// //     ]
// //   },
// //   {
// //     role: "Senior Analyst – Supply Chain & Data Analytics",
// //     company: "Berlin Brands Group / Novatex / Leverify",
// //     date: "Dec 2021 – Apr 2023",
// //     points: [
// //       "Consolidated multi-country data for unified KPI tracking.",
// //       "Enhanced forecasting accuracy to reduce stockouts."
// //     ]
// //   },
// //   {
// //     role: "Assistant Logistics & Fincon (Financial Controls)",
// //     company: "OOCL",
// //     date: "Mar 2018 – Nov 2021",
// //     points: [
// //       "Optimized freight efficiency via cost models & dashboards.",
// //       "Automated customs audit tools to speed up clearance."
// //     ]
// //   },
// //   {
// //     role: "Management Trainee – Finance & Fund Accounting",
// //     company: "MCB Arif Habib",
// //     date: "Nov 2015 – Feb 2018",
// //     points: [
// //       "Performed NAV calculations and portfolio performance tracking.",
// //       "Built automated templates to streamline reporting."
// //     ]
// //   }
// // ]

// // export default function ExperienceShort() {
// //   return (
// //     <section id="experience" className="py-20 bg-gradient-to-b from-white/60 to-purple-50 backdrop-blur-sm">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5 }}
// //           className="text-5xl font-bold mb-12 text-gray-800"
// //         >
// //           Experience
// //         </motion.h2>

// //         <div className="relative border-l-4 border-fuchsia-200 pl-6 space-y-8">
// //           {experiences.map((exp, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, x: -20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: idx * 0.15 }}
// //               className="relative"
// //             >
// //               {/* Dot */}
// //               <div className="absolute -left-[29px] top-2 w-5 h-5 bg-fuchsia-500 rounded-full border-4 border-white shadow" />

// //               {/* Card */}
// //               <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <FaBriefcase className="text-fuchsia-600 text-2xl font-semibold" />
// //                   <h3 className="font-semibold text-xl text-gray-800">{exp.role}</h3>
// //                 </div>
// //                 <p className="text-gray-500 text-xlb-3 font-semibold">
// //                   {exp.company} • {exp.date}
// //                 </p>
// //                 <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
// //                   {exp.points.map((point, i) => (
// //                     <li key={i}>{point}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* View Full Experience Button */}
// //         <div className="mt-10 text-center">
// //           <Link href="/experience">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-6 py-3 bg-fuchsia-600 text-white rounded-full shadow hover:bg-fuchsia-700 transition"
// //             >
// //               View Full Experience →
// //             </motion.button>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
'use client'
import { motion } from 'framer-motion'
import { FaBriefcase, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const experiences = [
  {
    role: "Asset & Logistics Analytics Manager",
    company: "Digital Ocean",
    date: "May 2023 – Sep 2024",
    points: [
      "Reduced aged inventory by 35% across EU warehouses through advanced analytics.",
      "Developed automated forecasting models for demand planning."
    ]
  },
  {
    role: "Senior Analyst – Supply Chain & Data Analytics",
    company: "Berlin Brands Group / Novatex / Leverify",
    date: "Dec 2021 – Apr 2023",
    points: [
      "Consolidated multi-country data for unified KPI tracking.",
      "Enhanced forecasting accuracy to reduce stockouts."
    ]
  },
  {
    role: "Assistant Logistics & Fincon (Financial Controls)",
    company: "OOCL",
    date: "Mar 2018 – Nov 2021",
    points: [
      "Optimized freight efficiency via cost models & dashboards.",
      "Automated customs audit tools to speed up clearance."
    ]
  },
  {
    role: "Management Trainee – Finance & Fund Accounting",
    company: "MCB Arif Habib",
    date: "Nov 2015 – Feb 2018",
    points: [
      "Performed NAV calculations and portfolio performance tracking.",
      "Built automated templates to streamline reporting."
    ]
  }
]

export default function ExperienceShort() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white/60 to-purple-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading with LinkedIn */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-800"
          >
            Experience
          </motion.h2>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/uneeb-ahmed" // Uneeb's LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
            className="mt-4 sm:mt-0 text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-4xl" />
          </motion.a>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-fuchsia-200 pl-6 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[29px] top-2 w-5 h-5 bg-fuchsia-500 rounded-full border-4 border-white shadow" />

              {/* Card */}
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-fuchsia-100 p-3 rounded-full">
                    <FaBriefcase className="text-fuchsia-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {exp.company} • {exp.date}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Experience Button */}
        <div className="mt-10 text-center">
          <Link href="/experience">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-fuchsia-600 text-white rounded-full shadow hover:bg-fuchsia-700 transition"
            >
              View Full Experience →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}


