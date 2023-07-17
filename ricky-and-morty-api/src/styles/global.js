import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
        color: #FFFFFF;
    }
    body{
        background-color: #040011;
    }
    html{
        font-size: 62.5%;
    }
    img{
        max-width: 100%;
        display: block;
    }

`
export default GlobalStyle; // compartilhar na aplicacao inteira