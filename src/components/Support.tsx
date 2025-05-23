import React from 'react';

interface ContactChannel {
  type: string;
  value: string;
  availability: string;
  responseTime: string;
}

const contactChannels: ContactChannel[] = [
  {
    type: 'Email',
    value: 'suporte@fenjes.com',
    availability: '24/7',
    responseTime: 'Até 24 horas'
  },
  {
    type: 'WhatsApp',
    value: '+55 11 99999-9999',
    availability: 'Seg-Sex 8h-18h',
    responseTime: 'Até 2 horas em horário comercial'
  },
  {
    type: 'Telefone',
    value: '0800 123 4567',
    availability: 'Seg-Sex 9h-17h',
    responseTime: 'Atendimento imediato'
  }
];

interface EmergencyContact {
  service: string;
  number: string;
  description: string;
}

const emergencyContacts: EmergencyContact[] = [
  {
    service: 'SAMU',
    number: '192',
    description: 'Emergências médicas'
  },
  {
    service: 'Bombeiros',
    number: '193',
    description: 'Acidentes e resgates'
  }
];

export const Support: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Suporte e Contato</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Canais de Atendimento</h3>
          <div className="space-y-6">
            {contactChannels.map((channel, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium text-lg mb-2">{channel.type}</h4>
                <p className="text-lg text-blue-600 mb-2">{channel.value}</p>
                <div className="text-sm text-gray-600">
                  <p>Disponibilidade: {channel.availability}</p>
                  <p>Tempo de resposta: {channel.responseTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Emergências</h3>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-700 font-medium mb-4">Em caso de emergência médica:</p>
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="mb-3">
                  <p className="font-bold">{contact.service}: {contact.number}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Recursos de Ajuda</h3>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="text-blue-600 hover:underline">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="/troubleshooting" className="text-blue-600 hover:underline">
                  Soluções de Problemas
                </a>
              </li>
              <li>
                <a href="/tutorial" className="text-blue-600 hover:underline">
                  Tutorial do Aplicativo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-600">
          Horário de atendimento administrativo: Segunda a Sexta, 9h às 18h
        </p>
      </div>
    </div>
  );
}; 