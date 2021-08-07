import { createContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebaseConfig';

   
    export const CartContext = createContext();

    export const CartContextComponent = ({children}) => {
        const [cart, setCart] = useState([])
        const [products, setProducts] = useState([]);


        useEffect(() => {
            async function getData() {
                const db = getFirestore();
                const collection = db.collection('items');
                const response = await collection.get();
                let items = response.docs.map((doc) => { return { ...doc.data(), id: doc.id } }); 
                setProducts(items);
              }
              getData();
            }, [])

        const addItem =(item, quantity) => {
         const index = cart.findIndex(obj => obj.item.id === item.id) 
        if(index=== -1) {
            setCart([...cart, { item, quantity }])
        }
        else {
            setCart(() => {
            cart[index].quantity=quantity
            return [...cart]
        })
      }
    }

   const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter((obj) => obj.item.id !== id);
        setCart(filteredCart);
        
    }
    
    const getTotal = () => {
        const valor = cart.reduce((acumulador, obj) => {
            return (acumulador += (Number(obj.item.price) * Number(obj.quantity)))
        }, 0)
        return valor
    }
    
    const getTotalQty = () => {
        let qty = 0;
        cart.forEach(obj => {
            let quantity = obj.quantity;
            qty += quantity;
        });
        return qty;
    }

    const createOrder = (name, phone, email) => {
      const order = { 
        buyer: {name, phone, email },
        item: cart, 
        total: getTotal(), 
      }
      const db = getFirestore();
      db.collection('orders').add(order).then(response => {
        console.log(response)
      })
  

    }
        

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, getTotal, products, getTotalQty, createOrder }} >
            {children}
        </CartContext.Provider>
            )
}

