import { ItemDetail } from '../ItemDetail';
import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItem] = useState()
  const { products } = useContext(CartContext)
  console.log(products, item)

  useEffect(() => {
     if (products){
      const itemFound = products.docs.find(producto=>producto.data().id === id)
      setItem(itemFound)
   }
  },[id, products])
  return (
    <div>
      {
        item && <ItemDetail products={item.data} />
      }
    </div>
  )
}
