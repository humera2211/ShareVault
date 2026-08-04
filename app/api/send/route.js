import { EmailTemplate } from "../../_components/email-template";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import QRCode from "qrcode";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  const response = await req.json();

  if (!response.emailToSend) {
    return Response.json(
      { error: "Recipient email is required" },
      { status: 400 },
    );
  }

  try {
    const qrCode = await QRCode.toBuffer(response.shortUrl);

    const emailHtml = await render(
      EmailTemplate({
        firstName: response.userName,
        fileName: response.fileName,
        fileSize: response.fileSize,
        fileType: response.fileType,
        shortUrl: response.shortUrl,
        fileUrl: response.fileUrl,
        qrCode:"cid:qrcode",
      }),
    );


    const data = await transporter.sendMail({
      from: `"ShareVault" <${process.env.EMAIL_USER}>`,
      to: response.emailToSend,
      subject: "ShareVault - File Shared With You",
      html: emailHtml,
      attachments: [
        {
          filename: "qrcode.png",
          content: qrCode,
          cid: "qrcode",
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
