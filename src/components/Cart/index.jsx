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
                <div className="card d-flex flex-row justify-content-between" key={obj.item.id}>
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
        <button onClick={clear}>Vaciar Carrito</button>
        <div><Link to="/checkout">Finalizar Compra </Link></div>

      </div>
      : <div><Link to="/">Seguir comprando </Link></div>
  )
}