import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/ContactUs'
import FrontPilot from './pages/products/FrontPilot'
import Career from './pages/Career'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products/frontpilot" element={<FrontPilot />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 