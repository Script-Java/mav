"use client";

import { useState } from "react";
import { User, Mail, Car, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail } from "@/app/actions";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await sendContactEmail(formData);

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contato" className="overflow-hidden">
      <FadeIn delay={0.1}>
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
              Solicite um Orçamento
            </h2>
            <p className="text-neutral-400">
              Preencha o formulário e nossa equipe avaliará seu projeto.
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-[#ff4500]/20 flex items-center justify-center border border-[#ff4500]/50 shadow-[0_0_30px_rgba(255,69,0,0.3)] text-[#ff4500]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-zinc-400 font-light max-w-md">
                    Entraremos em contato em breve. Sua solicitação foi recebida
                    com sucesso e nossa equipe enviará um orçamento detalhado.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setError(null);
                    }}
                    className="mt-8 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative group">
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium text-neutral-300 ml-1"
                      >
                        Nome Completo
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-[#ff4500] transition-colors">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="nome"
                          id="nome"
                          required
                          className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-white/[0.05] focus:border-[#ff4500] transition-all placeholder:text-neutral-500"
                          placeholder="Ex: João Silva"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 relative group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-300 ml-1"
                      >
                        E-mail
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-[#ff4500] transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-white/[0.05] focus:border-[#ff4500] transition-all placeholder:text-neutral-500"
                          placeholder="joao@exemplo.com.br"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 relative group">
                    <label
                      htmlFor="veiculo"
                      className="block text-sm font-medium text-neutral-300 ml-1"
                    >
                      Modelo do Veículo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-[#ff4500] transition-colors">
                        <Car className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="veiculo"
                        id="veiculo"
                        required
                        className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-white/[0.05] focus:border-[#ff4500] transition-all placeholder:text-neutral-500"
                        placeholder="Ex: Porsche 911 Carrera S"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative group">
                    <label
                      htmlFor="descricao"
                      className="block text-sm font-medium text-neutral-300 ml-1"
                    >
                      Descrição do Serviço
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-4 pointer-events-none text-neutral-500 group-focus-within:text-[#ff4500] transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        name="descricao"
                        id="descricao"
                        rows={4}
                        required
                        className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-white/[0.05] focus:border-[#ff4500] transition-all placeholder:text-neutral-500 resize-none"
                        placeholder="Descreva brevemente o que aconteceu com o veículo ou o detalhamento desejado..."
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#ff4500] hover:bg-[#e03e00] text-white font-semibold rounded-xl px-6 py-4 transition-colors disabled:opacity-50 mt-4"
                  >
                    <span className="flex items-center">
                      {isSubmitting
                        ? "Enviando..."
                        : "Solicitar Orçamento Automotivo"}
                      {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                    </span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
