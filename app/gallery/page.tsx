import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertyGallery() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Property Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/modern-apartment.jpg" alt="Modern apartment building" fill className="object-cover" />
            </div>
            <h3 className="mt-3 font-medium">Modern Apartment Complex</h3>
            <p className="text-sm text-muted-foreground">24 units with shared amenities</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/townhouse-complex.jpg" alt="Townhouse complex" fill className="object-cover" />
            </div>
            <h3 className="mt-3 font-medium">Riverside Townhouses</h3>
            <p className="text-sm text-muted-foreground">12 townhouses with private gardens</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/luxury-condo.jpg" alt="Luxury condominium" fill className="object-cover" />
            </div>
            <h3 className="mt-3 font-medium">Skyline Condominiums</h3>
            <p className="text-sm text-muted-foreground">High-rise with 36 luxury units</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/community-pool.jpg" alt="Community swimming pool" fill className="object-cover" />
            </div>
            <h3 className="mt-3 font-medium">Community Facilities</h3>
            <p className="text-sm text-muted-foreground">Shared pool and recreation area</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/garden-property.jpg"
                alt="Property with landscaped gardens"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-3 font-medium">Garden Residences</h3>
            <p className="text-sm text-muted-foreground">18 units with landscaped grounds</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/maintenance-team.jpg" alt="Maintenance team at work" fill className="object-cover" />
            </div>
            <h3 className="mt-3 font-medium">Maintenance Services</h3>
            <p className="text-sm text-muted-foreground">Professional property upkeep</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

