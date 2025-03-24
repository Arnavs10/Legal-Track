import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MessageSquare } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Support Center</h1>
              <p className="text-lg text-muted-foreground">Get help with Legal Track services and features</p>
            </div>

            <Tabs defaultValue="contact">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="contact">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                        <CardDescription>Reach out to us through any of these channels</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-start gap-4">
                          <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Phone Support</h3>
                            <p className="text-muted-foreground">+91 98765 43210</p>
                            <p className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-6PM</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Email Support</h3>
                            <p className="text-muted-foreground">support@legaltrack.com</p>
                            <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <MessageSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Live Chat</h3>
                            <p className="text-muted-foreground">Available on our website</p>
                            <p className="text-sm text-muted-foreground">
                              24/7 automated support, with live agents during business hours
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>Fill out the form and we'll get back to you</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="What is your query about?" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your issue or question in detail..."
                            className="min-h-[120px]"
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Send Message</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Find answers to common questions about Legal Track</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How accurate is the IPC section prediction?</AccordionTrigger>
                        <AccordionContent>
                          Our AI-powered prediction system has an accuracy rate of approximately 95% based on the
                          information provided. The system is trained on thousands of legal cases and continuously
                          updated with the latest legal precedents. However, we always recommend consulting with a legal
                          professional for final verification.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is the online FIR filing legally valid?</AccordionTrigger>
                        <AccordionContent>
                          Yes, the online FIR filing through Legal Track is legally valid. We work in coordination with
                          local police departments to ensure that your FIR is properly registered. You will receive an
                          official FIR number and confirmation once your report is processed by the relevant police
                          station.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>How long does it take to process an online FIR?</AccordionTrigger>
                        <AccordionContent>
                          The processing time for an online FIR typically ranges from 24 to 48 hours. Once submitted,
                          your FIR is forwarded to the appropriate police jurisdiction for verification and processing.
                          You will receive updates via email and SMS throughout the process.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                        <AccordionContent>
                          Yes, we take data security very seriously. All personal information is encrypted and stored
                          securely in compliance with data protection regulations. We do not share your information with
                          any third parties except the relevant law enforcement agencies for FIR processing.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger>Can I track the status of my FIR?</AccordionTrigger>
                        <AccordionContent>
                          Yes, you can track the status of your FIR through your Legal Track account dashboard. Simply
                          log in and navigate to the "My FIRs" section where you can view real-time updates on your
                          filed reports.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger>What if I need to modify my FIR after submission?</AccordionTrigger>
                        <AccordionContent>
                          If you need to modify your FIR after submission but before it's processed by the police, you
                          can contact our support team immediately. Once the FIR is processed, any modifications will
                          need to be made through a supplementary statement at the police station.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>Legal Resources</CardTitle>
                    <CardDescription>Helpful guides and resources for legal assistance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {[
                        {
                          title: "Understanding IPC Sections",
                          description: "A comprehensive guide to common IPC sections and their applications",
                        },
                        {
                          title: "FIR Filing Guide",
                          description: "Step-by-step instructions for filing an effective FIR",
                        },
                        {
                          title: "Legal Rights Handbook",
                          description: "Know your rights during legal proceedings and police investigations",
                        },
                        {
                          title: "Evidence Collection Guide",
                          description: "How to properly collect and preserve evidence for your case",
                        },
                      ].map((resource, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                          <h3 className="font-medium mb-2">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                          <Button variant="link" className="p-0 h-auto text-primary">
                            Download PDF
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h3 className="font-semibold text-lg mb-4">Video Tutorials</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {[
                          { title: "How to Use Legal Track", duration: "5:32" },
                          { title: "Understanding Your Legal Options", duration: "8:15" },
                        ].map((video, index) => (
                          <div key={index} className="border rounded-lg overflow-hidden">
                            <div className="aspect-video bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">Video Thumbnail</span>
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium">{video.title}</h4>
                              <p className="text-sm text-muted-foreground">{video.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

