"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Show only first 8 FAQs on homepage
  const displayedFAQs = faqs.slice(0, 8);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-muted/30 to-white">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Często Zadawane Pytania
          </h2>
          <p className="text-lg text-muted-foreground">
            Masz pytania? Sprawdź odpowiedzi na najczęściej zadawane pytania
            przez naszych klientów.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {displayedFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-4 pt-2 text-muted-foreground border-t border-border/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {faqs.length > 8 && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Masz więcej pytań? Sprawdź pełną listę FAQ lub skontaktuj się z
              nami bezpośrednio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Zadaj pytanie
              </a>
              <a
                href="tel:+48733435319"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Zadzwoń: 733 435 319
              </a>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
