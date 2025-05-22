
import OnboardingQuiz from '@/components/onboarding/OnboardingQuiz';

const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="text-center mb-10">
        <div className="bg-movebem-purple h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-quicksand font-bold text-2xl">MB</span>
        </div>
        <h1 className="font-quicksand font-bold text-3xl text-gray-800 mb-2">
          MoveBem
        </h1>
        <p className="text-gray-600">
          Vamos personalizar seu programa para resultados melhores
        </p>
      </div>
      
      <OnboardingQuiz />
    </div>
  );
};

export default OnboardingPage;
