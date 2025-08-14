'use client'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "Supply Chain KPI Dashboard",
    description: "Power BI dashboard tracking supply chain performance metrics.",
    tech: ["Power BI", "SQL", "Excel"],
    link: "#"
  },
  {
    title: "Procurement Spend Analysis",
    description: "Tableau analysis of procurement costs and vendor performance.",
    tech: ["Tableau", "Excel"],
    link: "#"
  },
  {
    title: "Python Logistics Data Cleaner",
    description: "Python script for cleaning and preparing logistics datasets.",
    tech: ["Python", "Pandas"],
    link: "#"
  },
  {
    title: "Forecast Model",
    description: "Excel + Power BI forecasting for demand planning.",
    tech: ["Excel", "Power BI"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay: idx * 0.2}}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
