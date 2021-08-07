import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import swal from 'sweetalert' 
import './style.css'


export function CheckOut(){

        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [name, setName] = useState('');
   
        const { cart, clear, getTotal, removeItem, createOrder } = useContext(CartContext);
           
      
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
            <h4>TOTAL: {getTotal()}</h4>
            <form className="form">
                <input className="inputForm" type='phone' onInput={(e) => { setName(e.target.value)}} placeholder='Lionel Messi'/>
                <input className="inputForm" type='email' onInput={(e) => { setEmail(e.target.value)}} placeholder='nombre@ejemplo.com'/>
                <input className="inputForm" type='tel' onInput={(e) => { setPhone(e.target.value)}} placeholder='5555555'/> 
                <span className="btnCh">
              <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
              <button className="btn btn-primary" onClick={() => {
                  createOrder(name,phone, email);
                  swal({
                    title: "Compra realizada con exito!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                
              }}>Comprar</button>  
              </span>
            </form>
            </div>
            
            : <div>
              <h1>El Carrito esta vacio</h1>
              <Link to="/">Seguir comprando </Link>
              </div>
         
        
        )
      }
    
