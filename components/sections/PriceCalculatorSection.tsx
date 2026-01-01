import { FileImage, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import QuoteRequestForm from "@/components/calculator/QuoteRequestForm";
import { CONTACT } from "@/lib/constants";

export default function PriceCalculatorSection() {
  return (
    <section id="kalkulator-cen" className="w-full py-20 bg-gradient-to-br from-muted/30 to-white">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <FileImage className="w-4 h-4" />
            Bezpłatna wycena
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Otrzymaj Dokładną Wycenę w 15 Minut
          </h2>
          <p className="text-lg text-muted-foreground">
            Wyślij zdjęcia i podstawowe dane - odezwiemy się telefonicznie z
            dokładną wyceną w ciągu 15 minut!
          </p>
        </div>

        {/* Quote Request Form */}
        <QuoteRequestForm />

        {/* Info box */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                  Jak to działa?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dodaj 3-5 zdjęć miejsca, które wymaga prac (mieszkanie, meble,
                  śmieci). Na podstawie zdjęć przygotujemy dla Ciebie dokładną
                  wycenę i skontaktujemy się telefonicznie w ciągu 15 minut.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Wolisz tradycyjny kontakt? Zadzwoń bezpośrednio:{" "}
                  <a
                    href={CONTACT.PHONE_HREF}
                    className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    {CONTACT.PHONE}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
