"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import ScrollToTop from "@/components/ui/scrolltotop"
import {Gallery} from "@/components/ui/Gallery"


import {
  Code,
  Palette,
  Globe,
  Share2,
  Mail,
  Instagram,
  ArrowRight,
  Zap,
  Terminal,
  Figma,
  Send,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Star,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaHtml5, FaJsSquare, FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaLightbulb, FaComments, FaHandsHelping, FaRegCalendarCheck, FaUserCheck } from "react-icons/fa";
import { FaCode, FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";




export default function ModernCodedByGio() {
  const [mounted, setMounted] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const fullText = "Transformando ideias em experiências digitais incríveis"

  useEffect(() => {
    setMounted(true)
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-500/5"></div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-amber-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-lg animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-amber-400/20 rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 backdrop-blur-sm bg-black/80 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400 flex items-center group">
            <div className="relative mr-3">
              <Terminal className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg group-hover:bg-yellow-400/40 transition-all duration-300"></div>
            </div>
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              codedbygio
            </span>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Sobre", href: "#about" },
              { name: "Serviços", href: "#services" },
              { name: "Setup", href: "#setup" },
              { name: "Contato", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-yellow-400 transition-colors font-medium group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-400/20">
            <div className="p-6 space-y-4">
              {[
                { name: "Sobre", href: "#about" },
                { name: "Serviços", href: "#services" },
                { name: "Setup", href: "#setup" },
                { name: "Contato", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-yellow-400 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <div className="relative">
                    <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                      {typewriterText}
                    </span>
                    <span className="animate-blink text-yellow-400">|</span>
                    <div className="absolute inset-0 bg-yellow-400/10 blur-3xl -z-10 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Sou <span className="text-yellow-400 font-semibold">Giovana Teixeira</span>, desenvolvedora Front-End
                  e UX/UI Designer especializada em criar experiências digitais únicas para empreendedoras e pequenos
                  negócios.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="#contact" className="group">
                  <Button className="relative bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-500 hover:to-amber-600 px-8 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    <div className="relative flex items-center">
                      <Sparkles className="mr-2 w-5 h-5" />
                      Conheça meu portfólio
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="absolute inset-0 bg-yellow-400/50 blur-xl -z-10 group-hover:bg-yellow-400/80 transition-all duration-300"></div>
                  </Button>
                </Link>

                <Link
                  href="https://wa.me/5513991928012?text=Oi!%20Quero%20saber%20mais%20sobre%20seus%20serviços!"
                  target="_blank"
                  className="group"
                >
                  <Button className="relative border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-400/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center">
                      <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Vamos conversar
                    </div>
                  </Button>
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="flex items-center space-x-2 text-yellow-400/60 animate-bounce">
                <span className="text-sm">Explore mais abaixo</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-3xl blur-3xl animate-pulse"></div>

                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400/30 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Made%20with%20insMind-ChatGPT%20Image%2023%20de%20mai.%20de%202025%2C%2017_21_58%20%282%29-f778JAUp5ipQOE8Cuf5VxkuMNlpQev.png"
                    alt="Giovana Teixeira - Desenvolvedora Front-End"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                    priority
                  />

                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black p-3 rounded-full animate-bounce shadow-lg shadow-yellow-400/50">
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-amber-400 text-black p-3 rounded-full animate-pulse shadow-lg shadow-amber-400/50">
                    <Figma className="w-5 h-5" />
                  </div>
                  <div className="absolute top-1/2 -right-4 bg-yellow-400 text-black p-2 rounded-full animate-ping shadow-lg shadow-yellow-400/50">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão para voltar ao topo */}
      <ScrollToTop />

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
        <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
          Sobre Mim
        </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
          </div>

          {/* Texto sobre mim */}
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-12">
             Quem eu sou?
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed mb-12">
              <p className="text-lg">
                Olá! Eu sou a <span className="text-yellow-400 font-semibold">Giovana Teixeira</span>, Desenvolvedora Front-End e UX/UI Designer com
                <span className="text-amber-400 font-semibold"> 5 anos de experiência </span>
                transformando ideias em experiências digitais impactantes.
              </p>
              <p className="text-lg">
                Como <span className="text-amber-400 font-semibold">CEO da Studio Create MKT</span>, ajudo empreendedoras, influencers e pequenos negócios
                a se destacarem no universo online por meio de soluções digitais personalizadas e com propósito.
              </p>
              <p className="text-lg">
                Sou estudante de <span className="text-yellow-400 font-semibold">Ciência da Computação na ESAMC Santos</span>, sempre em constante evolução
                e antenada nas principais tendências e tecnologias do mercado.
              </p>
              <p className="text-lg font-medium text-amber-400">
                Minha missão é <span className="text-yellow-300 font-semibold">dar vida a marcas</span> por meio de <span className="text-yellow-300 font-semibold">designs estratégicos, funcionais e autênticos</span>,
                que conectam pessoas e histórias no ambiente digital.
              </p>
            </div>
          </div>

          {/* Cards abaixo do texto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Code, label: "Front-End", color: "from-yellow-400/20 to-amber-400/20" },
              { icon: Figma, label: "UX/UI Design", color: "from-amber-400/20 to-yellow-500/20" },
              { icon: Palette, label: "Identidade Visual", color: "from-yellow-500/20 to-amber-400/20" },
              { icon: Globe, label: "Landing Pages", color: "from-amber-400/20 to-yellow-400/20" },
            ].map((skill, index) => (
                <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                        className={`bg-gradient-to-br ${skill.color} backdrop-blur-sm p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                    >
                      <skill.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-yellow-400">{skill.label}</h3>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Skills Section */}
      <section id="setup" className="relative z-10 py-20 px-6 bg-gradient-to-br from-gray-900/20 to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Minhas Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              As linguagens e softwares que uso para criar experiências incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <FaCode className="w-6 h-6 mr-3" />
                Linguagens
              </h3>

              <div className="grid gap-4">
                {[
                  { icon: FaHtml5, label: "Html & CSS", value: 'Estrutura básica de páginas  e estilizacao de páginas' },
                  { icon: FaJsSquare, label: "Java Script", value: "Adiciona interatividade às páginas" },
                  { icon: SiTypescript, label: "Type Script", value: "JavaScript com tipos (mais seguro e organizado)" },
                  { icon: FaReact, label: "React", value: "Biblioteca para criar interfaces web dinâmicas" },
                  { icon: SiNextdotjs, label: "Next.js", value: "Framework React com foco em performance e SEO" },
                  { icon: FaGitAlt, label: "Git", value: "Sistema de controle de versão para projetos" },
                  { icon: FaJava, label: "Java", value: "Linguagem usada em backend, apps e sistemas robustos" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-yellow-400 font-semibold text-sm">{item.label}</p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <GiSkills className="w-6 h-6 mr-3" />
                Skills
              </h3>

              <div className="grid gap-4">
                {[
                  { icon: FaLightbulb, label: "Criatividade", value: " Capacidade de gerar ideias originais e soluções inovadoras" },
                  { icon: FaComments, label: "Comunicação", value: "Clareza ao transmitir ideias de forma eficaz e compreensível" },
                  { icon: FaHandsHelping, label: "Empatia", value: "Habilidade de se colocar no lugar do outro e entender diferentes perspectivas" },
                  { icon: FaRegCalendarCheck, label: "Organização", value: 'Planejamento e estruturação eficiente de tarefas e rotinas' },
                  { icon: FaUserCheck, label: "Disciplina", value: "Comprometimento com prazos, metas e consistência nas entregas" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-yellow-400 font-semibold text-sm">{item.label}</p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-6 bg-gradient-to-br from-gray-900/20 to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Serviços
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluções digitais completas para elevar sua marca ao próximo nível
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Identidade Visual",
                description: "Criação de logos, paletas de cores e elementos visuais únicos para sua marca.",
                features: ["Logo Design", "Paleta de Cores", "Tipografia", "Brand Guidelines"],
              },
              {
                icon: Figma,
                title: "UX/UI Design",
                description: "Design de interfaces intuitivas e experiências de usuário memoráveis.",
                features: ["Wireframes", "Protótipos", "Design System", "Testes de Usabilidade"],
              },
              {
                icon: Globe,
                title: "Landing Pages",
                description: "Páginas de alta conversão otimizadas para seus objetivos de negócio.",
                features: ["Design Responsivo", "Otimização SEO", "Integração Analytics", "A/B Testing"],
              },
              {
                icon: Code,
                title: "Desenvolvimento Front-End",
                description: "Transformo designs em código limpo e performático.",
                features: ["React/Next.js", "HTML/CSS/JS", "Responsividade", "Performance"],
              },
              {
                icon: Share2,
                title: "Consultoria Digital",
                description: "Estratégias personalizadas para fortalecer sua presença online.",
                features: ["Análise de Marca", "Estratégia Digital", "Roadmap", "Mentoria"],
              },
              {
                icon: Heart,
                title: "Marcas Pessoais",
                description: "Especializada em projetos para empreendedoras e influencers.",
                features: ["Personal Branding", "Social Media Kit", "Templates", "Consultoria"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="relative p-8 space-y-6">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/20 backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-yellow-400" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-yellow-400 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                        >
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Links Rápidos
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
            <p className="text-xl text-gray-300">Conecte-se comigo nas redes sociais e vamos conversar!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="https://instagram.com/codedbygio" target="_blank" className="group">
              <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400">Instagram</h3>
                  <p className="text-gray-300">@codedbygio</p>
                  <p className="text-sm text-gray-400">Acompanhe meu dia a dia e projetos</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://wa.me/5513991928012?text=Quero%20saber%20mais!" target="_blank" className="group">
              <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400">WhatsApp</h3>
                  <p className="text-gray-300">Orçamento</p>
                  <p className="text-sm text-gray-400">Vamos conversar sobre seu projeto</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/links" target="_blank" className="group">
              <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/20 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">LinkTree</h3>
                  <p className="text-gray-300">Todos os meus links</p>
                  <p className="text-sm text-gray-400">Todos os meus links em um só lugar</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-gradient-to-br from-gray-900/20 to-black/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Vamos Criar</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Algo Incrível Juntas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto"></div>
            <p className="text-xl text-gray-300">Pronta para transformar sua ideia em realidade? Vamos conversar!</p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl p-12 border border-yellow-400/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 border-b border-yellow-400/30">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-yellow-400 text-sm font-mono">contato.tsx</span>
              </div>
            </div>

            <form
                action="https://formsubmit.co/studiocreatemkt@outlook.com"
                method="POST"
                encType="multipart/form-data"
                className="relative pt-10 space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://site-cbg.vercel.app/obrigado" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Nome</label>
                  <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-black/60 border-2 border-yellow-400/30 text-white placeholder:text-gray-500 rounded-xl p-4 text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">E-mail</label>
                  <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-black/60 border-2 border-yellow-400/30 text-white placeholder:text-gray-500 rounded-xl p-4 text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Mensagem</label>
                <textarea
                    name="message"
                    required
                    className="w-full bg-black/60 border-2 border-yellow-400/30 text-white placeholder:text-gray-500 rounded-xl p-4 text-lg min-h-32 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Conte-me sobre seu projeto dos sonhos..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Anexo (opcional)</label>
                <div className="relative">
                  <input
                      type="file"
                      name="attachment"
                      className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400/10 file:text-yellow-400 hover:file:bg-yellow-400/20 bg-black/60 border-2 border-yellow-400/30 rounded-xl p-2"
                  />
                </div>
              </div>

              <button
                  type="submit"
                  className="relative w-full bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-400/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl"></div>
                <div className="relative flex items-center justify-center">
                  <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Enviar Mensagem
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-yellow-400/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center space-x-4">
              <div className="relative">
                <Terminal className="w-8 h-8 text-yellow-400" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                codedbygio
              </span>
            </div>

            <p className="text-gray-400">Transformando ideias em experiências digitais incríveis</p>

            <div className="flex justify-center space-x-6">
              <Link
                href="https://instagram.com/codedbygio"
                target="_blank"
                className="text-yellow-400 hover:text-yellow-300 transition-colors group"
              >
                <div className="relative p-3 rounded-full border border-yellow-400/30 hover:border-yellow-400/60 transition-colors">
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>
              <Link
                href="https://www.behance.net/studiocreatemkt"
                target="_blank"
                className="text-yellow-400 hover:text-yellow-300 transition-colors group"
              >
                <div className="relative p-3 rounded-full border border-yellow-400/30 hover:border-yellow-400/60 transition-colors">
                  <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>
              <Link
                href="mailto:hello@codedbygio.com"
                className="text-yellow-400 hover:text-yellow-300 transition-colors group"
              >
                <div className="relative p-3 rounded-full border border-yellow-400/30 hover:border-yellow-400/60 transition-colors">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>
            </div>

            <div className="pt-8 border-t border-yellow-400/10">
              <p className="text-gray-500">© {new Date().getFullYear()} codedbygio. Todos os direitos reservados.</p>
              <p className="text-gray-600 text-sm mt-2">Feito com 💛 e muito código</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
