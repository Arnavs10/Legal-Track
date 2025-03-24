import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HandbookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">IPC Handbook</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive guide to the Indian Penal Code sections and their applications
              </p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search IPC sections, keywords, or offenses..." className="pl-10" />
              </div>
            </div>

            <Tabs defaultValue="common">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="common">Common Sections</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="recent">Recent Updates</TabsTrigger>
                <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
              </TabsList>

              <TabsContent value="common">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { section: "Section 302", title: "Punishment for murder" },
                    { section: "Section 376", title: "Punishment for rape" },
                    { section: "Section 420", title: "Cheating and dishonestly inducing delivery of property" },
                    { section: "Section 307", title: "Attempt to murder" },
                    {
                      section: "Section 354",
                      title: "Assault or criminal force to woman with intent to outrage her modesty",
                    },
                    {
                      section: "Section 498A",
                      title: "Husband or relative of husband of a woman subjecting her to cruelty",
                    },
                  ].map((item) => (
                    <Card key={item.section} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.section}</CardTitle>
                        <CardDescription>{item.title}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="categories">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { category: "Offenses Against the State", count: 15 },
                    { category: "Offenses Against Public Tranquility", count: 12 },
                    { category: "Offenses by Public Servants", count: 18 },
                    { category: "Offenses Against Human Body", count: 32 },
                    { category: "Offenses Against Property", count: 28 },
                    { category: "Offenses Related to Documents", count: 14 },
                  ].map((item) => (
                    <Card key={item.category} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.category}</CardTitle>
                        <CardDescription>{item.count} sections</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Browse Category
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Updates to IPC</CardTitle>
                    <CardDescription>Latest amendments and changes to the Indian Penal Code</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          date: "15 Jan 2023",
                          section: "Section 376",
                          description: "Amendment to punishment provisions",
                        },
                        {
                          date: "03 Mar 2023",
                          section: "Section 498A",
                          description: "Procedural changes for investigation",
                        },
                        { date: "22 Apr 2023", section: "Section 354", description: "Expanded definition of modesty" },
                      ].map((item, index) => (
                        <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{item.section}</span>
                            <span className="text-sm text-muted-foreground">{item.date}</span>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookmarks">
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You haven't bookmarked any IPC sections yet</p>
                  <Button>Browse Common Sections</Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Featured Section</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Section 420 - Cheating and dishonestly inducing delivery of property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Definition</h3>
                    <p className="text-muted-foreground">
                      Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any
                      person, or to make, alter or destroy the whole or any part of a valuable security, or anything
                      which is signed or sealed, and which is capable of being converted into a valuable security, shall
                      be punished with imprisonment of either description for a term which may extend to seven years,
                      and shall also be liable to fine.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Essential Elements</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Deception (cheating)</li>
                      <li>Dishonest intention</li>
                      <li>Inducement</li>
                      <li>Delivery of property or valuable security</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Punishment</h3>
                    <p className="text-muted-foreground">Imprisonment up to 7 years and fine</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Related Case Laws</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Hridaya Ranjan Prasad Verma v. State of Bihar (2000)</li>
                      <li>Dr. S. Dutt v. State of Uttar Pradesh (1966)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

