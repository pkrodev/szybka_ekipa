// Navigation items
export const NAV_ITEMS = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Kalkulator cen", href: "/#kalkulator-cen" },
  { label: "Galeria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

// Service areas with distances from Lublin (km)
export const SERVICE_AREAS = [
  { name: "Lublin", distance: 0 },
  { name: "Radzyń Podlaski", distance: 60 },
  { name: "Kock", distance: 45 },
  { name: "Lubartów", distance: 30 },
  { name: "Świdnik", distance: 10 },
] as const;

// Opening hours
export const OPENING_HOURS = {
  weekdays: { open: "06:00", close: "22:00" },
  weekends: { open: "06:00", close: "22:00" },
} as const;

// Contact info
export const CONTACT = {
  EMAIL: "szybkaekipa24@gmail.com",
  EMAIL_HREF: "mailto:szybkaekipa24@gmail.com",
} as const;
