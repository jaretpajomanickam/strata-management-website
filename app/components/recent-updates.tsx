import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

export function RecentUpdates() {
  const updates = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: new Date("2023-11-15"),
      category: "Meeting",
      excerpt:
        "The Annual General Meeting will be held in the community room on November 15th at 7:00 PM. All owners are encouraged to attend.",
    },
    {
      id: 2,
      title: "Pool Maintenance",
      date: new Date("2023-10-25"),
      category: "Maintenance",
      excerpt:
        "The swimming pool will be closed for maintenance from October 25th to October 27th. We apologize for any inconvenience.",
    },
    {
      id: 3,
      title: "Community BBQ Event",
      date: new Date("2023-11-20"),
      category: "Event",
      excerpt:
        "Join us for a community BBQ on November 20th from 4:00 PM to 7:00 PM in the garden area. Food and drinks will be provided.",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Meeting":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80"
      case "Maintenance":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100/80"
      case "Event":
        return "bg-green-100 text-green-800 hover:bg-green-100/80"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
    }
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recent Updates</h2>
            <p className="text-muted-foreground">Stay informed with the latest announcements and events</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/announcements">View All Announcements</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((update) => (
            <Card key={update.id} className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className={getCategoryColor(update.category)}>{update.category}</Badge>
                  <CardDescription>
                    <div className="flex items-center">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      {format(update.date, "MMM d, yyyy")}
                    </div>
                  </CardDescription>
                </div>
                <CardTitle className="mt-2">{update.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{update.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

