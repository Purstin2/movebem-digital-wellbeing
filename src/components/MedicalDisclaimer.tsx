import React from 'react';

export const MedicalDisclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 text-lg">
      <h2 className="text-2xl font-bold mb-4 text-amber-800">Avisos Médicos Importantes</h2>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <span className="text-amber-800 mr-2">⚕️</span>
          <p>Este programa não substitui orientação médica profissional. Consulte seu médico antes de iniciar qualquer programa de exercícios.</p>
        </div>

        <div className="flex items-start">
          <span className="text-amber-800 mr-2">⚠️</span>
          <p>Interrompa imediatamente os exercícios e procure atendimento médico se sentir: dor aguda, tontura, falta de ar ou desconforto no peito.</p>
        </div>

        <div className="flex items-start">
          <span className="text-amber-800 mr-2">🔍</span>
          <p>Pessoas com condições pré-existentes (hipertensão, problemas cardíacos, gestantes) devem obter liberação médica específica.</p>
        </div>

        <div className="flex items-start">
          <span className="text-amber-800 mr-2">⏰</span>
          <p>Respeite os limites do seu corpo. Progrida gradualmente conforme sua capacidade individual.</p>
        </div>

        <div className="flex items-start">
          <span className="text-amber-800 mr-2">🌿</span>
          <p>As receitas e dicas nutricionais são complementares ao tratamento médico, não substitutas. Verifique alergias e interações medicamentosas.</p>
        </div>

        <div className="flex items-start">
          <span className="text-amber-800 mr-2">👥</span>
          <p>Adaptações específicas para condições médicas devem ser supervisionadas por profissional qualificado.</p>
        </div>
      </div>

      <div className="mt-6 text-sm text-amber-700">
        <p>© {new Date().getFullYear()} FENJES - Todos os direitos reservados</p>
        <p>Aprovado por equipe multidisciplinar de saúde</p>
      </div>
    </div>
  );
};

export default MedicalDisclaimer; 