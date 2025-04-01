
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Adminpanel from './admin/Adminpanel'
import Admin2 from './admin/Admin2'
import AddToCart from './pages/AddToCart'

function App() {


  return (
    <>
 <Routes>
  <Route path='/' element={<Navbar/>}>
 
 
  
  </Route>
 </Routes>

 <Routes>
 {/* <Route path='admin' element={<Adminpanel/>}> */}
 
 <Route path='admin' element={<Admin2/>}>

 </Route>
 </Routes>

 <Routes>
 {/* <Route path='admin' element={<Adminpanel/>}> */}
 
 <Route path='cart' element={<AddToCart/>}>

 </Route>
 </Routes>


    </>
  )
}

export default App
