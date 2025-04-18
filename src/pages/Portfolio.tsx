import { motion } from 'framer-motion'

// Import images
import afroArt from '../assets/projects/afroart/cover.jpg'
import beachKiosk from '../assets/projects/beach-kiosk/cover.jpg'
import elGounaPlus from '../assets/projects/el-gouna-plus/cover.jpg'
import ppnBrand from '../assets/projects/ppn-brand/cover.jpg'
import printPicsNow from '../assets/projects/printpicsnow/cover.jpg'
import rubaShakra from '../assets/projects/ruba-shakra/cover.jpg'
import summertimeBlooms from '../assets/projects/summertime-blooms/cover.jpg'
import talesOfArabia from '../assets/projects/tales-of-arabia/cover.jpg'
import workPeace from '../assets/projects/work-peace/cover.jpg'

// Project data organized by category
const projects = {
  branding: [
    {
      id: 1,
      title: "PrintPicsNow Brand Identity",
      description: "Complete brand identity for a modern photo printing service",
      image: ppnBrand,
      behanceUrl: "https://www.behance.net/gallery/120184095/PPN-Brand-Identity",
    },
    {
      id: 2,
      title: "Ruba Shakra",
      description: "Brand identity for a luxury jewelry designer",
      image: rubaShakra,
      behanceUrl: "https://www.behance.net/gallery/216478589/Ruba-Shakra-Branding-Project",
    },
    {
      id: 3,
      title: "Beach Kiosk",
      description: "Branding for a coastal refreshment stand",
      image: beachKiosk,
      behanceUrl: "https://www.behance.net/gallery/83125309/Beach-Kiosk-Menu",
    }
  ],
  "ux-ui": [
    {
      id: 1,
      title: "El Gouna Plus",
      description: "Mobile app design for a resort community platform",
      image: elGounaPlus,
      behanceUrl: "https://www.behance.net/gallery/166391789/El-Gouna-Plus-Window-Display",
    },
    {
      id: 2,
      title: "PrintPicsNow Platform",
      description: "E-commerce platform for photo printing services",
      image: printPicsNow,
      behanceUrl: "https://www.behance.net/gallery/120184095/PrintPicsNow-Content",
    },
    {
      id: 3,
      title: "Work Peace",
      description: "Wellness and productivity app interface",
      image: workPeace,
      behanceUrl: "https://www.behance.net/gallery/120184095/Work-Peace",
    }
  ],
  illustration: [
    {
      id: 1,
      title: "Tales of Arabia",
      description: "Illustrated series celebrating Arabian culture",
      image: talesOfArabia,
      behanceUrl: "https://www.behance.net/gallery/169391855/Tales-of-Arabia-at-Cairo-Festival-City",
    },
    {
      id: 2,
      title: "Summertime Blooms",
      description: "Digital illustration series for seasonal collection",
      image: summertimeBlooms,
      behanceUrl: "https://www.behance.net/gallery/185947095/Summertime-Blooms-at-Cairo-Festival-City-Mall-Summer23",
    },
    {
      id: 3,
      title: "AfroArt Collection",
      description: "Contemporary African-inspired digital art series",
      image: afroArt,
      behanceUrl: "https://www.behance.net/gallery/120184095/AFROART",
    }
  ]
}

type PortfolioProps = {
  category: keyof typeof projects
}

function Portfolio({ category }: PortfolioProps) {
  const categoryProjects = projects[category]
  const categoryTitle = category === 'ux-ui' ? 'UX/UI Design' :
    category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif text-nude-900 mb-12">{categoryTitle}</h1>

        <div className="portfolio-grid">
          {categoryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-item group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-nude-900 mb-2">{project.title}</h3>
                <p className="text-nude-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Portfolio
