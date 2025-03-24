import Image from "next/image"
import { FileText, Shield, BookOpen, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import HeroCarousel from "@/components/hero-carousel"
import HelplineNumbers from "@/components/helpline-numbers"
import ProcessFlowchart from "@/components/process-flowchart"
import ChatbotButton from "@/components/chatbot-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* Main Services Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive Legal Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Legal Track provides powerful tools to help you navigate the legal system efficiently
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={<Shield className="h-10 w-10" />}
                title="IPC Section Prediction"
                description="Get accurate IPC section recommendations based on your case details"
                link="/predict"
              />
              <ServiceCard
                icon={<FileText className="h-10 w-10" />}
                title="Online FIR Filing"
                description="File First Information Reports online without visiting the police station"
                link="/file-fir"
              />
              <ServiceCard
                icon={<BookOpen className="h-10 w-10" />}
                title="IPC Handbook"
                description="Access comprehensive information about Indian Penal Code sections"
                link="/handbook"
              />
              <ServiceCard
                icon={<HeadphonesIcon className="h-10 w-10" />}
                title="24/7 Support"
                description="Get assistance from our legal experts whenever you need it"
                link="/support"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section with Flowchart */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform simplifies the legal process in just a few easy steps
              </p>
            </div>

            <ProcessFlowchart />
          </div>
        </section>

        {/* Helpline Numbers Section */}
        <HelplineNumbers />

        {/* Statistics Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center p-6 border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                  <p className="text-lg">Accuracy in IPC Section Prediction</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
                  <p className="text-lg">Online FIRs Filed Successfully</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-lg">Support Available for Assistance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Benefits of Legal Track</h2>
                <ul className="space-y-4">
                  {[
                    "AI-powered IPC section prediction with 98% accuracy",
                    "Secure and legally valid online FIR filing",
                    "Comprehensive IPC handbook with regular updates",
                    "24/7 expert support for all your legal queries",
                    "Time-saving digital process with real-time updates",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-lg"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Legal Track Benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from people who have used Legal Track to navigate their legal challenges
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 border-none shadow-md bg-white">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium text-primary">U{i}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">User {i}</h4>
                        <p className="text-sm text-muted-foreground">Delhi</p>
                      </div>
                    </div>
                    <p className="italic">
                      "Legal Track helped me understand the relevant IPC sections for my case and guided me through the
                      FIR filing process. Highly recommended!"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  )
}

