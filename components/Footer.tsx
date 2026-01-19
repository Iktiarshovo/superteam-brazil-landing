"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0F] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 text-xl font-bold mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-brazil-green rounded-lg flex items-center justify-center text-lg">
                                🇧🇷
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span>Superteam</span>
                                <span className="text-xs text-brazil-green font-medium uppercase tracking-widest">
                                    Brazil
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            A maior comunidade de desenvolvedores e criativos do ecossistema Solana na América Latina.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400"
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Comunidade</h4>
                        <ul className="space-y-4">
                            {["Sobre", "Membros", "Eventos", "Bounties", "Grants"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Recursos</h4>
                        <ul className="space-y-4">
                            {["Solana Docs", "Superteam Earn", "Build", "Blog", "Brand Kit"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2026 Superteam Brazil. Todos os direitos reservados.</p>
                    <p>
                        Made with 💜 for the community 🇧🇷
                    </p>
                </div>
            </div>
        </footer>
    );
}
