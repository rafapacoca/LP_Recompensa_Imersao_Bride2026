import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.slice(0, 11);
    
    if (v.length > 2 && v.length <= 6) {
      v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 6 && v.length <= 10) {
      v = `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
    } else if (v.length > 10) {
      v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    } else if (v.length > 0) {
      v = `(${v}`;
    }
    
    setWhatsapp(v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, whatsapp })
      });

      const responseText = await response.text();
      let data;
      
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        throw new Error('Falha de infraestrutura: A API não retornou os dados corretamente (Erro 500 no Vercel).');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao processar');
      }

      // Sucesso -> Redirecionar
      navigate('/obrigado');
    } catch (err: any) {
      setError(err.message || 'Houve um erro ao enviar seus dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#0A0B10]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/5 to-neon-purple/5 opacity-50 pointer-events-none" />
      
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-5 relative z-10">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
          <input
            type="text"
            required
            placeholder="Digite seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-white placeholder:text-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Seu Melhor E-mail</label>
          <input
            type="email"
            required
            placeholder="contato@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-white placeholder:text-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
          <input
            type="tel"
            required
            placeholder="(00) 00000-0000"
            value={whatsapp}
            onChange={handlePhoneChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-white placeholder:text-gray-600"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-neon-green to-[#00CC6D] text-black font-bold py-4 rounded-xl shadow-neon-green hover:shadow-[0_0_30px_-3px_var(--color-neon-green)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "QUERO RECEBER O PDF"
          )}
        </button>
        <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
           🔒 Seus dados estão seguros. Vamos enviar seu acesso gratuito.
        </p>
      </div>
    </form>
  );
}
