import { Resend } from "resend";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body: { name?: string; phone?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, message } = body;
  if (!name || !phone || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = Netlify.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json({ error: "Email service unavailable" }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "ipchebronpypa10@gmail.com",
    subject: `New Message from ${name} | IPC Hebron`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #1f1b17; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; font-family: serif;">New Message from IPC Hebron Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-style: italic; color: #444;">
          ${message}
        </div>
        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="font-size: 11px; color: #888;">This email was sent automatically from the contact form on ipchebronpypa.netlify.app.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
};

export const config = {
  path: "/api/contact",
};
