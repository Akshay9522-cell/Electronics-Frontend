import React from 'react'
import { DiGhostSmall } from "react-icons/di";
import { FaRegNewspaper } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { GrUserNew } from "react-icons/gr";
import { SlGraph } from "react-icons/sl";
import { LiaFlagSolid } from "react-icons/lia";
import { TfiCup } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { TbArrowLeftRight } from "react-icons/tb";











const Adminpanel = () => {
  return (

    <>
    <div className='panel'>
       <div className='sidebar'>
          <div className='dashData'> 
              <h1>ECOMRE</h1>

              <ul>
             
              <li>  <DiGhostSmall />  DashBoard</li>
                <li> <FaRegNewspaper />
                Availbale Product</li>
                <li> <HiOutlineSpeakerphone />
                Enquiries</li>
                <li> <IoPricetagsOutline />
                Payment</li>
                <li> <TbReportSearch />
                Reports</li>
                <li> <GrUserNew />
                New User</li>
              </ul>

              
          </div>
          
        </div>
    <div className='admin'>
      <h1>my admin panel</h1>
      
      <div className='admin1'>

        <div className='bx'> <SlGraph className='ic' />
        Sales</div>
        <div className='bx' > <LiaFlagSolid  className='io'/>
        Orders</div>
        <div className='bx' >  <TfiCup className='ip' />
        Products</div>
        <div className='bx'> <FaUserAlt className='iC' />
        Customers</div>
        <div className='bx'>  <TbArrowLeftRight className='ir' />
        Returns</div>

      </div>
     
    </div>
    </div>
    </>
  )
}

export default Adminpanel
