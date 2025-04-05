import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Users, Bell, ArrowRight } from "lucide-react"

export function QuickLinks() {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold mb-4 text-center">Quick Access</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Everything you need to manage your strata community in one place
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="h-2 bg-blue-500 w-full"></div>
          <CardContent className="pt-6">
            <div className="bg-blue-100 text-blue-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Wrench className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Maintenance Requests</h3>
            <p className="mb-6 text-muted-foreground">
              Report property issues, upload photos, and get timely resolutions from our maintenance team.
            </p>
            <Link
              href="/maintenance"
              className="inline-flex items-center text-blue-600 font-medium group-hover:underline"
            >
              Submit a request <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="h-2 bg-amber-500 w-full"></div>
          <CardContent className="pt-6">
            <div className="bg-amber-100 text-amber-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Bell className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Announcements</h3>
            <p className="mb-6 text-muted-foreground">
              Access important notices, upcoming meetings, and strata rules all in one place.
            </p>
            <Link
              href="/announcements"
              className="inline-flex items-center text-amber-600 font-medium group-hover:underline"
            >
              View announcements <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="h-2 bg-green-500 w-full"></div>
          <CardContent className="pt-6">
            <div className="bg-green-100 text-green-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Committee Members</h3>
            <p className="mb-6 text-muted-foreground">
              Get to know your committee members and their roles in managing the strata community.
            </p>
            <Link
              href="/committee"
              className="inline-flex items-center text-green-600 font-medium group-hover:underline"
            >
              View committee <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

