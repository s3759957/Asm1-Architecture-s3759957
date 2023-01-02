import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  // State
  const [user, setUser] = useState([])
  const [auth, setAuth] = useState(false)
  const [hasAccount, setHasAccount] = useState(false);

  // context data
  const authContextData = {
    hasAccount, 
    setHasAccount,
    user,
    auth,
    setUser,
    setAuth
  }

  // return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider







