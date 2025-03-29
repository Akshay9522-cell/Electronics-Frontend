import React from 'react'
import img1 from '../images/Visa.avif'
import img2 from '../images/PayPal.avif'
import img3 from '../images/Discover.avif'
import img4 from '../images/Diners.avif'
import img5 from '../images/master.avif'
import img6 from '../images/jcb.avif'
import img7 from '../images/onfe.avif'
import img8 from '../images/un.avif'


const Footer = () => {
  return (
    <>
    <div>
      <div className='footer'>

        <div className='f1'>
          
            <ul>
            <h4>Store Location</h4>

                <li>500 Terry Francine Street</li>
                <li> San Francisco, CA 94158</li>
                <li>info@mysite.com</li>
                <li>123-456-7890</li>
            </ul>
        </div>
        <div className='f1'> 
       
<ul>
<h4>Shop</h4>

    <li>Shop All</li>
    <li> Computer</li>
    <li>Tablets</li>
    <li>Cameras and Drones</li>
    <li>Audio</li>
    <li>Mobile</li>
    <li>Werable Tech</li>
    <li>Sale</li>
</ul>
        </div>
        <div className='f1'>
      

<ul>
<h4>Customer Support</h4>
    <li>Contact Us</li>
    <li>Help Center</li>
    <li>About Us</li>
    <li>Careers</li>
</ul>
        </div>
        <div className='f1'>
      

<ul>
<h4>Policy</h4>
    <li>Shipping and Returns</li>
    <li>Terms and Condition</li>
    <li>Payment Method</li>
    <li>FAQ</li>
</ul>
        </div>



      </div>
    

    </div>
    <p style={{textAlign:"center"}} >We accept the Following   paying methods</p>
    <div className='sponser'>
     
       <img src={img1} alt="" />
       <img src={img2} alt="" />
       <img src={img3} alt="" />
       <img src={img4} alt="" />
       <img src={img5} alt="" />
       <img src={img6} alt="" />
       <img src={img7} alt="" />
       <img src={img8} alt="" />
   
     
    </div>
    <div className='flst'>
        <h4>© 2035 by TechShed. Powered and secured by akshay namdev</h4>
    </div>

        </>
  )
}

export default Footer
