"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Info, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

// Mock prediction results
const predictionResults = [
  {
    section: "IPC 420",
    title: "Cheating and dishonestly inducing delivery of property",
    confidence: 98,
    description:
      "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    relevance: "The case involves deception to obtain property, which is a key element of IPC 420.",
  },
  {
    section: "IPC 406",
    title: "Punishment for criminal breach of trust",
    confidence: 85,
    description:
      "Whoever commits criminal breach of trust shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    relevance: "The property was entrusted to the accused who then misappropriated it, constituting a breach of trust.",
  },
  {
    section: "IPC 34",
    title: "Acts done by several persons in furtherance of common intention",
    confidence: 72,
    description:
      "When a criminal act is done by several persons in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.",
    relevance: "Multiple individuals were involved in the execution of the offense with a shared intention.",
  },
]

export default function PredictionResultPage() {
  const [activeTab, setActiveTab] = useState("sections")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/predict" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Prediction Form
            </Link>
            <h1 className="text-3xl font-bold">IPC Section Prediction Results</h1>
            <p className="text-muted-foreground">
              Based on your case details, our AI has identified the following relevant IPC sections
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="border-none shadow-md">
              <CardHeader className="bg-primary/5 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Case Summary</CardTitle>
                    <CardDescription>Property dispute involving fraudulent documentation</CardDescription>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    98% Confidence
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-primary" />
                      Case Details
                    </h3>
                    <p className="text-muted-foreground">
                      The complainant alleges that the accused fraudulently obtained property documents and transferred
                      ownership without consent. The accused was entrusted with the documents for safekeeping but
                      misused them for personal gain.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      Important Note
                    </h3>
                    <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-md">
                      This prediction is based on the information provided and should be used as guidance only. We
                      recommend consulting with a legal professional for final verification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="sections" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="sections">Predicted Sections</TabsTrigger>
                <TabsTrigger value="next-steps">Recommended Next Steps</TabsTrigger>
              </TabsList>

              <TabsContent value="sections" className="space-y-6">
                {predictionResults.map((result, index) => (
                  <Card key={index} className="border-none shadow-md overflow-hidden">
                    <CardHeader className="bg-primary/5 pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{result.section}</CardTitle>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {result.confidence}% Match
                        </div>
                      </div>
                      <CardDescription className="text-base font-medium">{result.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">{result.description}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Relevance to Your Case</h3>
                        <p className="text-muted-foreground">{result.relevance}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="next-steps">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recommended Next Steps</CardTitle>
                    <CardDescription>Based on our analysis, here are the recommended actions</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">File an FIR</h3>
                          <p className="text-muted-foreground">
                            File a First Information Report at your local police station or use our online FIR filing
                            service.
                          </p>
                          <Button className="mt-3" asChild>
                            <Link href="/file-fir">File FIR Online</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Consult a Lawyer</h3>
                          <p className="text-muted-foreground">
                            Speak with a legal professional to understand your options and the strength of your case.
                          </p>
                          <Button
                            variant="outline"
                            className="mt-3 border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Find Legal Counsel
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Gather Evidence</h3>
                          <p className="text-muted-foreground">
                            Collect all relevant documents, communications, and witness statements to support your case.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Explore Mediation</h3>
                          <p className="text-muted-foreground">
                            Consider mediation as an alternative to court proceedings for faster resolution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/predict">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  New Prediction
                </Link>
              </Button>
              <Button asChild>
                <Link href="/file-fir">
                  <FileText className="h-4 w-4 mr-2" />
                  File FIR
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  )
}

