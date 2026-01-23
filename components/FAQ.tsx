"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "O que é a Superteam Brasil?",
        answer: "Somos uma comunidade de desenvolvedores, criativos e operadores focada no ecossistema Solana. Ajudamos talentos a encontrar trabalho, grants e oportunidades na Web3.",
    },
    {
        question: "Como posso começar a ganhar?",
        answer: "Você pode participar de Bounties (tarefas pagas), Hackathons ou aplicar para Grants se tiver um projeto. Fique de olho na aba 'Oportunidades' em nosso Discord.",
    },
    {
        question: "Preciso saber programar?",
        answer: "Não! Temos oportunidades para designers, criadores de conteúdo, gestores de comunidade e muito mais. A Web3 precisa de todo tipo de talento.",
    },
    {
        question: "É gratuito participar?",
        answer: "Sim, 100% gratuito. Nossa missão é trazer mais pessoas para o ecossistema Solana.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-[#0A0A0F]">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Perguntas <span className="text-gradient">Frequentes</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index
                                ? "bg-[#16161F] border-primary/50"
                                : "bg-transparent border-white/10 hover:border-white/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-primary w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
