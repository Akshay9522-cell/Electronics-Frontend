import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import {  useNavigate,Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/BaseUrl';
import axios from 'axios'
import{Toaster,toast} from 'react-hot-toast'
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';





const Header = () => {

   const nav=useNavigate()
   const val=useSelector(state=>state.mycart.cart)
   const length=val.length
  const[adminid,setAdminid]=useState('')
  const[password,setPassword]=useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
         async function dataSubmit(e){
        e.preventDefault()
       let api=`${BASE_URL}electronics/login`
       try {
       await axios.post(api,{adminid:adminid,password:password}).then((res)=>{
           console.log(res.data)
           toast.success('Successfully Login!')
           localStorage.setItem('admin',res.data.admin.name  )
           nav('/admin')
       })
        
     
    } catch (error) {
      toast.error('invalid')
    }  
  }

  async function logOut(){
       
      localStorage.clear()
      nav('/')
  }




  return (
    <>
      <div className='header'>
         
         <div className='header1'>
              <h1>TechShed</h1>
              <div className='srchbar'>
                  <input type="text" />  
              </div>
              <CiSearch className='srch' />
         </div>
        
        <div className='icons'> 
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> Name: {localStorage.getItem('name')} </Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Email:{localStorage.getItem("email")}</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> <button className='button-55' onClick={logOut}  >Logout</button></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>        

            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><Link to="regis"> <h4>  <FaUserCircle className='user' />For New User</h4> </Link> </Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link to="login"> <h4>  <FaUserCircle className='user' />Login</h4> </Link></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>        
   
       <FaRegHeart />
       <a href="#" onClick={()=>{nav('/cart')}} > <span className='cart2'>  <FaOpencart  /> {length}</span> </a>

      
     <IoPersonSharp onClick={handleShow} /> 

    


         </div>

      </div>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" placeholder="Enter User id" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=" Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={dataSubmit}>
        Submit
      </Button>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Toaster/>
      <Outlet/>
    </>
  )
}

export default Header
