import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Webcam from './components/Webcam'
import Timeout from './components/Timeout'
import Todos from './components/Todos'
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
        <NavLink to="timeout">Timeout</NavLink>
        <NavLink to="todos">Todos</NavLink>
      </nav>
      <Routes>
        <Route path="webcam" element={<Webcam />} />
        <Route path="timeout" element={<Timeout />} />
        <Route path="todos" element={<Todos />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
)
