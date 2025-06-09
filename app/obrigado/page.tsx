import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function ObrigadoPage() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-center px-6 py-20">
            <div className="max-w-xl space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">
                    Obrigada pelo contato!
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Sua mensagem foi enviada com sucesso. Em breve você receberá uma resposta com todo o carinho e atenção que seu projeto merece 💛
                </p>

                <Link href="/">
                    <button className="mt-6 inline-flex items-center px-8 py-4 bg-yellow-400/10 text-yellow-400 border-2 border-yellow-400 rounded-xl text-lg font-semibold hover:bg-yellow-400/20 transition-all duration-300">
                        <Sparkles className="mr-2" />
                        Voltar para o início
                    </button>
                </Link>
            </div>
        </section>
    );
}
