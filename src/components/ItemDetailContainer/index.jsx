import { ItemDetail } from '../ItemDetail';
import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {

  const { itemId } = useParams()
  const [item, setItem] = useState()
  const { products } = useContext(CartContext)
  
  useEffect(() => {
     if (products) {
      const itemFound = products.find(producto => producto.id === itemId)
      setItem(itemFound)
   }
  },[itemId, products])

  return (
    <div>
      {
        item && <ItemDetail item={item} />
      }
    </div>
  )
}
