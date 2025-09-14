"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface AuthContextType {
  isAuthenticated: boolean
  userEmail: string | null
  login: (email: string) => void
  logout: () => void
  isLoggingOut: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check authentication status on mount
    const authStatus = localStorage.getItem("isAuthenticated")
    const email = localStorage.getItem("userEmail")

    if (authStatus === "true" && email) {
      setIsAuthenticated(true)
      setUserEmail(email)
    }
    setIsLoading(false)
  }, [])

  const login = (email: string) => {
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("userEmail", email)
    setIsAuthenticated(true)
    setUserEmail(email)
  }

  const logout = async () => {
    setIsLoggingOut(true)

    try {
      // Simulate logout API call delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("userEmail")
      setIsAuthenticated(false)
      setUserEmail(null)

      toast({
        title: "Tizimdan chiqish",
        description: "Tizimdan muvaffaqiyatli chiqdingiz.",
      })

      router.push("/")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Xatolik",
        description: "Tizimdan chiqishda xatolik yuz berdi.",
      })
    } finally {
      setIsLoggingOut(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-blue-600">Loading...</div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout, isLoggingOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
