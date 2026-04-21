"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quanto custa funilaria e pintura em Curitiba?",
    answer: "O valor da funilaria e pintura premium varia de acordo com a extensão do dano e o modelo do veículo. Na Mavericks Collision, utilizamos apenas tintas importadas de alta fidelidade e realizamos o serviço em estufa controlada, garantindo um acabamento idêntico ao de fábrica. Recomendamos o agendamento de uma avaliação técnica presencial para um orçamento preciso."
  },
  {
    question: "O que é PPF e vale a pena investir?",
    answer: "PPF (Paint Protection Film) é uma película transparente de poliuretano aplicada sobre a pintura. Ela oferece proteção contra riscos, pedras, detritos e intempéries, possuindo tecnologia de auto-regeneração (auto-healing). Para veículos premium e de luxo, o PPF é um investimento essencial, pois preserva 100% da pintura original e o valor de revenda do carro."
  },
  {
    question: "Quanto tempo leva um reparo na Mavericks Collision?",
    answer: "O prazo depende da complexidade do serviço. Serviços de martelinho de ouro e pequenos reparos estéticos podem ser concluídos no mesmo dia. Repintura de peças inteiras ou funilaria estrutural profunda podem levar de 3 a 7 dias. Nossa prioridade é o rigor técnico e o tempo necessário para garantir um padrão de concessionária."
  },
  {
    question: "O martelinho de ouro remove qualquer amassado?",
    answer: "O martelinho de ouro é extremamente eficaz para amassados onde a pintura original não foi rompida ou trincada. É ideal para chuva de granizo, batidas de porta e pequenos impactos. Se houver dano severo no verniz, recomendamos nossa funilaria de precisão aliada à pintura premium."
  },
  {
    question: "Qual a durabilidade da vitrificação cerâmica?",
    answer: "A vitrificação cerâmica (nano-revestimento) cria uma camada de proteção intensa e hidrofóbica. Dependendo do tipo de cerâmica aplicada e dos cuidados pós-serviço (lavagem adequada), a proteção pode durar de 1 a 5 anos, mantendo o brilho profundo e facilitando a limpeza do dia a dia."
  },
  {
    question: "A pintura fica exatamente igual à original?",
    answer: "Sim. Utilizamos um sistema computadorizado de mistura de tintas importadas, além de espectrofotômetros para analisar e replicar a tonalidade exata do seu veículo, compensando inclusive o desgaste natural pelo sol. O resultado é invisível a olho nu, sem diferenças de tom ou textura."
  },
  {
    question: "Vocês trabalham com carros elétricos (Tesla, BYD, Porsche Taycan)?",
    answer: "Sim, somos especialistas em estética e reparo de veículos de alto padrão, incluindo carros elétricos. Conhecemos as especificidades estruturais e elétricas destes modelos, garantindo um manuseio seguro durante a funilaria ou aplicação de PPF e vitrificação."
  },
  {
    question: "A oficina atende todas as seguradoras?",
    answer: "Atendemos de forma particular e auxiliamos no processo de reembolso ou negociação em sinistros. Nosso foco é entregar qualidade superior sem os cortes de custos exigidos por muitas seguradoras, garantindo que as peças sejam genuínas e os materiais de linha premium."
  },
  {
    question: "O que é polimento técnico e como se diferencia de um polimento comum?",
    answer: "O polimento técnico (ou correção de pintura) é um processo meticuloso em várias etapas (corte, refino e lustro) utilizando iluminação especial e boinas adequadas para o tipo de verniz. Ele remove riscos, teias de aranha (swirls) e hologramas sem agredir severamente o verniz, diferentemente do polimento comercial que muitas vezes apenas 'mascara' os defeitos."
  },
  {
    question: "Vocês fazem detalhamento interno (higienização de couro)?",
    answer: "Sim. Oferecemos detalhamento completo, que inclui limpeza profunda, assepsia, tratamento e hidratação de plásticos e couro com produtos importados e de pH balanceado, devolvendo o aspecto e aroma originais do interior do seu veículo."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="bg-[#050505]">
      <FadeIn delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Esclareça suas dúvidas sobre nossos serviços de estética automotiva premium em Curitiba.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={0.1 + (index * 0.05)}>
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 rounded-2xl transition-all duration-200 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#ff4500] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-zinc-400 leading-relaxed border-x border-b border-white/5 rounded-b-2xl bg-white/[0.01] -mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
