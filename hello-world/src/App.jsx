import { useState } from "react";
import User from "./User";
import UserContext from "./context/UserContext";
import Button from "./Button";

// Component function
function App() {
  // Criar estado
  const [count, setCount] = useState(0);

  // Criar funcao
  function handleCount(){
    setCount(count + 1)
  }
  return (
    // Todos os components que tiverem envolvidos no UserContext vai ter acesso aos metodos que passar
    <UserContext.Provider value={{count,handleCount}}> 
      <User/>
      <Button/>
    </UserContext.Provider>
    // Criou o contexto e os valores que quer compartilhar dentro do componente
  );
} 

// Export the component
export default App;
