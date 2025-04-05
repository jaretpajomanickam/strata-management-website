import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-building.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.65)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-[1]" />
      <div className="container relative z-10 text-white px-4 flex flex-col items-start">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Effortless Strata Management for Your Community!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
            Simplifying property management with digital tools that connect committees and residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/maintenance">Report an Issue</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-base px-8"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-[2]" />
    </div>
  )
}

