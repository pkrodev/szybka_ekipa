import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, NAV_ITEMS } from "@/lib/constants";
import { siteConfig } from "@/config/site-config";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Opróżnianie mieszkań", href: "/uslugi/oprozniane-mieszkan" },
    { label: "Wywóz śmieci", href: "/uslugi/wywoz-smieci" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Szybka</span>
              <span className="text-white"> Ekipa</span>
            </div>
            <p className="text-sm mb-4">
              Profesjonalne opróżnianie mieszkań i wywóz śmieci w Lublinie i okolicach.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lublin i okolice</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nasze usługi</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href={CONTACT.PHONE_HREF}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-semibold">{CONTACT.PHONE}</span>
              </a>
              <a
                href={CONTACT.PHONE_2_HREF}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-semibold">{CONTACT.PHONE_2}</span>
              </a>
              <a
                href={CONTACT.EMAIL_HREF}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{CONTACT.EMAIL}</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">7 dni w tygodniu</div>
                  <div>6:00 - 22:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              © {currentYear} {siteConfig.name}. Wszelkie prawa zastrzeżone.
            </div>
            <div className="flex gap-6">
              <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">
                Polityka prywatności
              </Link>
              <Link href="/regulamin" className="hover:text-primary transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
