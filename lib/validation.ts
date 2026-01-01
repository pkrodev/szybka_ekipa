import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
    .max(100, "Imię i nazwisko może mieć maksymalnie 100 znaków"),
  email: z
    .string()
    .email("Podaj poprawny adres email")
    .max(100, "Email może mieć maksymalnie 100 znaków"),
  phone: z
    .string()
    .min(9, "Numer telefonu musi mieć co najmniej 9 cyfr")
    .max(15, "Numer telefonu może mieć maksymalnie 15 cyfr")
    .regex(/^[0-9\s\-+()]+$/, "Podaj poprawny numer telefonu"),
  service: z.enum(
    ["clearing", "waste-disposal", "other"],
    { message: "Wybierz rodzaj usługi" }
  ),
  message: z
    .string()
    .min(10, "Wiadomość musi mieć co najmniej 10 znaków")
    .max(1000, "Wiadomość może mieć maksymalnie 1000 znaków"),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Musisz wyrazić zgodę na przetwarzanie danych osobowych",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Service type labels
export const serviceLabels: Record<ContactFormData["service"], string> = {
  clearing: "Opróżnianie mieszkań",
  "waste-disposal": "Wywóz śmieci",
  other: "Inne",
};

// Helper function to format validation errors
export function formatZodErrors(errors: z.ZodError) {
  const formattedErrors: Record<string, string> = {};
  errors.issues.forEach((issue) => {
    const path = issue.path.join(".");
    formattedErrors[path] = issue.message;
  });
  return formattedErrors;
}

// Phone number formatter
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format as: XXX XXX XXX or XXX-XXX-XXX
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }

  return phone;
}

// Email validation helper
export function isValidEmail(email: string): boolean {
  try {
    z.string().email().parse(email);
    return true;
  } catch {
    return false;
  }
}
