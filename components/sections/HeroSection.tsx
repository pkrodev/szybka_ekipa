import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 md:py-32">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Clock className="w-4 h-4" />
                Dostępni 7 dni w tygodniu
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Opróżnianie Mieszkań i Wywóz Mebli{" "}
              <span className="text-primary">w Lublinie</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Profesjonalne opróżnianie mieszkań i wywóz mebli. Szybko,
              tanio i bezpiecznie. Obsługujemy Lublin, Radzyń Podlaski, Kock,
              Lubartów i okolice.
            </p>

            {/* USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Szybka realizacja
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Często tego samego dnia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Doświadczony zespół
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Profesjonalna obsługa
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild size="lg">
                <a href={CONTACT.PHONE_HREF}>
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: {CONTACT.PHONE}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kontakt">
                  <Mail className="w-5 h-5 mr-2" />
                  Skontaktuj się z nami
                </Link>
              </Button>
            </div>

            {/* Trust badge */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  Zaufało nam już 500+ klientów
                </strong>{" "}
                w Lublinie i okolicach
              </p>
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/bus.jpg"
                alt="Samochód Szybkiej Ekipy - profesjonalny transport w Lublinie"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">6:00 - 22:00</p>
                  <p className="text-sm text-muted-foreground">
                    Każdego dnia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
