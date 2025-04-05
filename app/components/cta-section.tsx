import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Strata Management?</h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
          Join our community of satisfied residents and experience the benefits of our digital strata management system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base px-8">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20 text-base px-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

