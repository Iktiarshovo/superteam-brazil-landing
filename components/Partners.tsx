"use client";

import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function Partners() {
    return (
        <section id="parceiros" className="py-24 bg-[#0A0A0F] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brazil-blue font-semibold tracking-widest uppercase text-sm">
                        Ecossistema
                    </span>
                    <h2 className="text-4xl font-bold mt-4 mb-6">
                        Trusted By <span className="text-gradient">Builders</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Parceiros que impulsionam o crescimento do ecossistema Solana no Brasil.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
                    {/* Solana */}
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                        <img
                            src="https://cryptologos.cc/logos/solana-sol-logo.svg"
                            alt="Solana"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Serum */}
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                        <img
                            src="https://cryptologos.cc/logos/serum-srm-logo.svg"
                            alt="Serum"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Raydium */}
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                        <img
                            src="https://cryptologos.cc/logos/raydium-ray-logo.svg"
                            alt="Raydium"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Magic Eden */}
                    <div className="w-32 h-12 relative hover:scale-110 transition-all duration-300">
                        <Image
                            src="/images/magic_eden.png"
                            alt="Magic Eden"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Jupiter */}
                    <div className="w-32 h-12 relative hover:scale-110 transition-all duration-300">
                        <Image
                            src="/images/jupiter.png"
                            alt="Jupiter"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Marinade */}
                    <div className="w-32 h-12 relative hover:scale-110 transition-all duration-300">
                        <Image
                            src="/images/marinade.png"
                            alt="Marinade"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
