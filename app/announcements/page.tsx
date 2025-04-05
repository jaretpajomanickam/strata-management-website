import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, FileText, Bell } from "lucide-react"
import { format } from "date-fns"

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: new Date("2023-11-15"),
      category: "Meeting",
      description:
        "The Annual General Meeting will be held in the community room on November 15th at 7:00 PM. All owners are encouraged to attend as we will be discussing the budget for the upcoming year and electing new committee members.",
    },
    {
      id: 2,
      title: "Pool Maintenance",
      date: new Date("2023-10-25"),
      category: "Maintenance",
      description:
        "The swimming pool will be closed for maintenance from October 25th to October 27th. We apologize for any inconvenience and appreciate your understanding as we work to keep our facilities in top condition.",
    },
    {
      id: 3,
      title: "Updated Visitor Parking Rules",
      date: new Date("2023-10-10"),
      category: "Rules",
      description:
        "Please note that visitor parking is now limited to 48 hours. Visitors must register their vehicles with the building manager. Unregistered vehicles may be towed at the owner's expense. This change is effective immediately.",
    },
    {
      id: 4,
      title: "Fire Alarm Testing",
      date: new Date("2023-11-05"),
      category: "Notice",
      description:
        "Mandatory fire alarm testing will be conducted on November 5th between 10:00 AM and 2:00 PM. The alarms will sound intermittently during this period. No evacuation is required during the test.",
    },
    {
      id: 5,
      title: "Holiday Decoration Guidelines",
      date: new Date("2023-12-01"),
      category: "Rules",
      description:
        "As the holiday season approaches, please remember that decorations in common areas must be approved by the committee. Decorations on balconies must be secured and not pose any safety hazards. All decorations must be removed by January 15th.",
    },
    {
      id: 6,
      title: "Community BBQ Event",
      date: new Date("2023-11-20"),
      category: "Event",
      description:
        "Join us for a community BBQ on November 20th from 4:00 PM to 7:00 PM in the garden area. Food and drinks will be provided. Please RSVP by November 15th by contacting the building manager.",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Meeting":
        return <CalendarDays className="h-5 w-5" />
      case "Rules":
        return <FileText className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Meeting":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80"
      case "Maintenance":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100/80"
      case "Rules":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100/80"
      case "Event":
        return "bg-green-100 text-green-800 hover:bg-green-100/80"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Announcements</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Stay updated with the latest notices, upcoming meetings, and strata rules.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {format(announcement.date, "MMMM d, yyyy")}
                    </div>
                  </CardDescription>
                </div>
                <Badge className={getCategoryColor(announcement.category)}>
                  <span className="flex items-center">
                    {getCategoryIcon(announcement.category)}
                    <span className="ml-1">{announcement.category}</span>
                  </span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{announcement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

