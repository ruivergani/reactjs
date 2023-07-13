import { Link } from 'react-router-dom'; // Usa Link =  para nao precisar renderizar todos os componentes quando atualizar a rota

export function Navigation(){
    // Link : rota atualiza apenas o componente e nao a pagina
    return(
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
}