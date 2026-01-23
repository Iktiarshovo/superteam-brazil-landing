"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react"; // We'll need to install lucide-react

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur-md">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-xl font-bold">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-brazil-green rounded-lg flex items-center justify-center text-lg">
                        🇧🇷
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span>Superteam</span>
                        <span className="text-xs text-brazil-green font-medium uppercase tracking-widest">
                            Brasil
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {["Sobre", "Eventos", "Membros", "Parceiros", "FAQ"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-brazil-green transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/members"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                    >
                        Comunidade
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-brazil-green transition-all group-hover:w-full" />
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="https://discord.com/invite/superteambrasil"
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-brazil-green text-white font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all"
                    >
                        Entrar na Comunidade
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-[#12121A] border-l border-white/10 p-8 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-6 mt-12">
                    {["Sobre", "Eventos", "Membros", "Parceiros", "FAQ"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-medium text-white/70 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/members"
                        className="text-lg font-medium text-white/70 hover:text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        Comunidade
                    </Link>
                    <Link
                        href="https://discord.com/invite/superteambrasil"
                        target="_blank"
                        className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-brazil-green text-white font-semibold"
                    >
                        Entrar na Comunidade <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
