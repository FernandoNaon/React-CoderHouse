import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
 


export function CheckOut(){
        
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [name, setName] = useState('');
   
        const { cart, clear, getTotal } = useContext(CartContext);

        return (
          !!cart.length
            ? <div className="container" >
              {
                cart.map(
                  obj => {
                    return (
                      <div key={obj.item.id}>
                        <h2>{obj.item.title}</h2>
                        <p>Cantidad: {obj.quantity}</p>
                        <p>Precio: ${obj.item.price}</p>
                        <p>Subtotal:${obj.item.price * obj.quantity}</p>
                        <img style={{ width: '5rem' }} src={obj.item.pictureUrl} alt={obj.item.title} />
                      </div>
                    )
                  }
                )
              }
            <div>TOTAL: {getTotal()}</div>
            <div>
                <input type='email' onInput={(e) => { setEmail(e.target.value)}} placeholder='email'/>
                <input type='tel' onInput={(e) => { setPhone(e.target.value)}} placeholder='phone'/> 
                <input type='phone' onInput={(e) => { setName(e.target.value)}} placeholder='name'/>
            </div>
              <button  className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
              <button className="btn btn-primary" onClick={() => {
                  CartContext.createOrder(name,phone, email)
              }}>Comprar</button>  
            </div>
            
            : <div><Link to="/">Seguir comprando </Link></div>
         
        
        )
      }
    
