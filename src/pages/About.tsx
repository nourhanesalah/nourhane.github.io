import { motion } from 'framer-motion'
import nourhanePortrait from '../assets/nourhane_portrait.jpg'

function About() {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-serif text-nude-900 mb-6">About Me</h1>
            <div className="prose prose-nude">
              <p className="text-lg text-nude-700 mb-6">
                Hello! I'm Nourhane, a passionate visual designer with a keen eye for detail
                and a love for creating meaningful brand experiences and digital solutions.
              </p>
              <p className="text-lg text-nude-700 mb-6">
                My approach combines strategic thinking with creative execution,
                ensuring that every project not only looks beautiful but also
                effectively communicates its intended message.
              </p>
              <p className="text-lg text-nude-700 mb-6">
                When I'm not designing, you can find me exploring new art
                exhibitions, practicing photography, or experimenting with new
                creative techniques.
              </p>
              <blockquote className="text-xl font-serif text-nude-800 italic border-l-4 border-nude-300 pl-4 my-8">
                "Design is not just what it looks like and feels like. Design is how it works."
                <footer className="text-nude-600 text-base mt-2">— Steve Jobs</footer>
              </blockquote>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src={nourhanePortrait}
              alt="Nourhane standing in front of blooming cherry blossoms"
              className="rounded-lg shadow-lg w-full object-cover h-[600px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
