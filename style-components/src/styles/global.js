import { createGlobalStyle } from 'styled-components'; // nativo do style-componente = funcao para renderizar global

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: 0;
    }
    .container{
        max-width: 1246px;
    }
`;
export default GlobalStyle;