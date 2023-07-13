import { Router } from './Router';

import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation';

// Lugar onde todas as paginas sao renderizadas
export function App() {
  return (
    // The BrowserRouter tem que envolver a aplicacao inteira
    // Navigation = coloca aqui para otimizar a performance (Render apenas 1 vez)
    <BrowserRouter>
      <Navigation/> 
      <Router/>
    </BrowserRouter>
  );
}

export default App;
