import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      return NextResponse.json(
        { error: "Webhook URL missing" },
        { status: 500 }
      );
    }

    const payload = {
      text: `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:*\n${message}`,
    };

    await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}