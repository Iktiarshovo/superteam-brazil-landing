"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import { Search } from "lucide-react";

// Data from vanilla/members.html
const members = [
    // Core Team
    {
        name: "Alice Souza",
        role: "Ops Lead",
        avatar: "https://i.pravatar.cc/160?img=11",
        tags: ["Ops", "Lead"],
        social: { twitter: "https://twitter.com/alicesouza" },
        isCore: true,
        category: "core"
    },
    {
        name: "Ricardo Lima",
        role: "Growth Lead",
        avatar: "https://i.pravatar.cc/160?img=68",
        tags: ["Growth", "Marketing"],
        social: { twitter: "https://twitter.com/ricardolima" },
        isCore: true,
        category: "core"
    },
    {
        name: "Marina Santos",
        role: "Community Lead",
        avatar: "https://i.pravatar.cc/160?img=47",
        tags: ["Community", "Events"],
        social: { twitter: "https://twitter.com/marinasantos" },
        isCore: true,
        category: "core"
    },
    // Devs
    {
        name: "Bruno Dias",
        role: "Rust Developer",
        avatar: "https://i.pravatar.cc/160?img=12",
        tags: ["Rust", "Backend"],
        social: { twitter: "https://twitter.com/brunodias" },
        category: "rust"
    },
    {
        name: "Hugo Nascimento",
        role: "Smart Contract Dev",
        avatar: "https://i.pravatar.cc/160?img=53",
        tags: ["Anchor", "Solana"],
        social: { twitter: "https://twitter.com/hugon" },
        category: "rust"
    },
    {
        name: "Felipe Almeida",
        role: "Frontend Dev",
        avatar: "https://i.pravatar.cc/160?img=33",
        tags: ["React", "TypeScript"],
        social: { twitter: "https://twitter.com/felipea" },
        category: "frontend"
    },
    {
        name: "Lucas Costa",
        role: "Web3 Frontend",
        avatar: "https://i.pravatar.cc/160?img=31",
        tags: ["Next.js", "Web3"],
        social: { twitter: "https://twitter.com/lucascosta" },
        category: "frontend"
    },
    // Design
    {
        name: "Carla Mel",
        role: "Product Designer",
        avatar: "https://i.pravatar.cc/160?img=5",
        tags: ["UI/UX", "Figma"],
        social: { twitter: "https://twitter.com/carlamel" },
        category: "design"
    },
    {
        name: "Pedro Henrique",
        role: "3D Artist",
        avatar: "https://i.pravatar.cc/160?img=60",
        tags: ["3D", "NFT Art"],
        social: { twitter: "https://twitter.com/pedroh" },
        category: "design"
    },
    // Content
    {
        name: "Gabriela Silva",
        role: "Content Creator",
        avatar: "https://i.pravatar.cc/160?img=20",
        tags: ["Video", "YouTube"],
        social: { twitter: "https://twitter.com/gabrielas" },
        category: "content"
    },
    {
        name: "Matheus Rocha",
        role: "Technical Writer",
        avatar: "https://i.pravatar.cc/160?img=52",
        tags: ["Writing", "Docs"],
        social: { twitter: "https://twitter.com/matheusrocha" },
        category: "content"
    },
    // Growth & Community
    {
        name: "Daniel Farias",
        role: "Growth Specialist",
        avatar: "https://i.pravatar.cc/160?img=15",
        tags: ["Growth", "Analytics"],
        social: { twitter: "https://twitter.com/danielf" },
        category: "growth"
    },
    {
        name: "Elena Rodrigues",
        role: "Community Mgr",
        avatar: "https://i.pravatar.cc/160?img=9",
        tags: ["Events", "Social"],
        social: { twitter: "https://twitter.com/elenar" },
        category: "community"
    }
];

const filters = [
    { id: "all", label: "Todos" },
    { id: "core", label: "Core Team" },
    { id: "rust", label: "Rust" },
    { id: "frontend", label: "Frontend" },
    { id: "design", label: "Design" },
    { id: "content", label: "Content" },
    { id: "growth", label: "Growth" },
    { id: "community", label: "Community" },
];

export default function MembersPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMembers = members.filter((member) => {
        const matchesFilter = activeFilter === "all" || member.category === activeFilter;
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.role.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-[#0A0A0F]">
            <Navbar />

            <section className="pt-32 pb-12 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                            Nossa Comunidade
                        </span>
                        <h1 className="text-5xl font-bold mt-4 mb-6">
                            Diretório de <span className="text-gradient">Membros</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Conheça os builders, desenvolvedores, designers e criadores que fazem parte da maior comunidade Solana do Brasil.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar membros..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-3 bg-[#16161F] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                                            ? "bg-white text-[#0A0A0F]"
                                            : "bg-[#16161F] text-gray-400 hover:text-white hover:bg-[#1E1E2A]"
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Members Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredMembers.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>

                    {filteredMembers.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">Nenhum membro encontrado.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
