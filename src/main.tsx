import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.css'; // Prioritize globals.css
// import './index.css' // Temporarily comment out to avoid conflicts

createRoot(document.getElementById("root")!).render(<App />);
