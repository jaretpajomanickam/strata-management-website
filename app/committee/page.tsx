import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function CommitteePage() {
  const committeeMembers = [
    {
      name: "Sarah Johnson",
      role: "Chairperson",
      email: "sarah.johnson@example.com",
      bio: "Sarah has been the Chairperson for 3 years and has extensive experience in property management. She is dedicated to maintaining high standards in our community.",
      image: "/images/committee-chair.jpg",
    },
    {
      name: "Michael Chen",
      role: "Secretary",
      email: "michael.chen@example.com",
      bio: "Michael ensures all communications and records are maintained accurately. He has a background in administration and is committed to transparent governance.",
      image: "/images/committee-secretary.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Treasurer",
      email: "emma.rodriguez@example.com",
      bio: "Emma oversees the financial management of the strata. With her background in accounting, she ensures our finances are managed responsibly.",
      image: "/images/committee-treasurer.jpg",
    },
    {
      name: "David Wilson",
      role: "Committee Member",
      email: "david.wilson@example.com",
      bio: "David focuses on building maintenance and improvements. His experience in construction helps in evaluating and planning maintenance projects.",
      image: "/images/committee-member1.jpg",
    },
    {
      name: "Priya Patel",
      role: "Committee Member",
      email: "priya.patel@example.com",
      bio: "Priya leads community engagement initiatives. She organizes events and ensures residents' concerns are addressed promptly.",
      image: "/images/committee-member2.jpg",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Committee Members</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Meet the dedicated team responsible for managing our strata community. Feel free to reach out to them with any
        questions or concerns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committeeMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <p className="font-medium text-primary">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                  {member.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

