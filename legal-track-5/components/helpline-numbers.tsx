import { Phone, HeadphonesIcon, ShieldAlert, UserRound, Ambulance, Baby, UserPlus } from "lucide-react"
import Link from "next/link"

const helplines = [
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: "Police",
    number: "100",
    description: "Emergency police assistance",
  },
  {
    icon: <Ambulance className="h-8 w-8 text-primary" />,
    title: "Ambulance",
    number: "102",
    description: "Medical emergency services",
  },
  {
    icon: <UserRound className="h-8 w-8 text-primary" />,
    title: "Women Helpline",
    number: "1091",
    description: "Support for women in distress",
  },
  {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: "Child Helpline",
    number: "1098",
    description: "Support for children in distress",
  },
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Senior Citizens",
    number: "14567",
    description: "Elderly care helpline",
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
    title: "Legal Track",
    number: "1800-XXX-XXXX",
    description: "Our dedicated helpline",
  },
]

export default function HelplineNumbers() {
  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Phone className="h-6 w-6 text-primary mr-3" />
          <h2 className="text-3xl font-bold">Essential Legal Helpline Numbers</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {helplines.map((item, index) => (
            <Link
              href={`tel:${item.number.replace(/-/g, "")}`}
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-white hover:shadow-md transition-shadow group"
            >
              <div className="mb-3 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-primary font-bold">{item.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

