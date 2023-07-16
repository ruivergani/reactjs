import { BrowserRouter } from 'react-router-dom';

// Lugar onde todas as paginas sao renderizadas
export function App() {
  return (
    // The BrowserRouter tem que envolver a aplicacao inteira
    // Navigation = coloca aqui para otimizar a performance (Render apenas 1 vez)
    <BrowserRouter>
    </BrowserRouter>
  );
}

export default App;
