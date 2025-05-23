import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, TextField, Button } from '@mui/material';
import { FAQ } from './FAQ';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`support-tabpanel-${index}`}
      aria-labelledby={`support-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const troubleshootingSteps = [
  {
    issue: 'Exercícios muito intensos',
    steps: [
      'Verifique se selecionou o nível correto de dificuldade',
      'Use as opções de adaptação disponíveis',
      'Reduza a intensidade nas configurações',
      'Consulte as variações mais suaves'
    ]
  },
  {
    issue: 'Dificuldade em visualizar conteúdo',
    steps: [
      'Ajuste o tamanho da fonte nas configurações',
      'Ative o modo alto contraste',
      'Verifique o brilho do dispositivo',
      'Use a opção de zoom do navegador'
    ]
  },
  {
    issue: 'Problemas com receitas',
    steps: [
      'Verifique as substituições permitidas',
      'Consulte as adaptações para restrições',
      'Ajuste as porções conforme necessário',
      'Use a calculadora de nutrientes'
    ]
  }
];

const contactInfo = {
  email: 'suporte@fenjes.com.br',
  phone: '(11) 99999-9999',
  whatsapp: '(11) 99999-9999',
  hours: 'Segunda a Sexta, 9h às 18h',
  address: 'Rua Exemplo, 123 - São Paulo, SP'
};

export const SupportSystem: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement support message submission
    console.log('Support message:', supportMessage);
    setSupportMessage('');
    alert('Mensagem enviada com sucesso! Responderemos em até 24 horas.');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Central de Suporte
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="support system tabs"
          sx={{ minHeight: 48 }}
        >
          <Tab label="FAQ" sx={{ minHeight: 48, fontSize: '1rem' }} />
          <Tab label="Troubleshooting" sx={{ minHeight: 48, fontSize: '1rem' }} />
          <Tab label="Contato" sx={{ minHeight: 48, fontSize: '1rem' }} />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <TextField
          fullWidth
          label="Buscar nas perguntas frequentes"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        />
        <FAQ searchTerm={searchTerm} />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>
          Resolução de Problemas Comuns
        </Typography>
        {troubleshootingSteps.map((item, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              {item.issue}
            </Typography>
            <ol>
              {item.steps.map((step, stepIndex) => (
                <Typography
                  key={stepIndex}
                  component="li"
                  sx={{ mb: 1, ml: 3 }}
                >
                  {step}
                </Typography>
              ))}
            </ol>
          </Box>
        ))}
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Informações de Contato
            </Typography>
            <Typography variant="body1" paragraph>
              Email: {contactInfo.email}
            </Typography>
            <Typography variant="body1" paragraph>
              Telefone: {contactInfo.phone}
            </Typography>
            <Typography variant="body1" paragraph>
              WhatsApp: {contactInfo.whatsapp}
            </Typography>
            <Typography variant="body1" paragraph>
              Horário de Atendimento: {contactInfo.hours}
            </Typography>
            <Typography variant="body1" paragraph>
              Endereço: {contactInfo.address}
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSupportSubmit}>
            <Typography variant="h5" gutterBottom>
              Envie sua Mensagem
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Descreva sua dúvida ou problema"
              value={supportMessage}
              onChange={(e) => setSupportMessage(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ minHeight: 48 }}
            >
              Enviar Mensagem
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}; 