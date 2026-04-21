"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_fallback1234567890");

export async function sendContactEmail(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const veiculo = formData.get("veiculo") as string;
  const descricao = formData.get("descricao") as string;

  if (!nome || !email || !veiculo || !descricao) {
    return { success: false, error: "Todos os campos são obrigatórios." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "maverickscollision2026@gmail.com",
      subject: `Novo Lead: ${nome} - ${veiculo}`,
      html: `
        <h2>Novo Orçamento Automotivo</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Veículo:</strong> ${veiculo}</p>
        <p><strong>Descrição do Serviço:</strong></p>
        <p>${descricao.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Erro ao enviar mensagem. Tente novamente mais tarde." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return { success: false, error: "Erro interno ao processar a solicitação." };
  }
}
