import { createContext, useState } from "react";

/**
 * 1. Create a context
 */
export const AuthContext = createContext();

/**
 * 2. Share created components with other components
 */

export default function AuthProvider({children}) {

    //put some state in the context to be able to share with others components
    const [number,setNumber] = useState(0)
    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}