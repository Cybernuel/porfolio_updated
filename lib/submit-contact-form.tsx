"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return { success: false, message: "All fields are required." }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." }
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    })
console.log("Notification to:", process.env.EMAIL_RECEIVER)
console.log("Auto-reply to:", email)

    // Notification email to you
    const notificationEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio Contact: ${subject}`,
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
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
      replyTo: email, // user’s email from contact form
    }

    // Auto-reply to the sender
    const autoReplyEmail = {
      from: process.env.EMAIL_USER,
      to: email, // <-- send auto-reply to email entered in contact form
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio contact form. I've received your message about "<strong>${subject}</strong>" and I'll get back to you soon.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="margin-bottom: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p>Best regards,<br>
          <strong>Emmanuel Damilare Adegbite</strong><br>
          Cybersecurity Analyst & Support Specialist</p>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(autoReplyEmail),
    ])

    return { success: true, message: "Thank you for your message! I'll get back to you soon." }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}
