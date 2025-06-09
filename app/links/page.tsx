"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    FaInstagram,
    FaGithub,
    FaBehance,
    FaLinkedin,
    FaEnvelope,
    FaArrowLeft,
} from "react-icons/fa";

const links = [
    {
        label: "Instagram",
        url: "https://instagram.com/codedbygio",
        description: "Acompanhe meu dia a dia e projetos",
        icon: FaInstagram,
        iconColorFrom: "from-pink-500/30",
        iconColorTo: "to-purple-500/30",
        textColor: "text-pink-400",
    },
    {
        label: "GitHub",
        url: "https://github.com/codedbygio",
        description: "Confira meus códigos e projetos open source",
        icon: FaGithub,
        iconColorFrom: "from-gray-700/30",
        iconColorTo: "to-gray-900/30",
        textColor: "text-gray-400",
    },
    {
        label: "Behance",
        url: "https://behance.net/codedbygio",
        description: "Meu portfólio de design e projetos visuais",
        icon: FaBehance,
        iconColorFrom: "from-blue-600/30",
        iconColorTo: "to-blue-800/30",
        textColor: "text-blue-500",
    },
    {
        label: "LinkedIn",
        url: "https://linkedin.com/in/codedbygio",
        description: "Conecte-se profissionalmente comigo",
        icon: FaLinkedin,
        iconColorFrom: "from-blue-500/30",
        iconColorTo: "to-blue-700/30",
        textColor: "text-blue-400",
    },
    {
        label: "Email",
        url: "mailto:studiocreatemkt@outlook.com",
        description: "Entre em contato via e-mail",
        icon: FaEnvelope,
        iconColorFrom: "from-yellow-400/30",
        iconColorTo: "to-amber-400/30",
        textColor: "text-yellow-400",
    },
];

export default function LinksPage() {
    const router = useRouter();

    return (
        <section className="relative z-10 py-20 px-6 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Botão para voltar para a página principal */}
                <button
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 mb-8 text-yellow-400 hover:text-amber-300 transition-colors font-semibold"
                    aria-label="Voltar para a página principal"
                    type="button"
                >
                    <FaArrowLeft className="w-5 h-5" />
                    Voltar para Home
                </button>

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Meus Links
            </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Conecte-se comigo nas redes sociais e vamos conversar!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {links.map(
                        ({
                             label,
                             url,
                             description,
                             icon: Icon,
                             iconColorFrom,
                             iconColorTo,
                             textColor,
                         }) => (
                            <Link
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 group overflow-hidden rounded-xl"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${iconColorFrom} ${iconColorTo} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}
                                ></div>

                                <div className="p-8 space-y-6 relative">
                                    <div
                                        className={`bg-gradient-to-br ${iconColorFrom} ${iconColorTo} backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
                                    >
                                        <Icon className={`w-8 h-8 ${textColor}`} />
                                    </div>

                                    <div className="space-y-4">
                                        <h3
                                            className={`text-xl font-bold ${textColor} group-hover:text-amber-300 transition-colors`}
                                        >
                                            {label}
                                        </h3>
                                        <p className="text-gray-300 group-hover:text-white transition-colors">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
