import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import BASE_URL from '../config/BaseUrl'
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { qntyDecrease, qntyIncrease,productRemove } from '../cartSlice';
import { MdRemoveShoppingCart } from "react-icons/md";




const AddToCart = () => {

   let dis=useDispatch()

     const product=useSelector(state=>state.mycart.cart)
     console.log(product)


   // Calculate total amount
   let totalAmount = product.reduce((acc, product) => {
    return acc + (product.price * product.qnty); // Assuming product has price and quantity properties
}, 0);
  return (
    <>
    <div>
        <Header/>
        
      <div>
       
    
      <div className='heading'>
                        <h1>Shopping Cart</h1>
                        
                        <div className='Pinfo'>
                        
                      
                  
                    
                            {product.map((product) => (
                                <div  className='proInfo'>
                                    <div className='proDetail'>
                                    <img src={`${BASE_URL}${product.defaultImage}`} alt={product.name} /> 
                                        <h4>{product.name}</h4> 
                                    </div>
                                    <p>{product.brand}</p> 
                                    <p>Model: {product.company}</p> 
                                    <div>
                                        <h5>Price: {product.price}</h5>
                                        <h5>Quantity: {product.qnty}</h5> 
                                        
                                        <button className='remove'   onClick={()=>dis(productRemove({id:product.id}))}><MdRemoveShoppingCart />
</button>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>            

                        </div>
                        <div className='totalAmount'>
                            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2> {/* Displaying total amount */}
                        </div>
                    </div>
      </div>
    </div>
    </>
  )
}

export default AddToCart
