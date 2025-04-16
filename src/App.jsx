import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Career from './pages/Career'
import About from './pages/About'
import Blog from './pages/Blog'
import Payment from './pages/Payment'
import FrontPilot from './pages/products/FrontPilot'
import BackPilot from './pages/products/BackPilot'
import AIAssistant from './pages/products/AIAssistant'
import LaunchPad from './pages/products/LaunchPad'
import Toys from './pages/products/Toys'
import { SignIn, SignUp } from './components/auth'
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-14 sm:pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products/frontpilot" element={<FrontPilot />} />
          <Route path="/products/backpilot" element={<BackPilot />} />
          <Route path="/products/ai-assistant" element={<AIAssistant />} />
          <Route path="/products/launchpad" element={<LaunchPad />} />
          <Route path="/products/toys" element={<Toys />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App