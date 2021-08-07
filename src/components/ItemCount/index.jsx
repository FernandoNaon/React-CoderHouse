import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const ItemCount = ({ item }) => {

    const [valor, setValor] = useState(1)

    const { addItem }= useContext (CartContext)

    function sumar() {
        if (valor < item.stock) {
            setValor(parseInt(valor) + 1)
        }
    }

    function restar() {
        if (valor > 1) {
            setValor(parseInt(valor) - 1)
        }
    }

    return (
      <>
        <div>
            <button className="btn btn-outline-primary" onClick={restar}>-</button>
            <input  size="1" type="text" value={valor} readOnly />
            <button className="btn btn-outline-primary" onClick={sumar}>+</button><br/>
        </div>
            <button className="btn btn-primary" onClick={() => { addItem(item,valor) }}>
                Agregar al Carrito
            </button>
     </>
    )
}