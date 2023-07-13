/* eslint-disable react/prop-types */

// Import o CSS Modules
import styles from './Car.module.css';  // OBJECT (named styles)

// Componente Car
export default function Car({name, description, value}){
    console.log(styles);
    return(
        <>
            <h1 className={styles.nameCar}>{name}</h1> {/* Chama o OBJETO e a classe */}
            <p className={styles.description}>{description}</p>
            <h2>{value}</h2>
            <button>Comprar</button>
        </>
    );
}
