import { ArrowRight } from "lucide-react"

export default function ProcessFlowchart() {
  const steps = [
    {
      number: "1",
      title: "Describe Your Case",
      description: "Provide details about your situation through our guided form",
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our system analyzes your case using legal precedents and IPC guidelines",
    },
    {
      number: "3",
      title: "Get IPC Recommendations",
      description: "Receive accurate IPC section predictions with explanations",
    },
    {
      number: "4",
      title: "File Report or Get Guidance",
      description: "Proceed with online FIR filing or get detailed information about your legal options",
    },
  ]

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row items-start justify-between relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center md:w-1/4 p-4 relative z-10">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-primary/30">
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary" />
              </div>
            )}
          </div>
        ))}

        {/* Mobile arrows */}
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30">
          {steps.slice(0, -1).map((_, index) => (
            <ArrowRight
              key={index}
              className="absolute left-1/2 -translate-x-1/2 text-primary"
              style={{ top: `${(index + 1) * 33}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

