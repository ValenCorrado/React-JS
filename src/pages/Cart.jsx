import React from 'react'
import { useGlobalStates } from '../components/Context/Context';


const Cart = () => {
    const { cart } = useGlobalStates(); // Accede al contexto global para obtener el carrito
    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0); // Calcula el total del carrito



    return (
        <div>
            {cart.map((pord)=> (
                <div key={pord.id}>
                    <h2>{pord.nombre}</h2>
                    <img src={pord.imagen} alt={pord.nombre} />
                    <p>Precio: ${pord.precio}</p>
                    <p>Cantidad: {pord.cantidad}</p>
                </div>
            ))}
            <h2>Total: ${total}</h2>
            <button onClick={() => alert('Compra realizada!')}>Comprar</button> 
        </div>
    )
}

export default Cart