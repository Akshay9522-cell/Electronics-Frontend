import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Top from '../components/Top'

const AddToCart = () => {

     const product=useSelector(state=>state.mycart.cart)
     console.log(product)
  return (
    <>
    <div>
        <Header/>
        
      <div>
       
       <div className='heading'>
          <h1>Shopping Cart</h1>
          <div className='Pinfo'>
            
            <div>iamge</div>
            <div className='proInfo'>
            <div className='proDetail'>
                <h4>productInfo</h4>
                <h4>price of product</h4>
            </div>

            <p>instock</p>
             <p>Model</p>
             <div>
                <h5>Quantity</h5>
             </div>
            </div>
          </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default AddToCart
