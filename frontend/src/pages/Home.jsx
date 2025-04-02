import React, { useEffect, useState } from 'react'
import { GiScooter } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { SiSpeedypage } from "react-icons/si";
import { GiReturnArrow } from "react-icons/gi";
import m1 from '../images/one.avif'
import m2 from '../images/two.avif'
import m3 from '../images/three.avif'
import m4 from '../images/four.avif'
import m5 from '../images/five.avif'
import m6 from '../images/six.avif'
import m7 from '../images/seven.avif'
import m8 from '../images/eight.avif'
import m9 from '../images/nine.avif'
import m10 from '../images/ten.avif'
import m11 from '../images/eleven.avif'
import m12 from '../images/twelve.avif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../css/tail.css'
import BASE_URL from '../config/BaseUrl';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addTocart } from '../cartSlice';




const Home = () => {


  const[show,setShow]=useState([])

  const dis=useDispatch()

  async function productData() {
      
      let api=`${BASE_URL}electronics/product`

      await axios.get(api).then((res)=>{
          
          console.log(res.data)
          setShow(res.data)
      })
  }
 
  useEffect(()=>{
     productData()
  },[])

 let ans=show.map((e)=>{
    return(
      <>
      <div className='cardProduct'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${BASE_URL}${e.defaultImage}`}   />
      
          
      <Card.Body>
        <Card.Title> Product:{e.name}</Card.Title>
        <Card.Text>
           <h5> Desc:{e.description}</h5>
           <h5>Category:{e.category}</h5>
           <h5>Company:{e.company}</h5>
           <h5>Price:{e.price}</h5>
        </Card.Text>
        <Button variant="primary"onClick={()=>{dis(addTocart({id:e._id, name:e.name, description:e.description, category:e.category, company:e.company, price:e.price, defaultImage:e.defaultImage, images:e.images, qnty:1}))}} >Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
      </>
    )
 })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='sec2'>
              <div className='section2'>
        <div className='phone'>
        
        <div className='phone1'>
          <p>Holiday Deals</p>
          <h1>Up to <br />
          30% off</h1>
          <p>Selected Smartphone Brands </p>
          <button className='button2'>Shop</button>
          </div>
        </div>


        <div className='headphone'>
        
        <div className='headphone1'>
            <p>
            Just In</p>
          <h1>Just InTake Your SoundAnywhere</h1>
          <p>Top Headphone Brands</p>
          <button className='button2'>Shop</button>
        </div>
        </div>
      </div>


      <div className='product'>
            <div className='cardPro'>
          
            {ans}
            </div>
      </div>

      <div className='sec3 '>

        <div className='sec31'>
           
           <div className='pictext'>
               
               <h4><GiScooter />
               </h4>
               <h3>Curb-side <br />pickup</h3>
           </div>
           <div className='pictext'>
               
               <h4><BsBoxSeam />

               </h4>
               <h3>
               Free shipping on <br /> orders over $50</h3>
           </div>
           <div className='pictext'>
               
               <h4><SiSpeedypage />

               </h4>
               <h3>
               Low prices <br /> guaranteed</h3>
           </div>
           <div className='pictext'>
               
               <h4><GiReturnArrow />

               </h4>
               <h3>
               Available to <br /> you 24/7</h3>
           </div>
        </div>

      </div>
      <div className='w-4/5  m-auto gap-5'>
       
       <div className='mt-20 mb-32 '>
       <Slider {...settings}>
             {
              data.map((e)=>{
               
                return(
                  <>
                  
                  <div className='bg-white h-[350px] text-black rounded-xl m-5px shadow-xl m-4 '>
                  <div className='h-56  rounded-t-xl  flex justify-center items-center  '>
                  <img src={e.image}   className='h-44 w-44 transition-transform duration-300 ease-in-out transform hover:scale-120 '/>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-4 f-20  text-xl font-bold text-gray-800'>
                  {e.desc}
                  </div>
                   <div className='flex flex-col justify-center items-center gap-4 p-4 font-semibold'> 
                   {e.price}
                   </div>
                  
                  </div>
                 
                  
                   
                  </>
                )
              
              })
             }
              </Slider>
       </div>
   </div>
      </div>
 
   

    </>
  )
}

const data=[
  {
    image: m1,
    desc:`Smartphone Z Pixel Max 128GB Unlocked`,
    price:'$85'
  },
  {
    image: m2,
    desc: `65" Class Nano LED 4K UHD smart TV`,
    price:'$55'
  },
  {
    image:m3,
    desc:`White Buds Wireless Earbud Headphone`,
    price:'$75'
  },
  {
    image: m4,
    desc:`Sdk Portable Bluetooth Speaker`,
    price:'$805'
  },
  {
    image: m5,
    desc:`Megapixel Waterproof Mini Digital  Camera`,
    price:'$95'
  },
  {
    image: m6,
    desc:`Megapixel Waterproof Mini Digital  Camera`,
    price:'$95'
  },

]

export default Home
