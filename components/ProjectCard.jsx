'use client'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full"
    >
      <div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          View Project <FaExternalLinkAlt className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  )
}
