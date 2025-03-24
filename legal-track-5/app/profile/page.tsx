"use client"

import { useState } from "react"
import { User, Mail, Phone, Calendar, CreditCard, History, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  mobile: "9876543210",
  age: "32",
  gender: "Male",
  idType: "Aadhar Card",
  idNumber: "XXXX-XXXX-XXXX-1234",
  joinedDate: "15 Jan 2023",
}

// Mock user activity
const userActivity = [
  {
    id: 1,
    type: "IPC Prediction",
    date: "12 Mar 2023",
    description: "Predicted IPC sections for property dispute case",
    sections: ["IPC 420", "IPC 406"],
  },
  {
    id: 2,
    type: "FIR Filed",
    date: "28 Feb 2023",
    description: "Filed online FIR for mobile theft",
    reference: "FIR123456",
  },
  {
    id: 3,
    type: "Handbook Access",
    date: "15 Feb 2023",
    description: "Accessed information about IPC Section 420",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const { toast } = useToast()

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      duration: 3000,
    })

    // Redirect to home page after toast
    setTimeout(() => {
      window.location.href = "/"
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your account and view your activity</p>
          </div>

          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            <Card className="border-none shadow-md h-fit">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{userData.name}</h2>
                  <p className="text-sm text-muted-foreground">Member since {userData.joinedDate}</p>
                </div>

                <nav className="space-y-2">
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === "profile" ? "bg-primary text-white" : "hover:bg-primary/10"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Profile Information
                    </div>
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === "activity" ? "bg-primary text-white" : "hover:bg-primary/10"
                    }`}
                    onClick={() => setActiveTab("activity")}
                  >
                    <div className="flex items-center">
                      <History className="h-4 w-4 mr-2" />
                      Activity History
                    </div>
                  </button>
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              {activeTab === "profile" ? (
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Your personal and contact details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          <p className="font-medium">{userData.name}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Email Address</p>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-primary" />
                          <p className="font-medium">{userData.email}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Mobile Number</p>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-primary" />
                          <p className="font-medium">{userData.mobile}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Age</p>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <p className="font-medium">{userData.age} years</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Gender</p>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          <p className="font-medium">{userData.gender}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">ID Document</p>
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2 text-primary" />
                          <p className="font-medium">
                            {userData.idType}: {userData.idNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Edit Profile
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Activity History</CardTitle>
                    <CardDescription>Your recent activities on Legal Track</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userActivity.map((activity) => (
                        <div key={activity.id} className="border-b pb-6 last:border-0 last:pb-0">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold text-primary">{activity.type}</h3>
                            <span className="text-sm text-muted-foreground">{activity.date}</span>
                          </div>
                          <p className="mb-2">{activity.description}</p>
                          {activity.sections && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {activity.sections.map((section, index) => (
                                <span key={index} className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-md">
                                  {section}
                                </span>
                              ))}
                            </div>
                          )}
                          {activity.reference && (
                            <p className="text-sm mt-2">
                              Reference: <span className="font-medium">{activity.reference}</span>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotButton />
      <Toaster />
    </div>
  )
}

