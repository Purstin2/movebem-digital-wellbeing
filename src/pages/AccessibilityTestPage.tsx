import React from 'react';
import { MobileAccessibilityTest } from '../components/MobileAccessibilityTest';
import { MedicalDisclaimer } from '../components/MedicalDisclaimer';
import { SupportSystem } from '../components/SupportSystem';
import { accessibilityClasses } from '../styles/accessibility';

export const AccessibilityTestPage: React.FC = () => {
  const [testResults, setTestResults] = React.useState<any[]>([]);

  const handleTestComplete = (results: any[]) => {
    setTestResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className={accessibilityClasses.headings.h1}>
          Testes de Acessibilidade Mobile
        </h1>

        <main className="space-y-8 mt-8">
          <MobileAccessibilityTest
            onTestComplete={handleTestComplete}
            className="bg-white shadow rounded-lg p-6"
          />

          <MedicalDisclaimer
            type="exercise"
            severity="warning"
          />

          <SupportSystem
            className="bg-white shadow rounded-lg p-6"
          />
        </main>
      </div>
    </div>
  );
};

export default AccessibilityTestPage; 