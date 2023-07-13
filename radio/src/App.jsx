/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [carro, setCarro] = useState('');

  function handleChangeCar({target}){
    setCarro(target.value); // mudar valor do carro com a funcao
  }

  return(
    <>
      <label htmlFor="">
        <input 
          type="radio"
          value="ferrari" 
          checked={carro === 'ferrari'} //checar quando o valor do checked for igual a ferrari
          onChange={handleChangeCar} // na mudanca executa a funcao handleChangeCar
        />
        Ferrari
      </label>
      <label htmlFor="">
        <input 
          type="radio"
          value="porsche" 
          checked={carro === 'porsche'} //checar quando o valor do checked for igual a ferrari
          onChange={handleChangeCar}
        />
        Porsche
      </label>
      {/* valor do estado abaixo */}
      {carro}
    </>
  )
}

// Export default the component
export default App;
