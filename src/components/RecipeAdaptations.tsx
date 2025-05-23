import React from 'react';
import { MedicalCondition } from '@/types/user-profile';

interface RecipeIngredient {
  name: string;
  amount: string;
  unit: string;
  alternatives?: {
    name: string;
    amount: string;
    unit: string;
    suitableFor: string[];
  }[];
}

interface RecipeAdaptationsProps {
  recipeId: string;
  originalIngredients: RecipeIngredient[];
  dietaryRestrictions: string[];
  medicalConditions: MedicalCondition[];
  className?: string;
}

const commonAlternatives = {
  'dairy': [
    { ingredient: 'leite', alternatives: ['leite de amêndoas', 'leite de coco', 'leite de aveia'] },
    { ingredient: 'iogurte', alternatives: ['iogurte de coco', 'iogurte de amêndoas'] },
    { ingredient: 'queijo', alternatives: ['queijo de castanhas', 'levedura nutricional'] }
  ],
  'gluten': [
    { ingredient: 'farinha de trigo', alternatives: ['farinha de arroz', 'farinha de amêndoas'] },
    { ingredient: 'aveia', alternatives: ['quinoa em flocos', 'amaranto em flocos'] }
  ],
  'nuts': [
    { ingredient: 'castanhas', alternatives: ['sementes de abóbora', 'sementes de girassol'] },
    { ingredient: 'amêndoas', alternatives: ['sementes de chia', 'sementes de linhaça'] }
  ],
  'soy': [
    { ingredient: 'tofu', alternatives: ['grão de bico', 'cogumelos'] },
    { ingredient: 'leite de soja', alternatives: ['leite de amêndoas', 'leite de coco'] }
  ]
};

const medicalConsiderations = {
  'hipertensão': {
    avoid: ['sal em excesso', 'condimentos industrializados'],
    prefer: ['ervas frescas', 'limão', 'alho'],
    tips: ['Reduza o sódio', 'Evite alimentos processados']
  },
  'diabetes': {
    avoid: ['açúcar refinado', 'mel', 'xarope de maple'],
    prefer: ['stevia', 'monk fruit', 'eritritol'],
    tips: ['Controle carboidratos', 'Prefira adoçantes naturais']
  },
  'colesterol alto': {
    avoid: ['gorduras saturadas', 'gorduras trans'],
    prefer: ['azeite de oliva', 'abacate', 'oleaginosas'],
    tips: ['Escolha gorduras boas', 'Aumente fibras']
  }
};

export const RecipeAdaptations: React.FC<RecipeAdaptationsProps> = ({
  recipeId,
  originalIngredients,
  dietaryRestrictions,
  medicalConditions,
  className = ''
}) => {
  const getIngredientAlternatives = (ingredient: RecipeIngredient) => {
    const alternatives: {
      name: string;
      amount: string;
      unit: string;
      suitableFor: string[];
    }[] = [];

    // Check dietary restrictions
    dietaryRestrictions.forEach(restriction => {
      const restrictionAlts = commonAlternatives[restriction.toLowerCase()];
      if (restrictionAlts) {
        const matchingAlt = restrictionAlts.find(alt => 
          ingredient.name.toLowerCase().includes(alt.ingredient)
        );
        if (matchingAlt) {
          matchingAlt.alternatives.forEach(alt => {
            alternatives.push({
              name: alt,
              amount: ingredient.amount,
              unit: ingredient.unit,
              suitableFor: [restriction]
            });
          });
        }
      }
    });

    // Add original alternatives if they exist
    if (ingredient.alternatives) {
      alternatives.push(...ingredient.alternatives);
    }

    return alternatives;
  };

  const getMedicalConsiderations = () => {
    const considerations = new Set<string>();
    
    medicalConditions.forEach(condition => {
      const conditionInfo = medicalConsiderations[condition.name.toLowerCase()];
      if (conditionInfo) {
        conditionInfo.tips.forEach(tip => considerations.add(tip));
      }
    });

    return Array.from(considerations);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Adaptações da Receita
      </h3>

      {/* Ingredient Alternatives */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-white">
          Substituições de Ingredientes
        </h4>
        
        {originalIngredients.map((ingredient, index) => {
          const alternatives = getIngredientAlternatives(ingredient);
          if (alternatives.length === 0) return null;

          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <p className="font-medium mb-2">
                {ingredient.name} ({ingredient.amount} {ingredient.unit})
              </p>
              
              <ul className="space-y-2">
                {alternatives.map((alt, altIndex) => (
                  <li key={altIndex} className="flex items-center gap-2 text-sm">
                    <span>→</span>
                    <span>
                      {alt.name} ({alt.amount} {alt.unit})
                      {alt.suitableFor && (
                        <span className="text-blue-600 dark:text-blue-400 ml-2">
                          (para {alt.suitableFor.join(', ')})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Medical Considerations */}
      {medicalConditions.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
          <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-3">
            Considerações de Saúde
          </h4>
          
          <ul className="space-y-2">
            {getMedicalConsiderations().map((consideration, index) => (
              <li key={index} className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                <span>•</span>
                <span>{consideration}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* General Note */}
      <div className="text-sm text-gray-600 dark:text-gray-300">
        <p>
          Estas adaptações são sugestões baseadas em suas restrições e condições.
          Consulte seu profissional de saúde para orientações específicas.
        </p>
      </div>
    </div>
  );
};

export default RecipeAdaptations; 