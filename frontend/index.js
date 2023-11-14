import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Webcam from './components/Canvas'
import Grid from './components/Grid'
import Stopwatch from './components/Stopwatch'
import './styles/reset.css'
import './styles/styles.css'

const root = createRoot(document.getElementById('root'))

const Home = () => (
  <div>Navigate to each page and complete the component</div>
)

root.render(
  <Router>
    <div className="routing">
      <nav>
        <NavLink to="webcam">Webcam</NavLink>
        <NavLink to="stopwatch">Stopwatch</NavLink>
        <NavLink to="grid">Grid</NavLink>
      </nav>
      <Routes>
        <Route path="webcam" element={<Webcam />} />
        <Route path="stopwatch" element={<Stopwatch />} />
        <Route path="grid" element={<Grid />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
)
