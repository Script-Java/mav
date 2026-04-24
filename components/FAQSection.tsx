"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FramerReveal } from "./FramerReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quanto custa funilaria e pintura em Curitiba?",
    answer:
      "O valor varia conforme a extensão do dano e o modelo do veículo. Na Mavericks Collision, trabalhamos com orçamento personalizado e transparente. Entre em contato para uma avaliação gratuita — analisamos cada caso com precisão cirúrgica para entregar o melhor custo-benefício sem comprometer a qualidade premium.",
  },
  {
    question: "O que é PPF e vale a pena investir?",
    answer:
      "PPF (Paint Protection Film) é uma película de poliuretano de alta tecnologia que protege a pintura contra riscos, pedras, detritos e intempéries. Com propriedades de autocicatrização, o PPF mantém o brilho original e valoriza a revenda do veículo. Para quem busca proteção de longo prazo, é um investimento estratégico e altamente recomendado.",
  },
  {
    question: "Quanto tempo leva um reparo na Mavericks Collision?",
    answer:
      "O prazo depende da complexidade do serviço. Reparos de martelinho de ouro podem levar de algumas horas a 2 dias. Serviços de pintura e funilaria estrutural variam de 3 a 10 dias. Sempre apresentamos um cronograma realista no orçamento e mantemos o cliente informado em cada etapa do processo.",
  },
  {
    question: "O martelinho de ouro remove qualquer amassado?",
    answer:
      "O martelinho de ouro é extremamente eficaz para amassados de pequeno e médio porte causados por granizo, batidas de porta e impactos leves, desde que a pintura não esteja danificada. Em casos de amassados profundos, dobras na lataria ou pintura comprometida, recomendamos a funilaria tradicional para garantir o melhor resultado.",
  },
  {
    question: "Qual a durabilidade da vitrificação cerâmica?",
    answer:
      "A vitrificação cerâmica aplicada na Mavericks Collision oferece proteção que varia de 2 a 5 anos, dependendo do produto escolhido e das condições de uso e manutenção do veículo. Além do brilho extremo, ela cria uma barreira contra contaminações, raios UV e oxidação, facilitando a limpeza diária.",
  },
  {
    question: "A pintura fica exatamente igual à original?",
    answer:
      "Sim. Utilizamos espectrofotômetros de última geração para análise precisa da cor e tintas importadas de alta performance, como AkzoNobel Sikkens. Nosso processo inclui preparação minuciosa, aplicação em cabine pressurizada e polimento final, garantindo um acabamento indistinguível da pintura de fábrica.",
  },
  {
    question: "Vocês trabalham com carros elétricos (Tesla, BYD, Porsche Taycan)?",
    answer:
      "Sim. Nossa equipe é treinada para atender veículos elétricos e híbridos de alta tecnologia. Seguimos protocolos específicos de segurança e isolamento, utilizando equipamentos adequados para preservar a integridade dos sistemas eletrônicos e baterias durante qualquer intervenção estrutural ou estética.",
  },
  {
    question: "A oficina atende todas as seguradoras?",
    answer:
      "Trabalhamos com as principais seguradoras do mercado e facilitamos todo o processo de sinistro para o cliente. Nossa equipe auxilia na documentação, orçamentos e negociações, garantindo que o reparo seja realizado com a máxima qualidade e dentro dos padrões exigidos.",
  },
  {
    question: "O que é polimento técnico e como se diferencia de um polimento comum?",
    answer:
      "O polimento técnico é um processo de correção de pintura de alta precisão que remove riscos, hologramas e imperfeições do verniz utilizando compostos abrasivos específicos e iluminação controlada. Diferente de um polimento comercial superficial, o técnico restaura a pintura em múltiplas etapas, preparando-a para proteções duradouras como vitrificação ou PPF.",
  },
  {
    question: "Vocês fazem detalhamento interno (higienização de couro)?",
    answer:
      "Sim. Oferecemos detailing interno completo, incluindo higienização de couro, limpeza de estofados a vapor, revitalização de plásticos e tratamento de carpetes. Utilizamos produtos premium que limpam, hidratam e protegem os materiais internos, restaurando o conforto e o aroma de novo do habitáculo.",
  },
];

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FramerReveal delay={index * 0.06}>
      <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        >
          <span className="text-base md:text-lg font-medium text-white/90 pr-4 group-hover:text-[#ff4500] transition-colors duration-300">
            {item.question}
          </span>
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ff4500]/10 group-hover:border-[#ff4500]/30 transition-all duration-300">
            {isOpen ? (
              <Minus className="w-4 h-4 text-[#ff4500]" />
            ) : (
              <Plus className="w-4 h-4 text-white/60 group-hover:text-[#ff4500] transition-colors" />
            )}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 pb-6 text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FramerReveal>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-24 px-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4500]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <FramerReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4500]/10 border border-[#ff4500]/20 text-[#ff4500] text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-5">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Esclareça suas dúvidas sobre nossos serviços de estética automotiva
              premium em Curitiba.
            </p>
          </div>
        </FramerReveal>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
