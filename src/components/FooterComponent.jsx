import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
function FooterComponent() {
  const authContext = useContext(AuthContext)
  return (
    <footer className="footer">
      <div className="container">thanks for use our app! {authContext.number}</div>
    </footer>
  );
}

export default FooterComponent;
