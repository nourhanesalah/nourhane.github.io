import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Import featured images
import elGounaPlusFeatured from '../assets/projects/el-gouna-plus/cover.jpg'
import ppnBrandFeatured from '../assets/projects/ppn-brand/cover.jpg'
import talesOfArabiaFeatured from '../assets/projects/tales-of-arabia/cover.jpg'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-nude-100">
        <div className="page-container min-h-[80vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-nude-900 mb-8 leading-tight">
              Nourhane Attia
              <span className="block text-3xl md:text-4xl text-nude-600 mt-4">Visual Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-nude-700 mb-12 leading-relaxed">
              Creating meaningful brand experiences through thoughtful design and creative solutions.
            </p>
            <Link
              to="/portfolio/branding"
              className="btn-primary text-lg"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="page-container py-24">
        <h2 className="text-3xl font-serif text-nude-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedProject
            image={ppnBrandFeatured}
            title="PrintPicsNow"
            category="Branding"
            link="/portfolio/branding"
            delay={0.2}
          />
          <FeaturedProject
            image={elGounaPlusFeatured}
            title="El Gouna Plus"
            category="UX/UI Design"
            link="/portfolio/ux-ui"
            delay={0.4}
          />
          <FeaturedProject
            image={talesOfArabiaFeatured}
            title="Tales of Arabia"
            category="Illustration"
            link="/portfolio/illustration"
            delay={0.6}
          />
        </div>
      </section>

      {/* Categories */}
      <section className="page-container py-24 bg-nude-100">
        <h2 className="text-3xl font-serif text-nude-900 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            title="Branding"
            description="Identity design and brand strategy that tells your story and connects with your audience"
            link="/portfolio/branding"
            delay={0.2}
          />
          <CategoryCard
            title="UX/UI Design"
            description="User-centered digital experiences that combine beauty with functionality"
            link="/portfolio/ux-ui"
            delay={0.4}
          />
          <CategoryCard
            title="Illustration"
            description="Custom artwork and visual storytelling that brings your ideas to life"
            link="/portfolio/illustration"
            delay={0.6}
          />
        </div>
      </section>
    </div>
  )
}

function FeaturedProject({ image, title, category, link, delay }: {
  image: string
  title: string
  category: string
  link: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl aspect-[4/3]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-serif mb-1">{title}</h3>
        <p className="text-nude-200 mb-4">{category}</p>
        <Link to={link} className="text-white font-medium group-hover:underline">
          View Project →
        </Link>
      </div>
    </motion.div>
  )
}

function CategoryCard({ title, description, link, delay }: {
  title: string
  description: string
  link: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-2xl font-serif text-nude-900 mb-4">{title}</h3>
      <p className="text-nude-600 mb-6 text-lg">{description}</p>
      <Link to={link} className="text-nude-800 hover:text-nude-600 font-medium inline-flex items-center">
        View Projects
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  )
}

export default Home
