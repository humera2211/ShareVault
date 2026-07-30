import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();

  console.log(response);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: 'humeraofficial2211@gmail.com', // dynamic email
      subject: "ShareVault - File Shared With You",
      react: EmailTemplate({
        firstName: response.userName,
        fileName: response.fileName,
        fileSize: response.fileSize,
        fileType: response.fileType,
        shortUrl: response.shortUrl,
        fileUrl: response.fileUrl,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
