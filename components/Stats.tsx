"use client";

export default function Stats() {
    const stats = [
        { label: "Membros na Comunidade", value: "2,000+", color: "text-primary" },
        { label: "Eventos Realizados", value: "50+", color: "text-brazil-green" },
        { label: "Bounties Distribuídos", value: "$500k+", color: "text-brazil-yellow" },
        { label: "Projetos Incubados", value: "15+", color: "text-brazil-blue" },
    ];

    return (
        <section className="py-20 border-y border-white/5 bg-[#0F0F14]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div
                                className={`text-4xl md:text-5xl font-extrabold mb-2 ${stat.color} drop-shadow-lg scale-100 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
