"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[300px] -left-[200px] w-[800px] h-[800px] bg-brazil-green/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brazil-blue/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brazil-green/15 border border-brazil-green/30 rounded-full mb-6">
                        <span className="w-2 h-2 bg-brazil-green rounded-full animate-pulse-slow"></span>
                        <span className="text-sm font-medium text-brazil-green tracking-wide uppercase">
                            Comunidade Ativa
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
                        O Hub de Talento{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brazil-green via-brazil-blue to-brazil-yellow">
                            Web3
                        </span>{" "}
                        do Brasil
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Construa, ganhe e conecte-se com os melhores desenvolvedores e criativos. Junte-se à maior comunidade Solana da América Latina.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="https://discord.gg/superteam"
                            className="px-8 py-4 bg-gradient-to-r from-primary to-brazil-green text-white rounded-full font-semibold shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                        >
                            Entrar na Comunidade <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://earn.superteam.fun"
                            className="px-8 py-4 bg-transparent border-2 border-brazil-yellow text-white rounded-full font-semibold hover:bg-brazil-yellow hover:text-[#0A0A0F] hover:shadow-[0_0_40px_rgba(255,204,0,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                        >
                            <Eye className="w-5 h-5" /> Ver Oportunidades
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex gap-12">
                        {[
                            { label: "Membros", value: "2K+" },
                            { label: "Pagos em Bounties", value: "$500K+" },
                            { label: "Projetos", value: "150+" },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual */}
                <div className="hidden lg:block relative">
                    <div className="relative w-full aspect-square animate-[float_6s_ease-in-out_infinite]">
                        <Image
                            src="/images/brazil_globe.png"
                            alt="Superteam Brazil Globe"
                            fill
                            className="object-contain drop-shadow-[0_0_60px_rgba(0,156,59,0.3)]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
