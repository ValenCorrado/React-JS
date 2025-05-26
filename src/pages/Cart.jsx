import React from "react";
import { useGlobalStates } from "../components/Context/Context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const { cart, setCart, total } = useGlobalStates();

    const removeItem = (id) => {
        Swal.fire({
            title: "¿Eliminar producto?",
            text: "Este producto será eliminado del carrito.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                setCart(cart.filter((item) => item.id !== id));
                Swal.fire("Producto eliminado", "", "success");
            }
        });
    };

    const clearCart = () => {
        Swal.fire({
            title: "¿Vaciar carrito?",
            text: "Todos los productos serán eliminados.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, vaciar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                Swal.fire("Carrito vacío", "Todos los productos han sido eliminados", "success");
            }
        });
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>🛒 Carrito de compras</h2>

            {cart.length === 0 ? (
                <p style={{ fontSize: "1.2em", fontWeight: "bold", color: "#555" }}>
                    El carrito está vacío. <Link to="/products">Ver productos</Link>
                </p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <strong>{item.nombre}</strong> - {item.cantidad} unidades - ${item.precio * item.cantidad}
                                <button onClick={() => removeItem(item.id)}>❌ Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>Total: ${total}</p>

                    <button onClick={clearCart} style={{ marginRight: "10px" }}>Vaciar carrito 🗑️</button>
                    <Link to="/checkout">
                        <button>Ir al checkout ✅</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;