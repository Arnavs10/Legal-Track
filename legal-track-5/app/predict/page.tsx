import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"
import Link from "next/link"

export default function PredictPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">IPC Section Prediction</h1>
              <p className="text-lg text-muted-foreground">
                Describe your case details below and our AI will suggest the most relevant IPC sections
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Case Details</CardTitle>
                <CardDescription>Provide as much information as possible for accurate predictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="incident-type">Incident Type</Label>
                  <Select>
                    <SelectTrigger id="incident-type">
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theft">Theft/Robbery</SelectItem>
                      <SelectItem value="assault">Assault/Battery</SelectItem>
                      <SelectItem value="fraud">Fraud/Cheating</SelectItem>
                      <SelectItem value="property">Property Dispute</SelectItem>
                      <SelectItem value="cybercrime">Cybercrime</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Incident Location</Label>
                  <Input id="location" placeholder="Where did the incident occur?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Incident Date</Label>
                  <Input id="date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what happened in detail..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">Available Evidence (Optional)</Label>
                  <Select>
                    <SelectTrigger id="evidence">
                      <SelectValue placeholder="Select evidence type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="witness">Witness Statements</SelectItem>
                      <SelectItem value="cctv">CCTV Footage</SelectItem>
                      <SelectItem value="documents">Documents/Records</SelectItem>
                      <SelectItem value="photos">Photographs</SelectItem>
                      <SelectItem value="medical">Medical Reports</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Reset</Button>
                <Button asChild>
                  <Link href="/predict/result">Predict IPC Sections</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  )
}

