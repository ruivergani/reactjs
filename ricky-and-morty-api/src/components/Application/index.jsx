import { CardCharacter } from "../CardCharacter";
import { ContainerApp, ContentCharacters, HeaderApp } from "./styles";

// Componente que engloba toda applicacao.
export function Application(){
    return(
        <ContainerApp> 
            <HeaderApp>
                <h1>Ricky And Morty</h1>
                <span>Number of Characters: 826</span>
            </HeaderApp>
            <ContentCharacters>
                <div>
                    <CardCharacter
                        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        name="Rick Sanchez"
                        genre="Male"
                        specie="Human"
                    />
                </div>
                <button>Load More</button>
            </ContentCharacters>
        </ContainerApp>
    )
}