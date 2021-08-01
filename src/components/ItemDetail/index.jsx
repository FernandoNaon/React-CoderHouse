import { ItemCount } from '../ItemCount'
import { Link } from 'react-router-dom'
import './style.css';

export const ItemDetail = ({ item }) => {

  return (
    <div className="itemDetail">
      <h2 >{item.title}</h2>
      <img className="imgDetail" src={item.pictureUrl} alt={item.title} />
      <p>${item.price}</p>
      <p>stock: {item.stock}</p>
      <ItemCount item={item} /><br/>
      <Link to='/cart'><button>IR AL CARRITO</button></Link>      
      <h6>DESCRIPCION</h6>     
      <p className="description">{item.description}</p>
    </div>
  )
}

