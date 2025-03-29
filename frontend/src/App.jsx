
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import Adminpanel from './admin/Adminpanel'

function App() {


  return (
    <>
 <Routes>
  <Route path='/' element={<Navbar/>}>
  <Route index element={<Home/>}/>

  <Route path='home' element={<Home/>}/>

  </Route>
 </Routes>

 <Routes>
  <Route path='dash' element={<Adminpanel/>}>

  </Route>
 </Routes>
    </>
  )
}

export default App
