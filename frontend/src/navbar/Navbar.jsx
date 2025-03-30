import React from 'react'
import Header from '../components/Header'
import Top from '../components/Top'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Header/>
      <Top/>
      <Home/>
      <Footer/>
        
    </div>
  )
}

export default Navbar
