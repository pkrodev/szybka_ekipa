import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Get form fields
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;

    // Validate required fields
    if (!name || !phone || !location) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 }
      );
    }

    // Get files
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json(
        { error: "Nie dodano żadnych zdjęć" },
        { status: 400 }
      );
    }

    if (files.length > 5) {
      return NextResponse.json(
        { error: "Maksymalnie 5 zdjęć" },
        { status: 400 }
      );
    }

    // Convert files to attachments
    const attachments = await Promise.all(
      files.map(async (file, index) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name || `zdjecie-${index + 1}.jpg`,
          content: buffer,
          contentType: file.type,
        };
      })
    );

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Nowe zapytanie o wycenę
        </h2>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Dane klienta:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Imię:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Lokalizacja:</td>
              <td style="padding: 8px 0;">${location}</td>
            </tr>
          </table>
        </div>

        ${
          description
            ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Dodatkowe informacje:</h3>
          <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${description}</p>
        </div>
        `
            : ""
        }

        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;">
            <strong>⏰ Ważne:</strong> Klient oczekuje kontaktu w ciągu 15 minut!
          </p>
        </div>

        <p style="color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          Zdjęcia znajdują się w załącznikach (${files.length} ${files.length === 1 ? "zdjęcie" : files.length < 5 ? "zdjęcia" : "zdjęć"})
        </p>
      </div>
    `;

    const emailText = `
NOWE ZAPYTANIE O WYCENĘ

Dane klienta:
- Imię: ${name}
- Telefon: ${phone}
- Lokalizacja: ${location}

${description ? `Dodatkowe informacje:\n${description}\n` : ""}

⏰ WAŻNE: Klient oczekuje kontaktu w ciągu 15 minut!

Liczba załączonych zdjęć: ${files.length}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `Nowe zapytanie o wycenę - ${name}`,
      text: emailText,
      html: emailHtml,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Zapytanie zostało wysłane",
    });
  } catch (error) {
    console.error("Error sending quote request:", error);
    return NextResponse.json(
      {
        error: "Błąd podczas wysyłania zapytania",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
