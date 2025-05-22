
import OnboardingQuiz from '@/components/onboarding/OnboardingQuiz';
import { FenjesLogo } from '@/components/brand/FenjesLogo';

const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-fenjes-bg-light py-8 px-4">
      <div className="text-center mb-10">
        <div className="mx-auto mb-4">
          <FenjesLogo size="lg" />
        </div>
        <h1 className="font-quicksand font-bold text-3xl text-fenjes-text-warm mb-2">
          Fenjes
        </h1>
        <p className="text-gray-600">
          Vamos personalizar seu programa para uma jornada de transformação
        </p>
      </div>
      
      <OnboardingQuiz />
    </div>
  );
};

export default OnboardingPage;
