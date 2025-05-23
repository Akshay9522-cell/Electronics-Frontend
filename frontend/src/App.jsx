
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Adminpanel from './admin/Adminpanel'
import Admin2 from './admin/Admin2'
import AddToCart from './pages/AddToCart'
import CustRegis from './pages/CustRegis'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {


  return (
    <>
 <Routes>
  <Route path='/' element={<Navbar/>}>
  
  <Route path='regis' element={<CustRegis/>}/>
 
  </Route>
 </Routes>

 <Routes>
 <Route path='admin' element={<Admin2/>}>
 </Route>
 </Routes>

 <Routes>
 <Route path='cart' element={<AddToCart/>}>
 </Route>
 </Routes>
 <Routes>
  <Route path='login' element={<Login/>}>

  </Route>
 </Routes>


    </>
  )
}

export default App
