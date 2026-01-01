import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { siteConfig } from "@/config/site-config";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-muted-foreground">
            Masz pytania? Chcesz uzyskać wycenę? Zadzwoń, napisz lub odwiedź
            nas. Jesteśmy dostępni 7 dni w tygodniu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Dane kontaktowe
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Telefony</p>
                <div className="space-y-1">
                  <a
                    href={CONTACT.PHONE_HREF}
                    className="block text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT.PHONE}
                  </a>
                  <a
                    href={CONTACT.PHONE_2_HREF}
                    className="block text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT.PHONE_2}
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Najszybszy kontakt - odbieramy od ręki
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-secondary/5 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors">
              <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href={CONTACT.EMAIL_HREF}
                  className="text-lg font-semibold text-foreground hover:text-secondary transition-colors break-all"
                >
                  {CONTACT.EMAIL}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Odpowiadamy w ciągu kilku godzin
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-accent/5 rounded-xl border border-accent/20">
              <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  Godziny dostępności
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Poniedziałek - Niedziela
                </p>
                <p className="text-xl font-bold text-accent">6:00 - 22:00</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl border border-border">
              <div className="flex-shrink-0 p-3 bg-muted rounded-lg">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  Obszar działania
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {siteConfig.location.city} i okolice
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {siteConfig.serviceAreas.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 lg:p-10 border border-primary/20 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Gotowy do rozpoczęcia?
              </h3>
              <p className="text-lg text-muted-foreground">
                Zadzwoń teraz i umów się na wycenę lub realizację usługi.
                Odpowiadamy szybko i chętnie pomożemy!
              </p>
            </div>

            <div className="space-y-4">
              <Button asChild size="lg" className="w-full">
                <a href={CONTACT.PHONE_HREF}>
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: {CONTACT.PHONE}
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/kontakt">
                  <Mail className="w-5 h-5 mr-2" />
                  Formularz kontaktowy
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Zadowolonych klientów
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">7</div>
                  <div className="text-sm text-muted-foreground">
                    Dni w tygodniu
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">16h</div>
                  <div className="text-sm text-muted-foreground">
                    Dostępności dziennie
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
