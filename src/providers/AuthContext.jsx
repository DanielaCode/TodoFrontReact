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
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {

    //put some state in the context to be able to share with others components
    const [number,setNumber] = useState(0)

    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}