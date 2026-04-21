import { Background } from '../components/Background';
import { LeadForm } from '../components/LeadForm';
import { NeonCard } from '../components/NeonCard';
import { 
  Bot, Clock, XCircle, TrendingUp, Sparkles, CheckCircle, Smartphone, UserCheck, CalendarPlus
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-neon-purple/30">
      <Background />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        <div className="space-y-8 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm font-bold tracking-wide"
          >
            MATERIAL EXCLUSIVO GRATUITO
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Automação <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Inteligente com IA</span> para Profissionais da Beleza
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Descubra como automatizar atendimento, qualificar leads, organizar agendamentos e vender mais com inteligência artificial. Baixe gratuitamente o material completo da apresentação.
          </motion.p>
          
          <motion.ul 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 font-medium text-gray-300 mt-4"
          >
            {[
              "Atendimento mais rápido",
              "Follow-up automático",
              "Mais vendas com menos operação"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                {text}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 2. O PROBLEMA REAL */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-[#0A0B10]/80">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O problema real não é falta de talento.<br/><span className="text-red-400">É falta de processo.</span></h2>
          <p className="text-lg text-gray-400">Muitas profissionais excelentes tecnicamente perdem oportunidades todos os meses porque precisam atender, vender, responder, organizar agenda, fazer follow-up e ainda executar o serviço. O problema não é falta de capacidade. É acúmulo de funções sem estrutura.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Demora para responder mensagens",
            "Leads esfriam e desistem",
            "Falta follow-up",
            "Agenda desorganizada",
            "Atendimento no improviso",
            "Excesso de tarefas operacionais"
          ].map((text, i) => (
            <div key={i} className="bg-white/5 border border-red-500/20 rounded-xl p-6 flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AS ATIVIDADES INVISÍVEIS */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Seu negócio executa <span className="text-neon-cyan">muito mais do que você imagina</span></h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">Você não trabalha só com beleza. Você opera marketing, vendas, atendimento, agendamento, pós-venda, financeiro e gestão todos os dias, muitas vezes sem perceber.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto mb-16">
          {["Marketing", "Atendimento", "Vendas", "Agendamento", "Operação", "Gestão"].map((item) => (
            <div key={item} className="bg-[#0A0B10] border border-white/10 rounded-2xl py-6 flex flex-col items-center justify-center gap-2 hover:border-white/30 transition-colors">
              <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">{item}</div>
            </div>
          ))}
        </div>
        <p className="text-2xl font-semibold italic text-white/90 max-w-3xl mx-auto">"O cansaço não vem só do volume de trabalho. Vem de tocar uma empresa inteira no improviso."</p>
      </section>

      {/* 4. O PAPEL DA IA (NEON CARDS) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O que a IA pode fazer por você</h2>
            <p className="text-xl text-neon-green font-medium">A IA não veio para substituir pessoas. Veio para potencializar negócios e multiplicar produtividade.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            <NeonCard color="purple" icon={<TrendingUp />} title="ATRAIR & QUALIFICAR">
              <ul className="space-y-3">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-purple mt-0.5" /> Responder clientes automaticamente</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-purple mt-0.5" /> Qualificar leads recebidos</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-purple mt-0.5" /> Apresentar serviços com clareza</li>
              </ul>
            </NeonCard>

            <NeonCard color="cyan" icon={<Clock />} title="PRODUTIVIDADE 24H">
              <ul className="space-y-3">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-cyan mt-0.5" /> Fazer follow-up ativo</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-cyan mt-0.5" /> Enviar lembretes prévios</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-cyan mt-0.5" /> Funcionar e vender 24h por dia</li>
              </ul>
            </NeonCard>

            <NeonCard color="green" icon={<CalendarPlus />} title="ORGANIZAÇÃO TOTAL">
              <ul className="space-y-3">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-green mt-0.5" /> Agendar horários na agenda</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-green mt-0.5" /> Organizar todo o atendimento</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-neon-green mt-0.5" /> Entregar links e PDFs padronizados</li>
              </ul>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* 5. COMPARATIVO */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Qual modelo entrega mais <span className="text-neon-cyan">consistência no processo comercial?</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0A0B10] border border-white/10 rounded-2xl p-8 opacity-80">
            <h3 className="text-xl font-bold text-white mb-6 text-center pb-4 border-b border-white/10">Trabalho Manual / CLT</h3>
            <ul className="space-y-4 text-gray-400">
               <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-gray-600"/> Atendimento limitado a horário comercial</li>
               <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-gray-600"/> Demora variável na resposta</li>
               <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-gray-600"/> Alto custo de encargo e treinamento</li>
               <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-gray-600"/> Follow-up muitas vezes esquecido</li>
            </ul>
          </div>
          <div className="bg-[#0A0B10] border border-neon-cyan shadow-neon-cyan rounded-2xl p-8 transform md:-translate-y-4">
            <h3 className="text-xl font-bold text-neon-cyan mb-6 text-center pb-4 border-b border-white/10 flex items-center justify-center gap-2">
               <Bot className="w-6 h-6"/> Inteligência Artificial
            </h3>
            <ul className="space-y-4 text-white font-medium">
               <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-neon-cyan"/> Atendimento instantâneo 24/7</li>
               <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-neon-cyan"/> Resposta rápida em milissegundos</li>
               <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-neon-cyan"/> Custo marginal para escalar volume</li>
               <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-neon-cyan"/> Follow-up impecável e programado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. TRANSFORMAÇÃO */}
      <section className="py-24 px-6 bg-gradient-to-t from-transparent to-[#0A0B10]/80">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-2xl mx-auto">Com isso, você tem mais tempo para focar no que <span className="text-neon-purple">realmente importa</span></h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
           {["Atender melhor", "Encantar clientes", "Criar e inovar serviços", "Fazer o que só você faz", "Ter mais tempo pra você", "Mais estratégia, menos operação"].map((item) => (
             <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
               <Sparkles className="w-6 h-6 text-neon-purple mx-auto mb-4" />
               <p className="font-semibold text-gray-200">{item}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 7. IMPACTO */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-b border-white/10 mb-24 relative">
        <div className="absolute inset-0 bg-neon-green/5 blur-3xl" />
        <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Uma pequena melhoria no atendimento pode gerar <span className="text-neon-green">grande impacto</span></h2>
        <p className="text-xl text-gray-300 relative z-10 font-light">Se a automação ajudar a recuperar clientes que seriam perdidos por demora, o ganho é imediato. Menos operação. Mais estratégia. Mais produtividade e qualidade de vida.</p>
      </section>

      {/* 8. CAPTURA FINAL */}
      <section id="formulario-captura" className="pb-32 px-6 max-w-4xl mx-auto text-center relative z-10 pt-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Baixe agora o PDF gratuito com o conteúdo da apresentação</h2>
        <p className="text-lg text-gray-400 mb-12">Preencha seus dados para acessar o material e entender como a inteligência artificial pode ajudar você a vender mais, atender melhor e ganhar tempo.</p>
        
        <div className="max-w-xl mx-auto text-left">
          <LeadForm />
        </div>
      </section>

    </div>
  );
}
