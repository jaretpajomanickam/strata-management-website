import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedProperties() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/modern-apartment.jpg"
                  alt="Modern apartment building"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">Modern Apartment Complex</h3>
                <p className="text-sm text-muted-foreground mb-4">Contemporary living with all amenities</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/gallery">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/townhouse-complex.jpg"
                  alt="Townhouse complex"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">Riverside Townhouses</h3>
                <p className="text-sm text-muted-foreground mb-4">Spacious homes with river views</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/gallery">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/luxury-condo.jpg"
                  alt="Luxury condominium"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">Skyline Condominiums</h3>
                <p className="text-sm text-muted-foreground mb-4">Luxury living with panoramic views</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/gallery">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

