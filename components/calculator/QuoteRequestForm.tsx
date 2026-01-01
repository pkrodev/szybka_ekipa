"use client";

import { useState } from "react";
import { Upload, X, Send, Phone, MapPin, User } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

interface FormData {
  name: string;
  phone: string;
  location: string;
  description: string;
}

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    location: "",
    description: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // Validate file count
    if (files.length + selectedFiles.length > MAX_FILES) {
      setMessage({
        type: "error",
        text: `Możesz dodać maksymalnie ${MAX_FILES} zdjęć`,
      });
      return;
    }

    // Validate file sizes and types
    const validFiles: File[] = [];
    const newPreviews: string[] = [];

    selectedFiles.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        setMessage({
          type: "error",
          text: "Możesz dodawać tylko pliki graficzne",
        });
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setMessage({
          type: "error",
          text: `Plik ${file.name} jest za duży (max 5MB)`,
        });
        return;
      }

      validFiles.push(file);
      newPreviews.push(URL.createObjectURL(file));
    });

    setFiles([...files, ...validFiles]);
    setPreviews([...previews, ...newPreviews]);
    setMessage(null);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    // Revoke object URL to free memory
    URL.revokeObjectURL(previews[index]);

    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Validate required fields
      if (!formData.name || !formData.phone || !formData.location) {
        throw new Error("Wypełnij wszystkie wymagane pola");
      }

      if (files.length === 0) {
        throw new Error("Dodaj przynajmniej jedno zdjęcie");
      }

      // Prepare form data
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("phone", formData.phone);
      submitData.append("location", formData.location);
      submitData.append("description", formData.description);

      files.forEach((file) => {
        submitData.append("files", file);
      });

      // Send request
      const response = await fetch("/api/quote-request", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Błąd podczas wysyłania");
      }

      // Success
      setMessage({
        type: "success",
        text: "Zapytanie wysłane! Skontaktujemy się z Tobą w ciągu 15 minut.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        location: "",
        description: "",
      });
      setFiles([]);
      previews.forEach((preview) => URL.revokeObjectURL(preview));
      setPreviews([]);
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Wystąpił błąd",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Message */}
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Imię <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Jan"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Telefon <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="123 456 789"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Adres / Lokalizacja <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="ul. Przykładowa 123, Lublin"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Dodatkowe informacje (opcjonalnie)
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Opisz co trzeba wykonać, ile mebli, jaki jest zakres prac..."
            />
          </div>

          {/* File upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Zdjęcia (3-5 zdjęć) <span className="text-red-500">*</span>
            </label>

            {/* Upload button */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <input
                type="file"
                id="file-upload"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                disabled={files.length >= MAX_FILES}
              />
              <label
                htmlFor="file-upload"
                className={`cursor-pointer ${
                  files.length >= MAX_FILES ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">
                  {files.length >= MAX_FILES
                    ? "Osiągnięto maksymalną liczbę zdjęć"
                    : "Kliknij aby dodać zdjęcia"}
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, WEBP do 5MB ({files.length}/{MAX_FILES})
                </p>
              </label>
            </div>

            {/* Preview grid */}
            {previews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview}
                      alt={`Podgląd ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-border"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      aria-label="Usuń zdjęcie"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={loading || files.length === 0}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Wysyłanie...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Wyślij zapytanie
              </>
            )}
          </Button>

          {/* Info */}
          <p className="text-xs text-muted-foreground text-center">
            Po wysłaniu formularza skontaktujemy się z Tobą telefonicznie w
            ciągu 15 minut z dokładną wyceną.
          </p>
        </form>
      </Card>
    </div>
  );
}
