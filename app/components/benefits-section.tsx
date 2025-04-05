import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Our System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our strata management platform is designed to make property management easier for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/modern-apartment.jpg" alt="Modern apartment building" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Modern Solutions</h3>
              <p className="text-white/80">For modern communities</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Streamlined Maintenance</h3>
                <p className="text-muted-foreground">
                  Submit and track maintenance requests with ease. Upload photos and get real-time updates on the status
                  of your requests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Transparent Communication</h3>
                <p className="text-muted-foreground">
                  Stay informed with timely announcements about community events, meetings, and important notices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Accessible Committee</h3>
                <p className="text-muted-foreground">
                  Easily connect with committee members for questions, concerns, or suggestions about the community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Digital Documentation</h3>
                <p className="text-muted-foreground">
                  Access important strata documents, by-laws, and meeting minutes online at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

