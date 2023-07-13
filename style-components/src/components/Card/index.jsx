import { useState } from 'react';
import {StylesCard, StylesCardDiv} from './styles.js'; // importar arquivo de styles.js

export default function Card(){
    // Cria um estado para colocar a propriedade to false
    const [isChangeColor, setIsChangeColor] = useState(false);
    return(
        <>
            <StylesCardDiv titleChangeColor={isChangeColor}>
                <StylesCard>Title do card</StylesCard> {/* Substituir o style component pelo elemento */}
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente mollitia quo dolorum ut ratione officia vero autem fugiat? Expedita corrupti quo unde eos facilis ut iusto dolores temporibus dignissimos atque.</p>
                {/* Ao clicar no botao muda a propriedade para true */}
                <button onClick={() => setIsChangeColor(true)}>Click Here</button>
                {/* Se estiver verdadeiro - muda para false - se estiver false muda para verdadeiro */}
                <button onClick={() => setIsChangeColor(!isChangeColor)}>Click Here</button>
            </StylesCardDiv>
        </>
    )
}