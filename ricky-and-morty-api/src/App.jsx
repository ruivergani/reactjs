import { Application } from "./components/Application"; // aplicacao global
import GlobalStyle from "./styles/global"; // estilo global

function App() {
  return (
    <>
      {/* Global CSS Style */}
      <GlobalStyle/>
      {/* Application Component */}
      <Application/> 
    </>
  );
}
export default App;