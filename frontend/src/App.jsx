import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Expericen from './pages/Expericen'
import Footer from './components/Footer'
import ServiceBased from './pages/ServiceBased'
import ProductBased from './pages/ProductBased'
import View from './components/View'
import RoleExperience from './components/RoleExperience'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import MapRoad from './pages/MapRoad'


const App = () => {

  // 🔥 SIMPLE FIX → keep login state inside React
 
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/login' element={<Login />} />

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Expericen />} />
          <Route path="/service-based" element={<ServiceBased />} />
          <Route path="/product-based" element={<ProductBased />} />
          <Route path="/view" element={<View />} />
          <Route path="/role-experience" element={<RoleExperience />} />
          <Route path='/roadmap' element={<MapRoad />} />
        </Routes>
      </main>

      { <Footer />}
    </div>
  )
}

export default App;



