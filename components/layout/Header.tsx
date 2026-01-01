"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import { NAV_ITEMS, CONTACT } from "@/lib/constants";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* Top bar - Contact info */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <Container>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href={CONTACT.PHONE_HREF}
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">{CONTACT.PHONE}</span>
              </a>
              <a
                href={CONTACT.PHONE_2_HREF}
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">{CONTACT.PHONE_2}</span>
              </a>
              <a
                href={CONTACT.EMAIL_HREF}
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>{CONTACT.EMAIL}</span>
              </a>
            </div>
            <div className="text-sm">
              <span>7 dni w tygodniu | 6:00-22:00</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-primary">Szybka</span>
              <span className="text-secondary"> Ekipa</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild>
              <a href={CONTACT.PHONE_HREF}>
                <Phone className="w-4 h-4 mr-2" />
                Zadzwoń teraz
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:bg-gray-100 rounded-lg"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden bg-white border-t border-border overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile contact buttons */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Button asChild className="w-full">
              <a href={CONTACT.PHONE_HREF}>
                <Phone className="w-4 h-4 mr-2" />
                Zadzwoń: {CONTACT.PHONE}
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/kontakt">
                <Mail className="w-4 h-4 mr-2" />
                Formularz kontaktowy
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
