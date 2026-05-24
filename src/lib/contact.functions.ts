import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: { name: string; phone: string; message: string }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not defined");
      throw new Error("Email sending is currently unavailable. Please contact the administrator.");
    }

    const resend = new Resend(apiKey);

    try {
      const result = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "ipchebronpypa10@gmail.com",
        subject: `New Message from ${data.name} | IPC Hebron`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
            <h2 style="color: #1f1b17; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; font-family: serif;">New Message from IPC Hebron Website</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-style: italic; color: #444;">
              ${data.message}
            </div>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888;">This email was sent automatically from the contact form on ipchebronpypa.netlify.app.</p>
          </div>
        `,
      });

      if (result.error) {
        console.error("Resend send error:", result.error);
        throw new Error(result.error.message || "Failed to send email");
      }

      return { success: true };
    } catch (error: any) {
      console.error("Failed to send email via Resend:", error);
      throw new Error(error.message || "Failed to send email");
    }
  });
