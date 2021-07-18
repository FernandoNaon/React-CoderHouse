import { ItemDetail } from '../ItemDetail';
import { getData } from '../../Utils/const'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    const waitForData = async () => {
      let items = await getData();
      let item = items.find(item => item.id === id)
      setItem(item)
    }
    setTimeout(() => {
      waitForData()

    }, 1000)
  }, [id])

  return (
    <div>
      {
        item && <ItemDetail item={item} />
      }
    </div>
  )
}
