import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";

function LogingComponent() {
  const [userName, setUserName] = useState("Admin");
  const [password, setPassword] = useState();
  const [failMessage, setFailMessage] = useState(false);
  const navigate = useNavigate();
  const autContext = useAuth()
  function handleUserNameChange(event) {
    setUserName(event.target.value)
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }
  function handleSubmit(event) {
    if (autContext.login(userName,password)) {
      setFailMessage(false)
      navigate(`/welcome/${userName}`)
    } else {
      setFailMessage(true)
    }
  }
  return (
    <div className="LogingComponent">
      <h1>Login</h1>
      <form action="POST">
        <div>
          {failMessage && <p>Authentication failed!</p>}
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogingComponent;
