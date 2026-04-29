import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { nome, email, veiculo, descricao } = await request.json();

  // 1. Configure the SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 2. Send the email
    await transporter.sendMail({
      from: `"${nome}" <${process.env.SMTP_USER}>`, // Must send from the authenticated email
      replyTo: email, // So you can hit "Reply" and email the customer directly
      to: process.env.SMTP_USER, // Send it to the client's inbox
      subject: `Novo Contato do Site: ${nome}`,
      text: `Veículo: ${veiculo}\nMensagem: ${descricao}`,
      html: `
        <h3>Novo formulário de contato recebido</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Veículo:</strong> ${veiculo}</p>
        <p><strong>Mensagem:</strong><br/> ${descricao}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
