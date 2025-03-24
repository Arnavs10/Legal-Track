"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Scale, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  // Check if user is on login or register page
  const isAuthPage = pathname === "/login" || pathname === "/register"

  // Simulate checking login status
  useEffect(() => {
    // This would normally check a token in localStorage or cookies
    const checkLoginStatus = () => {
      // For demo purposes, we'll consider the user logged in if they're on the profile page
      // In a real app, you'd check for auth tokens
      if (pathname === "/profile") {
        setIsLoggedIn(true)
      }
    }

    checkLoginStatus()
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Legal Track</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/predict" className="text-sm font-medium hover:text-primary transition-colors">
            IPC Prediction
          </Link>
          <Link href="/file-fir" className="text-sm font-medium hover:text-primary transition-colors">
            File FIR
          </Link>
          <Link href="/handbook" className="text-sm font-medium hover:text-primary transition-colors">
            IPC Handbook
          </Link>
          <Link href="/support" className="text-sm font-medium hover:text-primary transition-colors">
            Support
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <User className="h-5 w-5 text-primary" />
            </Link>
          ) : !isAuthPage ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/register">Register</Link>
              </Button>
            </>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/predict"
                className="text-sm font-medium p-2 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                IPC Prediction
              </Link>
              <Link
                href="/file-fir"
                className="text-sm font-medium p-2 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                File FIR
              </Link>
              <Link
                href="/handbook"
                className="text-sm font-medium p-2 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                IPC Handbook
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium p-2 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </nav>
            <div className="flex gap-4 pt-2">
              {isLoggedIn ? (
                <Link
                  href="/profile"
                  className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-primary/10 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 text-primary" />
                  <span>My Profile</span>
                </Link>
              ) : !isAuthPage ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                      Register
                    </Link>
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

