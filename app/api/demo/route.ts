import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is required");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry && now - entry.timestamp < RATE_LIMIT_WINDOW) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    entry.count += 1;
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
  }

  try {
    const body = await request.json();

    const fullName = body.fullName?.trim();
    const organization = body.organization?.trim();
    const email = body.email?.trim();
    const deviceCount = body.deviceCount?.trim();
    const complianceProcess = body.complianceProcess?.trim();

    if (!fullName || !organization || !email || !deviceCount || !complianceProcess) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Avera Demo <demo@averasystems.com>",
      to: "jmylsg@averasystems.com",
      subject: "New Demo Request – Avera",
      html: `
        <table style="font-family: sans-serif; font-size: 14px; color: #111; border-collapse: collapse; width: 100%; max-width: 560px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 200px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Organization</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${organization}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Work Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Estimated Device Count</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${deviceCount}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600;">Current Compliance Process</td>
            <td style="padding: 10px 0;">${complianceProcess}</td>
          </tr>
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send request" }, { status: 500 });
  }
}
