import { ItemList } from '../ItemList';
import { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



export const ItemListContainer = () => {

  const {products} = useContext(CartContext)
  const { categoryId } = useParams()
  const [filtro, setFiltro] = useState([]);

  useEffect(()=>{
    if(categoryId && products){
        const itemsFound = products.docs.filter(item=>item.data().categoria === categoryId)
        setFiltro(itemsFound)
    } else if (products){
        setFiltro(products.docs)
    }
},[categoryId, products])


    
  return (
      <div>
     {
     !!products
    ? <ItemList items={filtro} />
    : 'Loading...'
}
      </div>
  )
}