import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LogingComponent() {
  const [userName,setUserName] = useState("Admin")
  const [password,setPassword] = useState()
  const [successMessage,setSuccessMessage] = useState(false)
  const [failMessage,setFailMessage] = useState(false)
  const navigate = useNavigate()

  function handleUserNameChange(event){
    setUserName(event.target.value)
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }
  function handleSubmit(event){
    if (userName === "Admin" && password === "Admin") {
      setSuccessMessage(true)
      setFailMessage(false)
      navigate('/welcome')
    }else{
      setSuccessMessage(false)
      setFailMessage(true)
    }
  }
  return (
    <div className='LogingComponent'>
      <form action="POST">
        <div>
          {successMessage && <p>Authentication success!</p>}
          {failMessage && <p>Authentication failed!</p>}
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={userName} onChange={handleUserNameChange}/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password"  value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LogingComponent