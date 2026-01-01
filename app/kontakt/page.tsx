import { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import { generateSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = generateSEO({
  title: "Kontakt",
  description:
    "Skontaktuj się z nami - transport mebli, opróżnianie mieszkań i wywóz śmieci w Lublinie. Zadzwoń: 733 435 333 lub wypełnij formularz kontaktowy.",
  keywords: [
    "kontakt transport Lublin",
    "formularz kontaktowy",
    "numer telefonu szybka ekipa",
  ],
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
      <Container>
        {/* Page header */}
        <div className="py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Kontakt
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skontaktuj się z nami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Masz pytania? Potrzebujesz wyceny? Zadzwoń, napisz lub wypełnij
            formularz. Odpowiadamy szybko i chętnie pomożemy!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-20">
          {/* Contact info - left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Dane kontaktowe
            </h2>

            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Telefony</p>
                  <a
                    href={CONTACT.PHONE_HREF}
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors block mb-1"
                  >
                    {CONTACT.PHONE}
                  </a>
                  <a
                    href={CONTACT.PHONE_2_HREF}
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors block mb-2"
                  >
                    {CONTACT.PHONE_2}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Najszybszy kontakt - odbieramy od ręki
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:border-secondary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href={CONTACT.EMAIL_HREF}
                    className="text-lg font-semibold text-foreground hover:text-secondary transition-colors break-all block mb-2"
                  >
                    {CONTACT.EMAIL}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Odpowiadamy w ciągu kilku godzin
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    Godziny dostępności
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Poniedziałek - Niedziela
                  </p>
                  <p className="text-xl font-bold text-accent">6:00 - 22:00</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pracujemy 7 dni w tygodniu
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-muted rounded-lg">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    Obszar działania
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {siteConfig.location.city} i okolice
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.serviceAreas.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">
                Szybka odpowiedź
              </h3>
              <p className="text-sm text-muted-foreground">
                Najszybciej skontaktujesz się z nami telefonicznie. Odbieramy
                telefony w godzinach 6:00-22:00, 7 dni w tygodniu. Jeśli wolisz
                formę pisemną, wypełnij formularz - oddzwonimy lub odpisujemy
                tego samego dnia!
              </p>
            </div>
          </div>

          {/* Contact form - main area */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Formularz kontaktowy
              </h2>
              <p className="text-muted-foreground">
                Wypełnij formularz, a skontaktujemy się z Tobą tak szybko jak
                to możliwe
              </p>
            </div>

            <ContactForm />

            {/* Additional info */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-border">
              <h3 className="font-bold text-foreground mb-3">
                Co warto podać w wiadomości?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dokładny adres (miasto, ulica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Piętro i informację czy jest winda (ważne przy transporcie
                    mebli)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Orientacyjną objętość (m³) lub powierzchnię (m²) mieszkania
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Preferowany termin realizacji (możliwe często tego samego
                    dnia)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Dodatkowe informacje (np. czy potrzebny demontaż mebli)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
