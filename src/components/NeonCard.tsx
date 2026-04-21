import React from 'react';

interface NeonCardProps {
  color: 'purple' | 'cyan' | 'green' | 'magenta';
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function NeonCard({ color, icon, title, children, className = '' }: NeonCardProps) {
  const colorMap = {
    purple: { 
      border: 'border-neon-purple', 
      shadow: 'shadow-neon-purple', 
      bgText: 'text-neon-purple',
      gradient: 'from-neon-purple/20'
    },
    cyan: { 
      border: 'border-neon-cyan', 
      shadow: 'shadow-neon-cyan', 
      bgText: 'text-neon-cyan',
      gradient: 'from-neon-cyan/20'
    },
    green: { 
      border: 'border-neon-green', 
      shadow: 'shadow-neon-green', 
      bgText: 'text-neon-green',
      gradient: 'from-neon-green/20'
    },
    magenta: { 
      border: 'border-neon-magenta', 
      shadow: 'shadow-neon-magenta', 
      bgText: 'text-neon-magenta',
      gradient: 'from-neon-magenta/20'
    },
  };
  
  const theme = colorMap[color];

  return (
    <div className={`bg-[#0A0B10] border ${theme.border} ${theme.shadow} bg-gradient-to-b ${theme.gradient} to-transparent rounded-2xl p-8 pt-12 relative flex flex-col uppercase-font tracking-wide items-center text-center ${className} transition-all duration-300 hover:scale-[1.02]`}>
       <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0A0B10] border ${theme.border} flex items-center justify-center ${theme.bgText}`}>
         {icon}
       </div>
       <h3 className={`text-xl font-bold mb-6 ${theme.bgText}`}>{title}</h3>
       <div className="text-gray-300 space-y-4 text-left w-full">
         {children}
       </div>
    </div>
  );
}
