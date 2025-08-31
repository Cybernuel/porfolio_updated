import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Force this API route to use Node.js runtime to avoid Edge Runtime limitations
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (notification)
    const notificationEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to sender
    const autoReplyEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Hi ${name},
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" 
            and I'll get back to you as soon as possible.
          </p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="line-height: 1.6; color: #555; font-style: italic;">"${message}"</p>
          </div>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            I typically respond within 24-48 hours. If your inquiry is urgent, 
            please don't hesitate to follow up.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Best regards,<br>
            <strong>Your Name</strong>
          </p>
          <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(notificationEmail), transporter.sendMail(autoReplyEmail)])

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
