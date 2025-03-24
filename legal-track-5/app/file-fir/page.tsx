import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FileFIRPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Online FIR Filing</h1>
              <p className="text-lg text-muted-foreground">
                File a First Information Report online without visiting the police station
              </p>
            </div>

            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="personal">Personal Details</TabsTrigger>
                <TabsTrigger value="incident">Incident Details</TabsTrigger>
                <TabsTrigger value="review">Review & Submit</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Provide your contact details for the FIR</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Residential Address</Label>
                      <Textarea id="address" placeholder="Enter your full address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="id-type">ID Proof Type</Label>
                      <RadioGroup defaultValue="aadhar">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="aadhar" id="aadhar" />
                          <Label htmlFor="aadhar">Aadhar Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pan" id="pan" />
                          <Label htmlFor="pan">PAN Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="voter" id="voter" />
                          <Label htmlFor="voter">Voter ID</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="passport" id="passport" />
                          <Label htmlFor="passport">Passport</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="id-number">ID Number</Label>
                      <Input id="id-number" placeholder="Enter ID number" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Next: Incident Details</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="incident">
                <Card>
                  <CardHeader>
                    <CardTitle>Incident Details</CardTitle>
                    <CardDescription>Provide information about the incident</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="incident-date">Date of Incident</Label>
                      <Input id="incident-date" type="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="incident-time">Time of Incident</Label>
                      <Input id="incident-time" type="time" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="incident-location">Location of Incident</Label>
                      <Input id="incident-location" placeholder="Enter the exact location" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="incident-description">Detailed Description</Label>
                      <Textarea
                        id="incident-description"
                        placeholder="Describe what happened in detail..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Type of Incident</Label>
                      <RadioGroup defaultValue="theft">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="theft" id="theft" />
                          <Label htmlFor="theft">Theft/Robbery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="assault" id="assault" />
                          <Label htmlFor="assault">Assault/Battery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fraud" id="fraud" />
                          <Label htmlFor="fraud">Fraud/Cheating</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="property" id="property" />
                          <Label htmlFor="property">Property Dispute</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cybercrime" id="cybercrime" />
                          <Label htmlFor="cybercrime">Cybercrime</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="witnesses">Witnesses (if any)</Label>
                      <Textarea id="witnesses" placeholder="Enter names and contact details of witnesses" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Next: Review</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="review">
                <Card>
                  <CardHeader>
                    <CardTitle>Review & Submit</CardTitle>
                    <CardDescription>Review your information before final submission</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <div className="bg-muted p-4 rounded-lg">
                          <p>Name: John Doe</p>
                          <p>Contact: johndoe@example.com | +91 98765 43210</p>
                          <p>Address: 123 Main Street, New Delhi</p>
                          <p>ID: Aadhar Card - XXXX XXXX XXXX</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Incident Details</h3>
                        <div className="bg-muted p-4 rounded-lg">
                          <p>Date & Time: 15 March 2023, 14:30</p>
                          <p>Location: Central Market, Lajpat Nagar</p>
                          <p>Type: Theft/Robbery</p>
                          <p>Description: My wallet was stolen while shopping at the market...</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="declaration">Declaration</Label>
                        <div className="flex items-start space-x-2">
                          <input type="checkbox" id="declaration" className="mt-1" />
                          <Label htmlFor="declaration" className="font-normal text-sm">
                            I hereby declare that the information provided by me is true to the best of my knowledge and
                            belief. I understand that filing a false FIR is punishable under the law.
                          </Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Submit FIR</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Important Information</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Filing a false FIR is a punishable offense under Section 182 of IPC</li>
                <li>You will receive a confirmation email with your FIR number after submission</li>
                <li>You may be contacted by the police for additional information</li>
                <li>For emergency situations, please call 100 immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

