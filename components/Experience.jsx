"use client"
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Edunet Foundation',
    subtitle: 'Internship — Azure AI Fundamentals',
    period: '2024',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    description: 'Completed comprehensive training in Azure AI services, including machine learning models, cognitive services, and cloud-based AI solutions.'
  },
  {
    title: 'Summer Training',
    subtitle: 'AI & Machine Learning',
    period: '2024',
    icon: '🎓',
    color: 'from-green-500 to-emerald-500',
    description: 'Intensive hands-on training in artificial intelligence and machine learning algorithms, covering neural networks, deep learning, and practical applications.'
  },
  {
    title: 'Academic Achievements',
    subtitle: 'College Recognition & Competitions',
    period: '2023-2024',
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500',
    description: 'Secured 3rd position in first semester, participated in Code for Bharat hackathon, and competed in Naukri Campus Contest showcasing problem-solving skills.'
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

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
}

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Experience & Achievements
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            variants={itemVariants}
            className="relative flex items-start mb-12"
          >
            {/* Timeline dot */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}
            >
              {exp.icon}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-50 animate-ping`} />
            </motion.div>

            {/* Content */}
            <motion.div
              whileHover={{ x: 10 }}
              className="ml-6 flex-1 bg-white/5 dark:bg-white/5 rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-indigo-400 dark:text-indigo-300 font-medium">{exp.subtitle}</p>
                </div>
                <span className="text-sm text-slate-400 dark:text-slate-500 mt-2 md:mt-0 px-3 py-1 bg-white/10 dark:bg-black/20 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-200 dark:text-slate-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
