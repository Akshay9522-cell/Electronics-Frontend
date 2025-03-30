import React from 'react'
import {useState} from 'react'
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
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import{Toaster,toast} from 'react-hot-toast'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/BaseUrl';
import axios from 'axios';

const Admin2 = () => {

    const nav=useNavigate()
  const[inp,setInp]=useState({})
  const[image,setImage]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    async function logOut() {
         
        localStorage.clear()
        toast.success('successfully LogOUT')
        nav('/')
    }

    // handle inputs

    async function handleInp(e){
         
      let name=e.target.name
      let value=e.target.value

      setInp(values=>({...values,[name]:value}))

      console.log(inp)
       
    }

    async function handleFile(e){
         
      setImage(e.target.files)
      console.log(image)
        
    }

    async function submitData(e) {
      e.preventDefault()

      let api=`${BASE_URL}/add`

      const formData=new FormData()

       for(let key in inp){
           formData.append(key,inp[key])
           console.log(inp[key])
       }

       for(let i=0;i<image.length;i++){
           
        formData.append('image',image[i])
       }

       await axios.post(api,formData).then((res)=>{
           console.log(res.data)
       })
      
    }


  return (
    <div>
      
       <div className='panel'>
       <div className='sidebar'>
          <div className='dashData'> 
              <h1>ECOMRE</h1>

              <ul>
                <li><h5 style={{color:"orange"}}> Hlw! {localStorage.getItem('admin')}</h5 ></li>
             
              <li  onClick={handleShow}>  <DiGhostSmall />Product Store</li>
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
                <li onClick={logOut} > <IoMdLogOut />
                Log out</li>
              </ul>

              
          </div>
          
        </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text"  name="name"  onChange={handleInp} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" name='description'   onChange={handleInp} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" name='category'   onChange={handleInp} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" name='company'   onChange={handleInp} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name='price'  onChange={handleInp} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" multiple onChange={handleFile}   />
      </Form.Group>
   
      <Button variant="primary" type="submit" onClick={submitData}> 
        Submit
      </Button>
    </Form>
          
        </Modal.Body>
        <Modal.Footer>
        
        
        </Modal.Footer>
      </Modal>
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

    <Toaster/>
  
    </div>
  )
}

export default Admin2
