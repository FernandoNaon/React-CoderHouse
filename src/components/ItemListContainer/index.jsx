import { ItemList } from '../ItemList';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './style.css';


export const ItemListContainer = () => {

  const { products } = useContext(CartContext)
  const { categoryId } = useParams()
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    if (categoryId && products) {
      const itemsFound = products.filter(item => {return item.category === categoryId})
      setFiltro(itemsFound)
    } else if (products) {
      setFiltro(products)
    }
  }, [categoryId, products])
  
  return (
    <div className="bg">
      {
        !!products
          ? <ItemList items={filtro} />
          : "Loading..."
      }
    </div>
  )
}
