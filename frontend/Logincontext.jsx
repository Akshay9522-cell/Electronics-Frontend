
import React, {  useState } from 'react'
import { createContext } from "react";
const myContext=createContext()



const Logincontext = ({Children}) => {

  
  onst [logedIn, setLogedIn]= useState(false);
  return (
    <div>
      <myContext.Provider value={{logedIn,setLogedIn}}>
        {Children}
      </myContext.Provider>
    </div>
  )
}
export {myContext}
export default Logincontext



