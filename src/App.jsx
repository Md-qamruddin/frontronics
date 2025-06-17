import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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
import Toys from './pages/products/Toys'
import CVPilot from './pages/products/CVPilot'
import { SignIn, SignUp } from './components/auth'
import './App.css'

const App = () => {
  return (
    <HelmetProvider>
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
            <Route path="/blog" element={<Blog />} />            <Route path="/payment" element={<Payment />} />
            <Route path="/products/toys" element={<Toys />} />
            <Route path="/products/cv-pilot" element={<CVPilot />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<div className="min-h-screen flex items-center justify-center">Forgot Password Page (Coming Soon)</div>} />
            <Route path="/dashboard" element={<div className="min-h-screen flex items-center justify-center">Dashboard (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App