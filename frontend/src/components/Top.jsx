import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


const Top = ( ) => {

   const[show,setShow]=useState(false)


    function sideBar(){
      setShow(!show)
    }


  return (
    <>
    <div className='top'>
   
   <div className='side'>  
   <nav className='nav'>
    <Link to='home'>Home</Link>
    <Link to='home'>Shop All</Link>
    <Link to='home'>Computer</Link>
    <Link to='home'>Drones</Link>
    <Link to='home'>Audio</Link>
    <Link to='home'>Mobile</Link>
    <Link to='home'>T.V</Link>
    </nav>
    

    <FaBars className='bar' onClick={sideBar}  />

    
    </div>
    
    
   
 
    <div className='bg'>
      <div className='bgdata'>
       <h1>Incredible Prices on All Your Favorite Items</h1>
       <p>Get more for less on selected brands</p>
       <button className='button-29'>Shop now</button>
      </div>
    </div>
    </div>

    
      <Outlet/>
    </>
  )
}

export default Top
