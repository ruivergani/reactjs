/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [termos, setTermos] = useState(false);

  function handleChange({target}){
    setTermos(target.checked); // se tiver marcado ele desmarca - se tiver desmarcado ele marca
    // nao da para colocar o true porque 
  }
  return(
    <>
      <label htmlFor="">
        <input 
          type="checkbox"
          value='Termos'
          checked={termos}
          onChange={handleChange}
        />
        Aceitar termos de privacidade
      </label>
      
      {
        // Se termos for verdadeiro -> display o <p>
        termos && <p>Ele aceitou os termos</p>
      }
    </>
  )
}

// Export default the component
export default App;
