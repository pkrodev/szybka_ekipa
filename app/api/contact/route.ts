import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, serviceLabels } from "@/lib/validation";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // Log submission
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      service: serviceLabels[validatedData.service],
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

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
          Nowe zapytanie z formularza kontaktowego
        </h2>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Dane klienta:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Imię i nazwisko:</td>
              <td style="padding: 8px 0;">${validatedData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${validatedData.email}" style="color: #2563eb; text-decoration: none;">${validatedData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px 0;"><a href="tel:${validatedData.phone}" style="color: #2563eb; text-decoration: none;">${validatedData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Usługa:</td>
              <td style="padding: 8px 0;">${serviceLabels[validatedData.service]}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Wiadomość:</h3>
          <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
        </div>

        <p style="color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          Wysłano: ${new Date().toLocaleString('pl-PL')}
        </p>
      </div>
    `;

    const emailText = `
NOWE ZAPYTANIE Z FORMULARZA KONTAKTOWEGO

Dane klienta:
- Imię i nazwisko: ${validatedData.name}
- Email: ${validatedData.email}
- Telefon: ${validatedData.phone}
- Usługa: ${serviceLabels[validatedData.service]}

Wiadomość:
${validatedData.message}

Wysłano: ${new Date().toLocaleString('pl-PL')}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Zapytanie - ${serviceLabels[validatedData.service]}`,
      text: emailText,
      html: emailHtml,
      replyTo: validatedData.email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Wiadomość została wysłana pomyślnie",
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Nieprawidłowe dane formularza",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Wystąpił błąd podczas przetwarzania formularza",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
