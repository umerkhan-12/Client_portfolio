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
    <section className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6">Who I'm?</h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          I am Uneeb Ahmed, a results-driven <strong>Data & Business Analyst</strong>
          with over 8 years of experience in transforming complex datasets into
          clear, actionable strategies that improve business performance and
          operational efficiency. My career spans multiple industries including
          logistics, finance, and technology, where I have delivered
          high-impact projects such as <strong>KPI dashboards, predictive
          analytics models, and automated reporting systems</strong>.
          <br /><br />
          With advanced proficiency in tools such as <strong>SQL, Power BI,
          Tableau, Python, Excel, and SAP</strong>, I specialize in <strong>data
          modeling, visualization, root cause analysis, and performance
          tracking</strong>. My approach combines technical expertise with a
          deep understanding of business processes, enabling me to bridge the
          gap between raw data and executive decision-making. I am passionate
          about leveraging data-driven insights to guide strategic planning,
          improve workflows, and create measurable business value.
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
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-violet-600">
          <FaGraduationCap /> Education
        </h2>
        <div className="relative border-l-2 border-violet-200 pl-6 space-y-10">
          <div>
            <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold">
              M.S. in Business Analytics Management
            </h3>
            <p className="text-gray-600 text-sm">
              Avila University, Kansas City, MO — CGPA 4.0
            </p>
            <p className="mt-2 text-gray-700">
              Specialized in data management, mining, machine learning, and
              statistical analysis with strong communication skills for
              presenting analytical insights.
            </p>
            <span className="text-sm text-violet-500 font-medium">
              2024 – Present
            </span>
          </div>

          <div>
            <div className="absolute -left-4 top-[180px] w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold">
              MBA in Logistics & Supply Chain Management
            </h3>
            <p className="text-gray-600 text-sm">
              Institute of Business Management, Karachi — CGPA 3.44
            </p>
            <p className="mt-2 text-gray-700">
              Focused on supply chain analytics, logistics optimization, and
              inventory management, applying data-driven approaches to improve
              efficiency.
            </p>
            <span className="text-sm text-violet-500 font-medium">
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
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-violet-600">
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
              className="px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-medium hover:bg-violet-200 transition"
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
        <h2 className="text-2xl font-semibold mb-8 text-violet-600">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaDatabase className="text-3xl text-blue-500" />,
              title: 'SQL',
              desc:
                'Designing, querying, and optimizing relational databases for performance and accuracy.'
            },
            {
              icon: <SiPowerbi className="text-3xl text-yellow-500" />,
              title: 'Power BI',
              desc:
                'Building interactive dashboards, creating DAX measures, and enabling data-driven decision-making.'
            },
            {
              icon: <FaPython className="text-3xl text-green-500" />,
              title: 'Python',
              desc:
                'Automating data workflows, performing statistical analysis, and building machine learning models with Pandas, NumPy, and Scikit-learn.'
            },
            {
              icon: <SiSap className="text-3xl text-purple-500" />,
              title: 'SAP',
              desc:
                'Managing modules like MM/SD, generating reports, and integrating analytics for business operations.'
            },
            {
              icon: <FaFileExcel className="text-3xl text-green-600" />,
              title: 'Excel',
              desc:
                'Advanced formulas, pivot tables, data cleaning, and creating dynamic reports.'
            },
            {
              icon: <SiTableau className="text-3xl text-orange-500" />,
              title: 'Tableau',
              desc:
                'Designing visual stories and dashboards for deep insights using calculated fields and parameters.'
            },
            {
              icon: <SiMicrosoftsqlserver className="text-3xl text-red-500" />,
              title: 'MS SQL Server',
              desc:
                'Administering, securing, and managing large datasets with stored procedures and indexing.'
            },
            {
              icon: <FaProjectDiagram className="text-3xl text-indigo-500" />,
              title: 'Data Modeling',
              desc:
                'Creating ERDs, normalizing data, and structuring schemas to support scalable solutions.'
            }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white/40 backdrop-blur-md rounded-lg shadow hover:shadow-xl hover:scale-105 transition transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {skill.icon}
              <h3 className="mt-4 font-semibold text-lg">{skill.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
