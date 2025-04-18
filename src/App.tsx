import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio">
            <Route path="branding" element={<Portfolio category="branding" />} />
            <Route path="ux-ui" element={<Portfolio category="ux-ui" />} />
            <Route path="illustration" element={<Portfolio category="illustration" />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
