"use client"
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Sign Language Detection System',
    desc: 'A computer vision & deep learning system to interpret sign gestures into text/speech.',
    tech: 'Python, OpenCV, TensorFlow',
    links: { github: 'https://github.com/akshatsharma09/Sign_Language_Detection', demo: '#' }
  },
  {
    title: 'Flappy Bird',
    desc: 'Developed a Flappy Bird game in Python using PyGame with a clean OOP-based structure. Implemented real-time collision detection and a smooth 60+ FPS gameplay loop. Showcased strong skills in graphics programming and event-driven logic.',
    tech: 'Python, TensorFlow, Pygame',
    links: { github: 'https://github.com/akshatsharma09/Flappy-Bird', demo: '#' }
  },
  {
    title: 'Skill-Link AI',
    desc: 'AI-driven platform connecting freelancers with projects based on skill matching and recommendation algorithms.',
    tech: 'React, Node.js, MongoDB, Machine Learning',
    links: { github: 'https://github.com/akshatsharma09/Skill_Link-AI', demo: '#' }
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto transition-colors duration-500">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-6 px-2 text-secondary-900 dark:text-white transition-colors duration-500"
      >
        <span className="inline-block bg-white/95 dark:bg-navy-900/75 text-secondary-900 dark:text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-500">
          Projects
        </span>
      </motion.h2>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </motion.div>
    </div>
  )
}
