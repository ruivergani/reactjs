/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ContainerCard } from "./styles";

// create props for the card 
export function CardCharacter({image, name, genre, specie}){
    return(
        <ContainerCard>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <ul>
                    <li>Gender: {genre}</li>
                    <li>Specie: {specie}</li>
                </ul>
            </div>
        </ContainerCard>
    )
}