import React, { useState, useEffect } from 'react';
import { ChairYogaExercise, PersonalizationProfile, ProgressionPlan, MedicalDisclaimer } from '@/types/chair-yoga';

interface Props {
  onProfileUpdate: (profile: PersonalizationProfile) => void;
  onPlanGenerated: (plan: ProgressionPlan) => void;
}

export const PersonalizationSystem: React.FC<Props> = ({ onProfileUpdate, onPlanGenerated }) => {
  const [profile, setProfile] = useState<PersonalizationProfile>({
    painLevel: 5,
    limitations: {
      mobility: 'none',
      balance: 'none',
      strength: 'none'
    },
    conditions: [],
    medications: [],
    track: 'wellness',
    preferences: {
      duration: 'medium',
      difficulty: 'beginner',
      focus: []
    }
  });

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handlePainLevelChange = (level: number) => {
    setProfile(prev => ({
      ...prev,
      painLevel: level
    }));
  };

  const handleLimitationChange = (type: keyof PersonalizationProfile['limitations'], value: string) => {
    setProfile(prev => ({
      ...prev,
      limitations: {
        ...prev.limitations,
        [type]: value
      }
    }));
  };

  const handleTrackSelection = (track: 'therapeutic' | 'adaptive' | 'wellness') => {
    setProfile(prev => ({
      ...prev,
      track,
      // Adjust difficulty based on track
      preferences: {
        ...prev.preferences,
        difficulty: track === 'therapeutic' ? 'beginner' : 'intermediate'
      }
    }));
  };

  const generateProgressionPlan = (): ProgressionPlan => {
    // Implement 21-day progression logic here
    return {
      userId: 'user123',
      startDate: new Date(),
      track: profile.track,
      weeks: [
        {
          weekNumber: 1,
          focus: 'Adaptação e Consciência Corporal',
          exercises: [
            {
              day: 1,
              exerciseIds: ['gentle_neck_release', 'shoulder_awareness'],
              recipes: ['golden_milk_supreme'],
              adaptations: []
            }
            // ... complete 21 days
          ]
        }
      ],
      currentProgress: {
        week: 1,
        day: 1,
        completedExercises: []
      }
    };
  };

  useEffect(() => {
    onProfileUpdate(profile);
  }, [profile, onProfileUpdate]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {showDisclaimer && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Aviso Médico Importante</h3>
              <div className="mt-2 text-yellow-700">
                {MedicalDisclaimer.general.map((disclaimer, index) => (
                  <p key={index} className="text-sm mb-1">{disclaimer}</p>
                ))}
              </div>
              <button
                className="mt-4 text-sm font-medium text-yellow-800 hover:text-yellow-900"
                onClick={() => setShowDisclaimer(false)}
              >
                Entendi e aceito
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Nível de Dor</h2>
          <input
            type="range"
            min="1"
            max="10"
            value={profile.painLevel}
            onChange={(e) => handlePainLevelChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Sem dor (1)</span>
            <span>Dor severa (10)</span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Limitações</h2>
          {Object.entries(profile.limitations).map(([key, value]) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <select
                value={value}
                onChange={(e) => handleLimitationChange(key as keyof PersonalizationProfile['limitations'], e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="none">Nenhuma</option>
                <option value="mild">Leve</option>
                <option value="moderate">Moderada</option>
                <option value="severe">Severa</option>
              </select>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Trilha de Prática</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {['therapeutic', 'adaptive', 'wellness'].map((track) => (
              <button
                key={track}
                onClick={() => handleTrackSelection(track as 'therapeutic' | 'adaptive' | 'wellness')}
                className={`p-4 rounded-lg border ${
                  profile.track === track
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <h3 className="text-lg font-medium">
                  {track === 'therapeutic' ? 'Terapêutica' :
                   track === 'adaptive' ? 'Adaptativa' : 'Wellness'}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {track === 'therapeutic' ? 'Para dores severas/crônicas' :
                   track === 'adaptive' ? 'Para limitações moderadas' : 'Para prevenção e bem-estar'}
                </p>
              </button>
            ))}
          </div>
        </section>

        <button
          onClick={() => onPlanGenerated(generateProgressionPlan())}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Gerar Plano Personalizado de 21 Dias
        </button>
      </div>
    </div>
  );
}; 