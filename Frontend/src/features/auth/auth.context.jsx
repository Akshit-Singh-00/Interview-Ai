import { Children, createContext, use, useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({Children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    return(
        <AuthContext.Provider value={{use,setUser,loading,setLoading}}>{Children}
        </AuthContext.Provider>
    )
}