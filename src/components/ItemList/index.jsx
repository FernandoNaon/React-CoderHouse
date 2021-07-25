import React from 'react'
import { Item } from '../Item'

export const ItemList = ({ products }) => {

  return (
    <div className="center-block">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          products.map(
            (item) => {
              return <Item key={item.id} item={item} />
            }
          )
        }
      </div>
    </div>
  )
}
