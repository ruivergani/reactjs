import React from 'react' // import react (all functionalities)
import ReactDOM from 'react-dom/client' // import react DOM (more functionalities)
import App from './App.jsx'

// Create ROOT DIV and all COMPONENTS BELOW
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
