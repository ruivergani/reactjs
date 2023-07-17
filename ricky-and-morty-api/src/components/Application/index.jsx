/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { CardCharacter } from "../CardCharacter";
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./styles";
import IconLoader from "../../assets/loader.gif";
import axios from 'axios';


// Componente que engloba toda applicacao.
export function Application(){

    // UseState
    const [characters, setCharacters] = useState([]) // array de characters API
    const [page, setPage] = useState(1) // control page number
    const [countPages, setCountPages] = useState('') // control quantity of pages (hide the button)
    const [qtdCharacters, setQtdCharacters] = useState('') // control quantity of characters 
    const [isLoader, setIsLoader] = useState(true)

    // Executa apenas 1 vez na aplicacao
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character?page=${page}`) // busquei na API
      .then(response => {
        //console.log(response.data) // tudo que vem de dados da API
        // array abaixo = [1,2,3,4] (mantem os dados e tras os proximos) => [1,2,3,4,5,6,7]
        const array = [... characters, ... response.data.results] // ... esse operador tras todas as informacoes que ja estao armazenadas (20 primeiros itens)
        setCharacters(array) // salvar dados em characters
        setCountPages(response.data.info.pages) // quantity of pages
        setQtdCharacters(response.data.info.count) // quantity of characters
        setIsLoader(false) // set isLoader to false once everything has loaded
      })
    }, [page]); // passa o page para executar o useEffect novamente no onClick
    
    // Component
    return(
        <>
            {
                // se isLoader for true carrega - senao fals 
                isLoader && (
                    <Loader>
                        <img src={IconLoader}></img>
                    </Loader>
                )
            }
            <ContainerApp> 
                <HeaderApp>
                    <h1>Ricky And Morty</h1>
                    <span>Number of Characters: {qtdCharacters}</span>
                </HeaderApp>
                <ContentCharacters>
                    <div>
                        {
                            // Se existe o characters (loading phase) => destrutura image, name, species and gender para acessar mais facil (ao inves de card.image)
                            characters && characters.map(({image, name, species, gender}) => {
                                return (
                                    <CardCharacter
                                        image={image}
                                        name={name}
                                        genre={gender}
                                        specie={species}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        (!(page === countPages)) && <button onClick={() => {setPage(page + 1)}}>Load More</button> // if ternario - enquanto nao for verdadeiro mostra o button
                    }
                </ContentCharacters>
            </ContainerApp>
        </>
    )
}