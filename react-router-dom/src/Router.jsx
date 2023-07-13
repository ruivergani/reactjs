import {Routes, Route} from 'react-router-dom'; // componentes que ajuda a criar rotas

// Import all pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Componente que vai trabalhar com as rotas
export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    );
}
export default Router;