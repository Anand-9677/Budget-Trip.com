import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Packages from '../components/Packages'
import About from '../components/About'
import Contact from '../components/Contact'
import Package from '../components/Package'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='packages/:id' element={<Package />} />
    </Routes>
  )
}

export default Routing
