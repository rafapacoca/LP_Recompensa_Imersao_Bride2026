import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Background } from '../components/Background';
import { NeonCard } from '../components/NeonCard';

// Substitua pelo Link real do seu PDF
const PDF_URL = "https://drive.google.com/file/d/19ytAgpD5usuCot0LXZJCt8wOaCLAkUEw/view";

export default function Obrigado() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-neon-cyan/30">
      <Background />
      
      <main className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[90vh] text-center z-10 relative">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-sm font-semibold mb-8">
          🎉 Acesso liberado!
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Obrigado por participar!
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Seu acesso ao material foi liberado com sucesso. Clique no botão abaixo para baixar o PDF da apresentação.
        </p>

        <NeonCard color="cyan" icon={<Download />} title="ACESSO AO CONTEÚDO" className="w-full max-w-md">
          <p className="text-center text-gray-400 mb-8">O documento está pronto para ser baixado. Recomendamos baixar via Wi-fi se não estiver pelo computador.</p>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block bg-gradient-to-r from-neon-cyan to-blue-500 text-black text-center font-bold py-4 rounded-xl shadow-neon-cyan hover:shadow-[0_0_30px_-3px_var(--color-neon-cyan)] transition-all hover:scale-[1.02]"
          >
            BAIXAR PDF AGORA
          </a>
          <p className="text-xs text-gray-500 text-center mt-4">
            Em breve, você pode receber novos conteúdos sobre automação, IA e produtividade no seu WhatsApp.
          </p>
        </NeonCard>
        
      </main>
    </div>
  );
}
