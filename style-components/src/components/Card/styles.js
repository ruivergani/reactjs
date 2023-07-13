import styled from 'styled-components'; // importar a lib do style-components

// Criar os componentes de estilo
export const StylesCardDiv = styled.div` // Div que engloba todos os componentes filhos
    border: 1px solid black;
    p{
        font-size: 20px;
        // Criar props = propriedade do componente
        color: ${({titleChangeColor}) => (titleChangeColor) ? 'red' : 'blue'}; // Se existir essa propriedade (verdadeiro) sera vermelho, senao azul. (IF TERNARIO)
    }
`;

// Child Style Component
export const StylesCard = styled.h2` // export (para ter acesso a outros lugares) - StylesCard (nome que voce quiser) - styled.componente para estilizar
    font-size: 32px;
    color: purple;
    // pode ser feito igual SASS (mesmos conceitos)
`;

