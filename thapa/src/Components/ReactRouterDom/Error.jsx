import React from 'react'
import { useNavigate } from 'react-router-dom'



const Error = () => {

  const navigate = useNavigate();

  const goBack =()=>{
    navigate("")
  }

  return (
    <div>
    <h1> 404 Error Page</h1>
    <button onClick={()=>{
      goBack()
    }} >go back</button>
      
    </div>
  )
}

export default Error
