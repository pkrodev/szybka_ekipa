"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  contactFormSchema,
  ContactFormData,
  serviceLabels,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: "clearing",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wysyłania wiadomości");
      }

      setStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 733 435 333"
      );
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Success message */}
        {status === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">
                Wiadomość wysłana!
              </h3>
              <p className="text-sm text-green-700">
                Dziękujemy za kontakt. Odezwiemy się tak szybko jak to możliwe.
              </p>
            </div>
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">
                Błąd wysyłania
              </h3>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Imię <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className={cn(
              "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
              errors.name ? "border-red-500" : "border-border"
            )}
            placeholder="Jan"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Adres email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={cn(
                "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                errors.email ? "border-red-500" : "border-border"
              )}
              placeholder="jan@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Numer telefonu <span className="text-red-500">*</span>
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="tel"
              className={cn(
                "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                errors.phone ? "border-red-500" : "border-border"
              )}
              placeholder="123 456 789"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Rodzaj usługi <span className="text-red-500">*</span>
          </label>
          <select
            {...register("service")}
            id="service"
            className={cn(
              "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white",
              errors.service ? "border-red-500" : "border-border"
            )}
          >
            {Object.entries(serviceLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Wiadomość <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            className={cn(
              "w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none",
              errors.message ? "border-red-500" : "border-border"
            )}
            placeholder="Opisz czego potrzebujesz, podaj adres, piętro, czy jest winda, orientacyjną objętość/powierzchnię..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Im więcej szczegółów, tym dokładniejszą wycenę przygotujemy
          </p>
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              {...register("consent")}
              type="checkbox"
              className={cn(
                "mt-1 w-5 h-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer transition-colors",
                errors.consent
                  ? "border-red-500"
                  : "border-border group-hover:border-primary"
              )}
            />
            <span className="text-sm text-muted-foreground flex-1">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              kontaktu i przygotowania oferty. Administratorem danych jest
              Szybka Ekipa. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600 ml-8">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Wyślij wiadomość
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
