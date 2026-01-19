"use client";

import { Code2, Trophy, Briefcase, Zap, GraduationCap, Users } from "lucide-react";

const pillars = [
    {
        icon: <Code2 className="w-8 h-8 text-white" />,
        title: "Apoio a Builders",
        description: "Mentoria, recursos e suporte técnico para tirar sua ideia do papel.",
        gradient: "from-primary to-primary-light",
    },
    {
        icon: <Trophy className="w-8 h-8 text-white" />,
        title: "Hackathons",
        description: "Participe de competições globais e ganhe prêmios em USDC.",
        gradient: "from-brazil-green to-brazil-yellow",
    },
    {
        icon: <Briefcase className="w-8 h-8 text-white" />,
        title: "Vagas Web3",
        description: "Conecte-se com as melhores empresas do ecossistema Solana.",
        gradient: "from-brazil-blue to-primary",
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Bounties",
        description: "Ganhe recompensas por tarefas de design, conteúdo e desenvolvimento.",
        gradient: "from-brazil-yellow to-brazil-green",
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-white" />,
        title: "Educação",
        description: "Workshops, tutoriais e conteúdo exclusivo em português.",
        gradient: "from-primary to-brazil-blue",
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Networking",
        description: "Faça parte da comunidade mais vibrante da web3 no Brasil.",
        gradient: "from-brazil-green to-primary",
    },
];

export default function Mission() {
    return (
        <section id="sobre" className="py-24 bg-[#12121A] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                        Nossa Missão
                    </span>
                    <h2 className="text-4xl font-bold mt-4 mb-6">
                        Construindo o Futuro da <span className="text-gradient">Web3</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        A Superteam Brasil é a porta de entrada para o ecossistema Solana. Oferecemos tudo que você precisa para crescer profissionalmente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-[#16161F] border border-white/5 hover:border-white/10 hover:bg-[#1E1E2A] transition-all hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div
                                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                            />
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 border border-white/5">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
