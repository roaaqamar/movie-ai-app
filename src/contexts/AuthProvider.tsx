import {
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  signOut,
  type User,
} from 'firebase/auth'

import { auth } from '../firebase'
import {
  AuthContext,
  type AuthContextType,
} from './AuthContext'

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      }
    )

    return unsubscribe
  }, [])

  const logout = async () => {
    await signOut(auth)
  }

  const value: AuthContextType = {
    user,
    loading,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider