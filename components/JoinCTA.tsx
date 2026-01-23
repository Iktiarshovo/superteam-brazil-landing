"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function JoinCTA() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#12121A]">
            <div className="container mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center border border-white/10 group">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-brazil-green/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Pronto para construir o <br />
                            <span className="text-gradient-brazil">Futuro da Web3?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Junte-se a mais de 2.000 builders, designers e criativos. Aprenda, ganhe e conecte-se com os melhores.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://discord.com/invite/superteambrasil"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A0A0F] rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <FaDiscord className="w-5 h-5" />
                                Entrar no Discord
                            </Link>
                            <Link
                                href="https://x.com/SuperteamBR"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-4 bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/20 rounded-full font-bold hover:bg-[#1DA1F2]/20 transition-all flex items-center justify-center gap-2"
                            >
                                <FaXTwitter className="w-5 h-5" />
                                Seguir no X
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
