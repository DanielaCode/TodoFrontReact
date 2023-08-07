import React from 'react'
import { useParams,Link } from "react-router-dom";

function WelcomeComponent() {
  const {username} = useParams()
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your Todos <Link to="/todos">here</Link>
      </div>
    </div>
  )
}

export default WelcomeComponent