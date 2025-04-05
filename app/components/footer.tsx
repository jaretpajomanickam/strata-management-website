import Link from "next/link"
import { Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              <span className="font-bold">{process.env.NEXT_PUBLIC_STRATA_NAME || "Strata Management"}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Simplifying property management for committees and residents.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-muted-foreground hover:text-foreground">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-muted-foreground hover:text-foreground">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-muted-foreground hover:text-foreground">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Strata Rules
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  By-Laws
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 Strata Street, Sydney NSW 2000</li>
              <li className="text-muted-foreground">info@stratamanagement.com</li>
              <li className="text-muted-foreground">(02) 1234 5678</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_STRATA_NAME || "Strata Management"}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

