"use client"
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Languages', color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Languages', color: 'from-blue-500 to-cyan-500' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Languages', color: 'from-blue-500 to-cyan-500' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Languages', color: 'from-blue-500 to-cyan-500' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frameworks', color: 'from-green-500 to-emerald-500' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Frameworks', color: 'from-green-500 to-emerald-500' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Frameworks', color: 'from-green-500 to-emerald-500' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'AI/ML', color: 'from-purple-500 to-pink-500' },
  { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', category: 'AI/ML', color: 'from-purple-500 to-pink-500' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', category: 'AI/ML', color: 'from-purple-500 to-pink-500' },

  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Databases', color: 'from-yellow-500 to-amber-500' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Databases', color: 'from-yellow-500 to-amber-500' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Other', color: 'from-indigo-500 to-blue-500' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Other', color: 'from-indigo-500 to-blue-500' },
  { name: 'Azure AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'Other', color: 'from-indigo-500 to-blue-500' },
  { name: 'APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'Other', color: 'from-indigo-500 to-blue-500' }
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

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto transition-colors duration-500">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-6 px-2 text-secondary-900 dark:text-white transition-colors duration-500"
      >
        <span className="inline-block bg-white/95 dark:bg-navy-900/75 text-secondary-900 dark:text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-500">
          Skills
        </span>
      </motion.h2>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-6 flex flex-row flex-wrap gap-6 justify-center">
        {skills.map(s => <SkillCard key={s.name} {...s} />)}
      </motion.div>
    </div>
  )
}
