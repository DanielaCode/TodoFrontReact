import React, { useContext } from "react";
import { useAuth } from "../providers/AuthContext";
function FooterComponent() {
  const authContext = useAuth()
  return (
    <footer className="footer">
      <div className="container">thanks for use our app! {authContext.number}</div>
    </footer>
  );
}

export default FooterComponent;
