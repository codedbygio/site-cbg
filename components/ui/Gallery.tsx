"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import lfBody from "@/public/projetos/lf-bodypiercer.png"
import cheiroNaCuca from "@/public/projetos/cheiro-na-cuca.png"
import studioCreate from "@/public/projetos/studio-create.png"


const allProjects = [
    {
        title: "LF Body Piercer",
        description: "Identidade Visual e Landing Page",
        image: lfBody,
        tags: ["Identidade Visual", "Landing Page"],
    },
    {
        title: "Cheiro na Cuca Bar",
        description: "Identidade Visual e Social Media",
        image: cheiroNaCuca,
        tags: ["Identidade Visual", "Social Media"],
    },
    {
        title: "Studio Create MKT",
        description: "Identidade Visual e Social Media",
        image: studioCreate,
        tags: ["Identidade Visual", "Social Media"],
    },
]

const filters = ["Todos", "Identidade Visual", "Social Media", "Landing Page"]

const projectLinks = {
    "Studio Create MKT": "https://www.behance.net/gallery/224360119/Studio-Create-MKT",
    "LF Body Piercer": "https://lfbodypiercer.vercel.app/",
    "Cheiro na Cuca Bar": "https://www.behance.net/gallery/224497967/Cheiro-na-Cuca-Bar",
}

export function Gallery() {
    const [activeFilter, setActiveFilter] = useState("Todos")
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects =
        activeFilter === "Todos"
            ? allProjects
            : allProjects.filter((p) => p.tags.includes(activeFilter))

    const detailedDescriptions = {
        "Studio Create MKT": `O Studio Create Marketing é uma agência criativa focada em estratégias de marketing digital, design visual e posicionamento de marca. Acreditamos no poder da comunicação autêntica e do design inteligente para gerar conexão, valor e resultados reais. Nossa identidade transmite inovação, profissionalismo e criatividade, refletindo o nosso compromisso em transformar ideias em experiências memoráveis.`,

        "Cheiro na Cuca Bar": `Bar e mini mercado com pegada descontraída. Visual marcante em preto e amarelo, mascote carismático e tipografia ousada. Projeto pensado pra destacar promoções, combos e criar conexão rápida com o público. Comunicação direta, vibrante e autêntica.`,

        "LF Body Piercer": `Larissa Santos é mais do que uma body piercer — é uma artista do detalhe.
Com mãos leves e olhar preciso, ela transforma o corpo em tela e o piercing em expressão pessoal. Cada aplicação é um ritual de cuidado, presença e estilo.
Sua marca nasce do encontro entre o sensível e o marcante, unindo estética, segurança e empatia em cada atendimento. Larissa acredita que autenticidade se revela nos pequenos detalhes — e que um piercing pode ser tanto um grito de liberdade quanto um sussurro de autocuidado.`,
    }

    return (
        <section className="py-20 px-6 bg-black relative z-10">
            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">Portfólio</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"/>
                    <p className="text-lg text-gray-300 mt-4">
                        Conheça alguns dos projetos que desenvolvi com cuidado e estratégia.
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex justify-center gap-3 flex-wrap mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                                activeFilter === filter
                                    ? "bg-yellow-400 text-black border-yellow-400"
                                    : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Galeria */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-lg overflow-hidden border border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition flex flex-col"
                        >
                            <div
                                onClick={() => {
                                    setSelectedProject (project);
                                }}
                                className="cursor-pointer"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-4 bg-black text-center flex flex-col items-center">
                                    <h3 className="font-semibold text-yellow-300">{project.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                                </div>
                            </div>

                            <div className="px-4 pb-4 bg-black">
                                <a
                                    href={projectLinks[project.title]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
                                >
                                    Ver projeto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-black border border-yellow-400 rounded-lg max-w-xl w-full p-6 relative flex flex-col items-center text-center"
                            initial={{scale: 0.9, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.9, opacity: 0}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-4 text-yellow-400 text-xl"
                            >
                                ×
                            </button>
                            <div className="overflow-hidden rounded-lg mb-4 cursor-pointer w-full max-w-[600px]">
                                <motion.img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="object-cover w-full h-auto"
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.3}}
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                                {selectedProject.title}
                            </h2>
                            <p className="text-gray-300 whitespace-pre-line">
                                {detailedDescriptions[selectedProject.title]}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
