"use client"
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Sign Language Detection System',
    desc: 'A computer vision & deep learning system to interpret sign gestures into text/speech.',
    tech: 'Python, OpenCV, TensorFlow',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Flappy Bird AI',
    desc: 'AI-powered Flappy Bird game using reinforcement learning and neural networks for autonomous gameplay.',
    tech: 'Python, TensorFlow, Pygame',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Skill-Link AI',
    desc: 'AI-driven platform connecting freelancers with projects based on skill matching and recommendation algorithms.',
    tech: 'React, Node.js, MongoDB, Machine Learning',
    links: { github: '#', demo: '#' }
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
    <div className="max-w-6xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-black dark:text-white">Projects</motion.h2>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </motion.div>
    </div>
  )
}
