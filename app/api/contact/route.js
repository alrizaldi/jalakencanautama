import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const project = String(formData.get('project') || '');
    const message = String(formData.get('message') || '');

    if (!name || !email || !project || !message) {
      return new Response('All fields are required.', { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || 'jalakencanautama@gmail.com',
      subject: 'Someone Wants To Contact You',
      text: `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\nMessage:\n${message}`,
      replyTo: email
    });

    return new Response('Message sent successfully!', { status: 200 });
  } catch (error) {
    return new Response('Failed to send message.', { status: 500 });
  }
}