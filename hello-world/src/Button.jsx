/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import UserContext from "./context/UserContext";

export default function Button(){
    const {handleCount} = useContext(UserContext);
    return(
        <button onClick={handleCount}>Contar</button>
    );
}