import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, db } from '../../context/CartContext';


export const CartComponent = () =>
{

    const { cart, clear, removeItem, subTotal } = useContext(CartContext);

    return (
        cart.length ?
            <div>
                {cart.map(producto =>
                {
                    return (
                        <div >
                            <h2>{producto.title}</h2>
                            <p>{producto.price * producto.cantidad}</p>
                            <p>{producto.cantidad}</p>
                            <img src={producto.pictureUrl} alt="productoNombre" />
                            <button onClick={() => removeItem(producto.id)}>X</button>
                        </div>
                    )
                })}

         

                <div>{subTotal()}</div>
                <button onClick={clear}>Vaciar Carrito</button>
            </div>
            :
            <div><Link to="/">Seguir comprando </Link></div>
    )
}