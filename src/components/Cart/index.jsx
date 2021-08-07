import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartComponent = () => {

  const { cart, clear, removeItem, getTotal } = useContext(CartContext);

  return (
    !!cart.length
      ? <div className="container" >
        {
          cart.map(
            obj => {
              return (
                <div className="card d-flex flex-row justify-content-between mt-3" key={obj.item.id}>
                  <h2>{obj.item.title}</h2>
                  <p>Cantidad: {obj.quantity}</p>
                  <p>Precio: {obj.item.price}</p>
                  <p>Subtotal: {obj.item.price * obj.quantity}</p>
                  <img style={{ width: '5rem' }} src={obj.item.pictureUrl} alt={obj.item.title} />
                  <button onClick={() => removeItem(obj.item.id)}>X</button>
                </div>
              )
            }
          )
        }
      <div>TOTAL: {getTotal()}</div>
        <button  className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
        <Link to="/checkout"><button className="btn btn-primary">Comprar</button></Link>  
      </div>
      
      : <div><Link to="/">Seguir comprando </Link></div>
   
  
  )
}