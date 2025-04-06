import React, { useState } from 'react'
import BASE_URL from '../config/BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
     
    const nav=useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function userLogin(){
           
        console.log(email,password)
            let api=`${BASE_URL}electronics/loginUser`

         await axios.post(api,{email:email,password:password}).then((res)=>{
             console.log(res.data)
             localStorage.setItem('token',res.data.token)
             nav('/')

         })
    }

  return (
    <div className='login'>
      <h1>Login into Your Account</h1>

      Email ID:<input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  /> 
      Password:<input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 

      <button onClick={userLogin}>Login </button>
    </div>
  )
}

export default Login
