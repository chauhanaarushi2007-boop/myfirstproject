"use client";

import { LanguageIcon } from "@/components/icons/language-icons";
import { languages } from "@/lib/placeholder-data";

export function FloatingIcons() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {languages.slice(0, 8).map((lang, i) => (
                <div
                    key={lang.id}
                    className="p-4 bg-secondary rounded-full flex items-center justify-center animate-float"
                    style={{ animationDelay: `${i * 150}ms` }}
                >
                    <LanguageIcon language={lang.id} className="w-10 h-10" />
                </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
                }
                .animate-float {
                animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
