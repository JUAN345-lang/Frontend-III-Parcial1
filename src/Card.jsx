//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import styles from './styles/card.css'

const Card = (props) => {
  return (
    <div className="container">
      <h2>Esto es un componente</h2>
      <p>{props.data.favAnimal}</p>
      <p>{props.data.name}</p>
      <p>{props.data.typePet}</p> 
      <p>{ Boolean(props.data.fanDogs) ? 'Si le gustan los perros' : 'No le gustan los perros'}</p>
    </div>
  );
}

export default Card;
