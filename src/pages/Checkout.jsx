import React, { useState } from "react";
import { useGlobalStates } from "../components/Context/Context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";

const Checkout = () => {
    const { cart, setCart, total } = useGlobalStates();
    const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Manejo del formulario
    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    // Validar email con expresión regular
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Confirmar compra y guardar orden en Firebase
    const handleCheckout = async () => {
        if (!buyer.name || !buyer.email || !buyer.phone) {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor, rellena todos los datos antes de finalizar la compra.",
            });
            return;
        }
        if (!validateEmail(buyer.email)) {
            Swal.fire({
                icon: "error",
                title: "Email inválido",
                text: "Ingresa un email válido.",
            });
            return;
        }

        setLoading(true);
        const order = { 
            buyer, 
            items: cart, 
            total, 
            date: new Date() 
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            setCart([]);
            
            Swal.fire({
                icon: "success",
                title: "Compra realizada ✅",
                text: `Tu orden ha sido generada con el ID: ${docRef.id}`,
                confirmButtonText: "OK",
            });

            setTimeout(() => navigate("/thanks"), 2000);
        } catch (error) {
            console.error("Error al procesar la orden:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al procesar la compra. Intenta nuevamente.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Finalizar Compra</h2>

            {orderId ? (
                <p style={{ fontSize: "1.2em", color: "green" }}>
                    ✅ ¡Gracias por tu compra! ID de tu orden: <strong>{orderId}</strong>
                </p>
            ) : (
                <>
                    {loading && <p style={{ fontWeight: "bold", color: "#555" }}>Procesando compra...</p>}

                    <h3>Productos en el carrito:</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.nombre} - Cantidad: {item.cantidad} - Precio: ${item.precio * item.cantidad}
                            </li>
                        ))}
                    </ul>
                    <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>Total: ${total}</p>

                    <h3>Rellena tus datos:</h3>
                    <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} required />

                    <button onClick={handleCheckout} style={{ marginTop: "10px" }}>
                        Confirmar Compra ✅
                    </button>
                </>
            )}
        </div>
    );
};

export default Checkout;