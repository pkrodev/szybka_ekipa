import { Metadata } from "next";
import Link from "next/link";
import { Truck, Home, Trash2, Wrench, ArrowRight, CheckCircle, Sofa, Heart, HardHat, Hammer } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { generateSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";

const iconMap = {
  Truck,
  Home,
  Trash2,
  Wrench,
  Sofa,
  Heart,
  HardHat,
  Hammer,
};

export const metadata: Metadata = generateSEO({
  title: "Nasze Usługi",
  description:
    "Pełna oferta usług transportowych w Lublinie: opróżnianie mieszkań i wywóz śmieci. Profesjonalnie, szybko, tanio.",
  keywords: [
    "usługi transportowe Lublin",
    "oferta transport mebli",
    "cennik usług Lublin",
  ],
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
      <Container>
        {/* Page header */}
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nasze Usługi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompleksowe usługi transportowe i wywozowe w Lublinie i okolicach.
            Profesjonalna obsługa, konkurencyjne ceny, realizacja 7 dni w
            tygodniu.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || Truck;

            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg font-bold text-primary">
                        {service.priceInfo}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground mb-3">
                      W skład usługi wchodzi:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border">
                    <Link
                      href={`/uslugi/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group-hover:gap-3 transition-all"
                    >
                      Dowiedz się więcej
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Why choose us section */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dlaczego my?
            </h2>
            <p className="text-lg text-muted-foreground">
              Co wyróżnia Szybką Ekipę na tle konkurencji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                Szybka realizacja
              </h3>
              <p className="text-sm text-muted-foreground">
                Często tego samego dnia lub następnego. Pracujemy 7 dni w
                tygodniu.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                Przystępne ceny
              </h3>
              <p className="text-sm text-muted-foreground">
                Konkurencyjne stawki bez ukrytych kosztów. Wycena przed
                realizacją.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                Doświadczenie
              </h3>
              <p className="text-sm text-muted-foreground">
                500+ zadowolonych klientów w Lublinie i okolicach.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Ubezpieczenie</h3>
              <p className="text-sm text-muted-foreground">
                Pełne OC firmy. Twoje meble i rzeczy są u nas bezpieczne.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 mb-20">
          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Potrzebujesz wyceny?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zadzwoń lub wypełnij formularz kontaktowy. Przygotujemy dla Ciebie
              indywidualną ofertę!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={CONTACT.PHONE_HREF}>Zadzwoń: {CONTACT.PHONE}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kontakt">Formularz kontaktowy</Link>
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
