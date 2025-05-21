
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="h-24 w-24 bg-movebem-purple-light rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl font-quicksand font-bold text-movebem-purple-dark">404</span>
          </div>
        </div>
        <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Página não encontrada
        </h1>
        <p className="text-gray-600 mb-6">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <Button asChild className="bg-movebem-purple hover:bg-movebem-purple-dark">
          <Link to="/">Voltar para o Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
