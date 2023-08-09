import { createContext, useContext, useState } from "react";

/**
 * 1. Create a context
 */
const AuthContext = createContext();

/**
 * 2. Share created components with other components
 */

/**
 * 3. Create a custom hook to make easier the import in other components
 */
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  //put some state in the context to be able to share with others components
  const [isAuth, setAuth] = useState(false);

  //refactoring to move have all the modifiers of isAuth here
  function login(userName, password) {
    if (userName === "Admin" && password === "Admin") {
      setAuth(true);
      return true;
    } else {
      return false;
    }
  }

  function logout() {
    setAuth(false);
  }
  
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
