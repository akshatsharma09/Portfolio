"use client"
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Sign Language Detection System',
    desc: 'A computer vision & deep learning system to interpret sign gestures into text/speech.',
    tech: 'Python, OpenCV, TensorFlow',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Vulnerability Scanner (Code for Bharat)',
    desc: 'Team project to detect security loopholes in web systems; scanning and reporting tool.',
    tech: 'Node.js, Express, Puppeteer',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'AI Phishing Detection',
    desc: 'ML classifier to detect phishing URLs using feature engineering and ensemble models.',
    tech: 'Python, scikit-learn, Flask',
    links: { github: '#', demo: '#' }
  }
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </div>
  )
}
