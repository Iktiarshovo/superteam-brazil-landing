"use client";

/* eslint-disable @next/next/no-img-element */
import { BadgeCheck } from "lucide-react";

const tweets = [
    {
        name: "Lucas Costa",
        handle: "@lucas_solana",
        avatar: "https://i.pravatar.cc/96?img=31",
        content: "A Superteam Brazil mudou minha carreira. Consegui meu primeiro grant e agora trabalho full-time na web3! 🚀",
    },
    {
        name: "Ana Silva",
        handle: "@anacrypto",
        avatar: "https://i.pravatar.cc/96?img=5",
        content: "A melhor comunidade para aprender Rust e Solana. Os workshops são incríveis e a galera é super receptiva.",
    },
    {
        name: "Pedro Santos",
        handle: "@pedrodev",
        avatar: "https://i.pravatar.cc/96?img=11",
        content: "Ganhei meu primeiro Hackathon graças ao suporte da Superteam. O bônus em USDC foi a cereja do bolo! 💰",
    },
];

export default function WallOfLove() {
    return (
        <section className="py-24 bg-[#12121A]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                        Wall of Love
                    </span>
                    <h2 className="text-4xl font-bold mt-4">
                        O Que Estão <span className="text-gradient">Dizendo</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Veja o que a comunidade está falando sobre a Superteam Brasil.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tweets.map((tweet, index) => (
                        <div
                            key={index}
                            className="bg-[#16161F] p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 block"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={tweet.avatar}
                                    alt={tweet.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <div className="flex items-center gap-1 font-bold text-white">
                                        {tweet.name}
                                        <BadgeCheck className="w-4 h-4 text-primary fill-primary/20" />
                                    </div>
                                    <div className="text-sm text-gray-400">{tweet.handle}</div>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed font-medidum">
                                "{tweet.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
