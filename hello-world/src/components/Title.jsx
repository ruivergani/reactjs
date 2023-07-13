/* eslint-disable react/prop-types */
export function Title({titulo, subtitulo}){
    return(
        <>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}

// Specify the default props value
Title.defaultProps = {
    titulo: "Valor default",
    subtitulo: "Sub default"
}

