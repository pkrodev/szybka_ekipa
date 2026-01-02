import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, serviceLabels } from "@/lib/validation";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // In production, you would:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to database
    // 3. Send to CRM
    // 4. Send SMS notification

    // For now, we'll just log and return success
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      service: serviceLabels[validatedData.service],
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Example: Send email (uncomment and configure when ready)
    /*
    await sendEmail({
      to: "szybkaekipa24@gmail.com",
      subject: `Nowe zapytanie - ${serviceLabels[validatedData.service]}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone}</p>
        <p><strong>Usługa:</strong> ${serviceLabels[validatedData.service]}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${validatedData.message}</p>
        <hr>
        <p><small>Wysłano: ${new Date().toLocaleString('pl-PL')}</small></p>
      `,
    });
    */

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
