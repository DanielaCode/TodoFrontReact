import { createContext, useContext, useState } from "react";
import { basicAuth } from "../api/TodoApiService";
import apiClient from "../api/ApiClient";

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
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  //refactoring to move have all the modifiers of isAuth here
  async function login(userName, password) {
    const basicToken = 'Basic ' + window.btoa(userName+':'+password)
    const response = await basicAuth(basicToken)
    try {
      if (response.status == 200) {
        setAuth(true);
        setUsername(userName);
        setToken(basicToken);
        apiClient.interceptors.request.use(
          (config)=>{
            config.headers.Authorization=basicToken;
            return config;
          }
        )
        return true;
      } else {
        setAuth(false);
        setUsername(null);
        setToken(null);
        return false;
      }
    } catch (error) {
      setAuth(false);
      setUsername(null);
      setToken(null);
      return false;
    }
  }

  function logout() {
    setUsername(null);
    setToken(null);
    setAuth(false);
  }
  
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, token, username}}>
      {children}
    </AuthContext.Provider>
  );
}
