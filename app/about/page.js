
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaCertificate,
  FaDatabase,
  FaPython,
  FaFileExcel,
  FaProjectDiagram
} from 'react-icons/fa'
import {
  SiPowerbi,
  SiTableau,
  SiMicrosoftsqlserver,
  SiSap
} from 'react-icons/si'

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6 w-full mx-auto bg-gray-900 text-gray-100 m-auto ">
      <div className="max-w-6xl mx-auto"> 
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-cyan-400">Who Am I?</h1>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          I am <span className="font-semibold text-white">Uneeb Ahmed</span>, a
          results-driven <strong className="text-cyan-400">Data & Business Analyst</strong>{' '}
          with over 8 years of experience in transforming complex datasets into
          clear, actionable strategies that improve business performance and
          operational efficiency.
          <br />
          <br />
          My career spans logistics, finance, and technology, where I have
          delivered impactful projects such as{' '}
          <span className="text-cyan-300">
            KPI dashboards, predictive analytics models, and automated reporting
            systems
          </span>
          .
          <br />
          <br />
          With expertise in{' '}
          <span className="text-cyan-300">
            SQL, Power BI, Tableau, Python, Excel, and SAP
          </span>
          , I specialize in{' '}
          <span className="text-cyan-300">
            data modeling, visualization, root cause analysis, and performance
            tracking
          </span>
          . I bridge the gap between raw data and executive decision-making to
          deliver measurable business value.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-cyan-400">
          <FaGraduationCap /> Education
        </h2>
        <div className="relative border-l-2 border-gray-700 pl-6 space-y-10">
          <div>
            <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold text-white">
              M.S. in Business Analytics Management
            </h3>
            <p className="text-gray-400 text-sm">
              Avila University, Kansas City, MO — CGPA 4.0
            </p>
            <p className="mt-2 text-gray-300">
              Specialized in data management, mining, machine learning, and
              statistical analysis with strong communication skills.
            </p>
            <span className="text-sm text-cyan-400 font-medium">
              2024 – Present
            </span>
          </div>

          <div>
            <div className="absolute -left-4 top-[180px] w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold text-white">
              MBA in Logistics & Supply Chain Management
            </h3>
            <p className="text-gray-400 text-sm">
              Institute of Business Management, Karachi — CGPA 3.44
            </p>
            <p className="mt-2 text-gray-300">
              Focused on supply chain analytics, logistics optimization, and
              inventory management using data-driven approaches.
            </p>
            <span className="text-sm text-cyan-400 font-medium">
              2016 – 2019
            </span>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-cyan-400">
          <FaCertificate /> Certifications
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            'Certified Supply Chain Professional (CSCP) – APICS',
            'Skills Competence Certificate – Harvard ManageMentor Program',
            'Professional Certificate in Anti-Bribery and Fraud'
          ].map((cert, idx) => (
            <span
              key={idx}
              className="px-5 py-2 rounded-full bg-gray-800 text-cyan-300 font-medium hover:bg-gray-700 transition"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-cyan-400">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaDatabase className="text-3xl text-blue-400" />,
              title: 'SQL',
              desc:
                'Designing, querying, and optimizing relational databases for performance and accuracy.'
            },
            {
              icon: <SiPowerbi className="text-3xl text-yellow-400" />,
              title: 'Power BI',
              desc:
                'Building interactive dashboards, creating DAX measures, and enabling data-driven decision-making.'
            },
            {
              icon: <FaPython className="text-3xl text-green-400" />,
              title: 'Python',
              desc:
                'Automating data workflows, performing statistical analysis, and building ML models with Pandas, NumPy, Scikit-learn.'
            },
            {
              icon: <SiSap className="text-3xl text-purple-400" />,
              title: 'SAP',
              desc:
                'Managing MM/SD modules, generating reports, and integrating analytics for business operations.'
            },
            {
              icon: <FaFileExcel className="text-3xl text-green-300" />,
              title: 'Excel',
              desc:
                'Advanced formulas, pivot tables, data cleaning, and creating dynamic reports.'
            },
            {
              icon: <SiTableau className="text-3xl text-orange-400" />,
              title: 'Tableau',
              desc:
                'Designing dashboards and visual stories using calculated fields and parameters.'
            },
            {
              icon: <SiMicrosoftsqlserver className="text-3xl text-red-400" />,
              title: 'MS SQL Server',
              desc:
                'Managing large datasets with stored procedures, indexing, and performance tuning.'
            },
            {
              icon: <FaProjectDiagram className="text-3xl text-indigo-400" />,
              title: 'Data Modeling',
              desc:
                'Creating ERDs, normalizing data, and structuring schemas for scalable solutions.'
            }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl hover:scale-105 transition transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {skill.icon}
              <h3 className="mt-4 font-semibold text-lg text-white">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
