/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [message, setMessage] = useState('');

  // SELECT
  const [car, setCar] = useState('');
  return (
    <>
      <textarea
        value={message} // valor do campo
        onChange={(event) => setMessage(event.target.value)} // atualizar o valor do campo
      />
      {message}
      {/* Usando o SELECT */}
      <select value={car} onChange={(target) => setCar(target.value)}> {/* Se voce passar o valor no useState('Ferrari') uma opcao sera selecionada */}
        <option value="">Selectione um Carro</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Porsche">Porsche</option>
      </select>
    </>
  );
} 

// Export default the component
export default App;
