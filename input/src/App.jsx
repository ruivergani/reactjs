/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./Input";

function App() {
  // Criar Estados
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  
  // Create Function to handle the Submit
  function handleSubmit(event){
    event.preventDefault();
    // console.log(`Nome : ${name}`);
    // console.log(`E-mail : ${email}`);
    if(name === ''){
      setErrorName('Favor preencher o nome');
    }
    if(email === ''){
      setErrorEmail('Favor preencher o nome');
    }
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name} // Nome do estado
        onChange={(event) => { 
          setName(event.target.value) // Valor do campo digitado - sera passado no setName (funcao que atualiza o estado name)
          setErrorName(''); // sumir a mensagem quando digitar
        }}
        onBlur={(event) => { // quando sair do campo de mensagem
          if(event.target.value === ''){
            setErrorName('Favor preencher o nome');
          }
        }}
      />
      {errorName}
      <input 
        type="email" 
        value={email}
        onChange={(event) => { 
          setEmail(event.target.value); 
          setErrorEmail('');
        }}
        onBlur={(event) => { // quando sair do campo de mensagem
          if(event.target.value === ''){
            setErrorEmail('Favor preencher o nome');
          }
        }}
      />
      {errorEmail}
      <button type="submit">Submit</button>
      
      {/* Or you can import the INPUT Component */}
      <Input
        typeInput="text"
        valueInput={name}
        setInputValue={setName}
      />
     
    </form>
    {/* Message Output */}
    {message}
    </>
  );
}

// Export default the component
export default App;
