import { ItemCount } from '../ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.css';

export const ItemDetail = ({ item }) => {

  const [itemAgregado, setItemAgregado] = useState(null);

  const onAdd = (cantidad) => {
    setItemAgregado(cantidad)
  }

  return (
    <div >
      <h2 >{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} />
      <p>${item.price}</p>
      <p>stock: {item.stock}</p>

      {
        itemAgregado
          ? <div><Link to='/cart'><button>Ir al Carrito</button></Link></div>
          :
           <ItemCount onAdd={onAdd} stock={item.stock} />
      }
      <h5>DESCRIPCION</h5>
      
      <p className="description">{item.description}</p>
    </div>
  )
}

