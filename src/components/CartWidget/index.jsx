import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { getTotalQty, cart } = useContext(CartContext)
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setTotalQty(getTotalQty())
  }, [cart])

  return (
    <Link to="/checkout">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{totalQty}</span>
    </Link>
  )
}