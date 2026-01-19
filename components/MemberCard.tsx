"use client";

/* eslint-disable @next/next/no-img-element */
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

interface MemberProps {
    name: string;
    role: string;
    avatar: string;
    tags: string[];
    social: {
        twitter?: string;
        linkedin?: string;
    };
    isCore?: boolean;
}

export default function MemberCard({ name, role, avatar, tags, social, isCore }: MemberProps) {
    return (
        <div className={`group relative p-6 rounded-2xl border transition-all hover:-translate-y-1 ${isCore ? 'bg-[#1A1A24] border-primary/20 hover:border-primary/50' : 'bg-[#16161F] border-white/5 hover:border-white/10'}`}>
            {isCore && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                    Core Team
                </span>
            )}

            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-primary/50 transition-colors">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-400">{role}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-400 group-hover:text-white transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/5">
                {social.twitter && (
                    <Link
                        href={social.twitter}
                        target="_blank"
                        className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
                    >
                        <Twitter size={18} />
                    </Link>
                )}
                {/* We can add LinkedIn if available in data */}
            </div>
        </div>
    );
}
