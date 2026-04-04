import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit: 3 emails per hour per IP
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    // First request or window expired
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false; // Rate limit exceeded
  }

  // Increment count
  userLimit.count++;
  return true;
}

// Verify reCAPTCHA token
// async function verifyRecaptcha(token: string): Promise<boolean> {
//   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
//   if (!secretKey) {
//     console.warn("reCAPTCHA secret key not configured");
//     return true; // Skip verification if not configured
//   }

//   try {
//     const response = await fetch(
//       `https://www.google.com/recaptcha/api/siteverify`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `secret=${secretKey}&response=${token}`,
//       }
//     );

//     const data = await response.json();
//     return data.success && data.score > 0.5; // Score threshold for v3
//   } catch (error) {
//     console.error("reCAPTCHA verification error:", error);
//     return false;
//   }
// }

// Send email via Brevo
async function sendEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Portfolio Contact";

  if (!apiKey || !recipientEmail || !senderEmail) {
    throw new Error("Email service not configured");
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: recipientEmail }],
      replyTo: { email: data.email, name: `${data.firstName} ${data.lastName}` },
      subject: data.subject || "New Contact Form Submission",
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || "No subject"}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Brevo API error: ${error}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    // const { firstName, lastName, email, subject, message, recaptchaToken } = body;
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    // if (recaptchaToken) {
    //   const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    //   if (!isValidRecaptcha) {
    //     return NextResponse.json(
    //       { error: "reCAPTCHA verification failed" },
    //       { status: 400 }
    //     );
    //   }
    // }

    // Send email
    console.log("Attempting to send email via Brevo...");
    console.log("Environment check:", {
      hasApiKey: !!process.env.BREVO_API_KEY,
      hasRecipient: !!process.env.RECIPIENT_EMAIL,
      hasSender: !!process.env.BREVO_SENDER_EMAIL,
    });
    
    await sendEmail({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      subject: subject?.trim() || "New Contact Form Submission",
      message: message.trim(),
    });

    console.log("Email sent successfully!");
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    console.error("Error message:", error instanceof Error ? error.message : String(error));
    
    return NextResponse.json(
      { 
        error: "Failed to send email. Please try again later.",
        debug: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Contact API endpoint" });
}
