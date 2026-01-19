"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
    {
        title: "Solana Build Station",
        date: "15 Fev, 2026",
        location: "São Paulo, SP",
        type: "IRL",
        image: "from-brazil-green/20 to-brazil-blue/20",
    },
    {
        title: "Superteam Community Call",
        date: "20 Fev, 2026",
        location: "Online (Discord)",
        type: "Virtual",
        image: "from-primary/20 to-purple-600/20",
    },
    {
        title: "Web3 Rio Meetup",
        date: "10 Mar, 2026",
        location: "Rio de Janeiro, RJ",
        type: "IRL",
        image: "from-brazil-yellow/20 to-orange-500/20",
    },
];

export default function Events() {
    return (
        <section id="eventos" className="py-24 bg-[#0A0A0F]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brazil-green font-semibold tracking-widest uppercase text-sm">
                            Eventos
                        </span>
                        <h2 className="text-4xl font-bold mt-4">
                            Próximos <span className="text-gradient">Encontros</span>
                        </h2>
                    </div>
                    <Link
                        href="https://lu.ma/superteambrazil"
                        className="flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors group"
                    >
                        Ver calendário completo
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <Link
                            href="#"
                            key={index}
                            className="group block bg-[#16161F] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                        >
                            <div className={`h-48 bg-gradient-to-br ${event.image} relative group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold border border-white/10 uppercase tracking-wide">
                                    {event.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                                    <Calendar className="w-4 h-4" />
                                    {event.date}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    {event.location}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
