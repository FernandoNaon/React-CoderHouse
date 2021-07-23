import { ItemList } from '../ItemList';
import { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



export const ItemListContainer = () => {

  const {productos} = useContext(CartContext)
  const { categoryId } = useParams()
  const [filtro, setFiltro] = useState([]);

  useEffect(()=>{
    if(categoryId && productos){
        const itemsFound = productos.docs.filter(item=>item.data().categoria === categoryId)
        setFiltro(itemsFound)
    } else if (productos){
        setFiltro(productos.docs)
    }
},[categoryId, productos])
    
  return (
      <div>
        <ItemList product={filtro}/>
      </div>
  )
}