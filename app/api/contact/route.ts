import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const business = String(body.business || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Resend API key is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "ShivShakti Web Services <info@shivshaktiwebservice.co.in>",
      to: ["shivshaktiwebservices@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry — ${name}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:700px;margin:0 auto;padding:30px;color:#111;">
          
          <h2 style="margin:0 0 8px;font-size:26px;">
            New Website Enquiry
          </h2>

          <p style="color:#666;margin:0 0 28px;font-size:14px;">
            Someone submitted a project enquiry through the
            ShivShakti Web Services website.
          </p>

          <div style="border:1px solid #e5e5e5;border-radius:14px;padding:22px;margin-bottom:20px;">
            
            <h3 style="margin:0 0 18px;font-size:18px;">
              Contact Details
            </h3>

            <p style="margin:8px 0;">
              <strong>Name:</strong> ${escapeHtml(name)}
            </p>

            <p style="margin:8px 0;">
              <strong>Business:</strong> ${escapeHtml(business || "Not provided")}
            </p>

            <p style="margin:8px 0;">
              <strong>Email:</strong> ${escapeHtml(email)}
            </p>

            <p style="margin:8px 0;">
              <strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}
            </p>

            <p style="margin:8px 0;">
              <strong>Service:</strong> ${escapeHtml(service)}
            </p>

          </div>

          <div style="border:1px solid #e5e5e5;border-radius:14px;padding:22px;">
            
            <h3 style="margin:0 0 18px;font-size:18px;">
              Project Details
            </h3>

            <p style="white-space:pre-wrap;line-height:1.7;margin:0;color:#333;">
              ${escapeHtml(message)}
            </p>

          </div>

          <div style="margin-top:25px;padding-top:18px;border-top:1px solid #eee;">
            <p style="margin:0;color:#888;font-size:12px;">
              ShivShakti Web Services
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry." },
      { status: 500 }
    );
  }
}