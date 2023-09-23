'use client'
import { SessionProvider } from "next-auth/react"
type IProps = {
  children: React.ReactNode
}

export default function AuthContext({ children }: IProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
