"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How do I submit a maintenance request?",
      answer:
        "You can submit a maintenance request through our online portal by navigating to the Maintenance page. Fill out the form with your details, describe the issue, and optionally upload a photo. Our team will respond within 24 hours.",
    },
    {
      question: "When are committee meetings held?",
      answer:
        "Committee meetings are typically held on the first Tuesday of each month at 7:00 PM in the community room. All residents are welcome to attend. Meeting schedules and any changes are posted on the Announcements page.",
    },
    {
      question: "How can I access strata documents and by-laws?",
      answer:
        "All strata documents, including by-laws, meeting minutes, and financial reports, are available to residents through the secure portal. If you need assistance accessing these documents, please contact the strata manager.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "For urgent maintenance issues outside of office hours, please call our emergency hotline at (02) 9876 5432. For life-threatening emergencies, always call 000 first, then notify the building manager.",
    },
    {
      question: "How do I update my contact information?",
      answer:
        "You can update your contact information by logging into your resident portal account and navigating to the Profile section. Alternatively, you can contact the strata manager directly with your updated information.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our strata management system and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

