import { createContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebaseConfig';

   
    export const CartContext = createContext()
    export const CartContextComponent = ({children}) => {
        const [cart, setCart] = useState([])
        const [products, setProducts] = useState([]);


        useEffect (() =>{
            async function getData(){
                const db = getFirestore();
                const collection = db.collection('productos')
                const response = await collection.get()
                console.log(response.docs.map(element => element.data()));
                setProducts(collection)
            }
            getData();
        },[])

        const addItem =(producto, cantidad) => {
    const index = cart.findIndex(item => item.id === producto.id) 
        if(index=== -1) setCart([...cart, {...producto, cantidad}])
        else {setCart(() => {
            cart[index].cantidad=cantidad
            return [...cart]
        })}
    }

    function clear(){
        setCart([])
    }

    function removeItem(id) {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
        
    }
      function subTotal(){
          
        const valor = cart.reduce((acumulador, item)=>{
            return (acumulador += (item.precio * item.cantidad))
          },0)
          return valor
        }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, subTotal, products}} >
            {children}
        </CartContext.Provider>
            )
}