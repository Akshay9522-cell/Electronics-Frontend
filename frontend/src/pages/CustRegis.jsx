import React, { useState } from 'react'
import BASE_URL from '../config/BaseUrl'
import axios from 'axios'

const CustRegis = () => {

      const[inp,setInp]=useState({})

      async function handleInp(e){
         let name=e.target.name
         let value=e.target.value


        setInp(values=>({...values,[name]:value}))
    
      }
      async function dataSubmit (){
         
         let api=`${BASE_URL}electronics/userregis`

         await axios.post(api,inp).then((res)=>{
             console.log(res.data)
         })
      }
       

  return (
    <>    
    <div className='userBG'>
    <div className='userRegis'>


      <p>Name :</p><input type='text' name='name' onChange={handleInp}/> <br />
      <p> Contact :</p> <input type='number' name='phone' onChange={handleInp} /> <br />
      <p>Email :</p>:<input type='email' name='email' onChange={handleInp} /> <br />
      <p> Address :</p>:<input type='text' name='address' onChange={handleInp} /> <br />
      <p> city :</p>:<input type='text' name='city' onChange={handleInp} /> <br />
      <p> password :</p>:<input type='password' name='password'  onChange={handleInp} /> <br /> <br />

      <button className='button-85' onClick={dataSubmit}>submit</button>
    </div>
    </div>
    </>

  )
}

export default CustRegis
