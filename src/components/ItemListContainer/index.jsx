import { ItemList } from '../ItemList';
import { useEffect, useState } from 'react';
import { getData } from '../../Utils/const';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const waitForData = async () => {
      let data = await getData();
      if (id) {
        data = data.filter(item => item.category === id)
      }
      setProducts(data)
    };

    waitForData();
  }, [id]);


  return (
    <div>
      {
        !!products.length
          ? <ItemList products={products} />
          : 'Loading...'
      }
    </div>
  )
}