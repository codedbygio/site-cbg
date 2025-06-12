"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const allProjects = [
    {
        title: "LF Body Piercer",
        description: "Identidade Visual e Landing Page",
        image: "/projetos/lf-bodypiercer.png",
        tags: ["Identidade Visual", "Landing Page"],
    },
    {
        title: "Cheiro na Cuca Bar",
        description: "Identidade Visual e Social Media",
        image: "/projetos/cheiro-na-cuca.png",
        tags: ["Identidade Visual", "Social Media"],
    },
    {
        title: "Studio Create MKT",
        description: "Identidade Visual e Social Media",
        image: "/projetos/studio-create.png",
        tags: ["Identidade Visual", "Social Media"],
    },
]

const filters = ["Todos", "Identidade Visual", "Social Media", "Landing Page"]

const projectLinks = {
    "Studio Create MKT": "https://www.behance.net/gallery/224360119/Studio-Create-MKT",
    "LF Body Piercer": "https://lfbodypiercer.vercel.app/",
    "Cheiro na Cuca Bar": "https://www.behance.net/gallery/224497967/Cheiro-na-Cuca-Bar",
}

const detailedDescriptions = {
    "Studio Create MKT": `O Studio Create Marketing é uma agência criativa focada em estratégias de marketing digital, design visual e posicionamento de marca. Acreditamos no poder da comunicação autêntica e do design inteligente para gerar conexão, valor e resultados reais. Nossa identidade transmite inovação, profissionalismo e criatividade, refletindo o nosso compromisso em transformar ideias em experiências memoráveis.`,

    "Cheiro na Cuca Bar": `Bar e mini mercado com pegada descontraída. Visual marcante em preto e amarelo, mascote carismático e tipografia ousada. Projeto pensado pra destacar promoções, combos e criar conexão rápida com o público. Comunicação direta, vibrante e autêntica.`,

    "LF Body Piercer": `Larissa Santos é mais do que uma body piercer — é uma artista do detalhe.
Com mãos leves e olhar preciso, ela transforma o corpo em tela e o piercing em expressão pessoal. Cada aplicação é um ritual de cuidado, presença e estilo.
Sua marca nasce do encontro entre o sensível e o marcante, unindo estética, segurança e empatia em cada atendimento. Larissa acredita que autenticidade se revela nos pequenos detalhes — e que um piercing pode ser tanto um grito de liberdade quanto um sussurro de autocuidado.`,
}

export function Gallery() {
    const [activeFilter, setActiveFilter] = useState("Todos")
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects =
        activeFilter === "Todos"
            ? allProjects
            : allProjects.filter((p) => p.tags.includes(activeFilter))

    return (
        <section className="py-20 px-6 bg-black text-white font-poppins relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Seção Minhas Skills */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Meus Projetos
              </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Aqui estao os projetos desenvolvidos por mim
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex justify-center gap-4 flex-wrap mb-12">
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
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            whileHover={{ scale: 1.08, rotate: -1 }}
                            className="relative group bg-gradient-to-br from-zinc-900 to-black border border-yellow-500 p-5 rounded-3xl shadow-[0_0_30px_rgba(255,255,0,0.1)] cursor-pointer hover:shadow-yellow-400/30 transition duration-300 ease-in-out flex flex-col"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="overflow-hidden rounded-xl flex-shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-4 flex-grow">
                                <h3 className="text-2xl font-bold text-yellow-300 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-yellow-400/10 text-yellow-300 text-xs px-3 py-1 rounded-full border border-yellow-300 backdrop-blur-md"
                                        >
                      #{tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal com detalhes do projeto */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 overflow-y-auto backdrop-blur"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-gradient-to-b from-zinc-950 to-black rounded-2xl p-8 max-w-2xl w-full relative border border-yellow-400 shadow-lg shadow-yellow-500/20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-4 text-yellow-400 text-3xl font-bold"
                            >
                                ×
                            </button>
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                width={800}
                                height={500}
                                className="w-full h-auto rounded-xl mb-6"
                            />
                            <h2 className="text-3xl font-bold text-yellow-300 mb-2 uppercase">
                                {selectedProject.title}
                            </h2>
                            <p className="text-gray-300 text-md leading-relaxed whitespace-pre-line">
                                {detailedDescriptions[selectedProject.title]}
                            </p>
                            {projectLinks[selectedProject.title] && (
                                <a
                                    href={projectLinks[selectedProject.title]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-block px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition"
                                >
                                    Ver Projeto
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
