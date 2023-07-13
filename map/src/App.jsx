import Cars from "./Cars";

/* eslint-disable no-unused-vars */
export default function App() {
  const carros = [
    'Carro',
    'Carro',
    'Carro',
    'Carro',
    'Carro',
    'Carro',
    'Carro',
  ]
  return (
    <>
      <div>
          {/* Abre as chaves sempre que vai inserir codigo JavaScript */}
          {
            // Deixa o codigo limpo e profissional
            carros.map((carro, index) => (
              <Cars key={index} nameCar={carro} /> // Exemplo usando componente
            ))
          }
      </div>
    </>
  );
}