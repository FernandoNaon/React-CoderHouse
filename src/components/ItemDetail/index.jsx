import { ItemCount } from '../ItemCount'
import { Link } from 'react-router-dom'
import './style.css';

export const ItemDetail = ({ item }) => {

  return (
    <div className="itemDetail">
      <h2>{item.title}</h2>
      <img className="imgDetail" src={item.pictureUrl} alt={item.title} />
      <p>${item.price}</p>
      <p>stock: {item.stock}</p>
      <ItemCount item={item} /><br/>
      <div className="d-grid gap-2 col-6 mx-auto p-4">
      <Link to='/cart'><button className="btn btn-secondary p-4'">IR AL CARRITO</button></Link>  
      </div>    
      <h6>DESCRIPCION</h6>     
      <p className="description">{item.description}</p>
    </div>

  )
}

