import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter";
import { useGlobalStates } from "../components/Context/Context";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { cart, setCart, getProductById } = useGlobalStates();
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);
    const [counter, setCounter] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarProducto = async () => {
            try {
                setLoading(true);
                const producto = await getProductById(id);

                if (producto) {
                    setDetail(producto);
                } else {
                    setError("Producto no encontrado");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarProducto();
    }, [id, getProductById]);

    const addCart = () => {
        if (detail) {
            const nuevoProducto = { ...detail, cantidad: counter };

            setCart((prevCart) => {
                const existe = prevCart.find((item) => item.id === nuevoProducto.id);
                return existe
                    ? prevCart.map((item) =>
                        item.id === nuevoProducto.id
                            ? { ...item, cantidad: item.cantidad + nuevoProducto.cantidad }
                            : item
                    )
                    : [...prevCart, nuevoProducto];
            });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `"${detail.title}" agregado al carrito 🛒`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {loading ? (
                <p style={{ fontSize: "1.2em", fontWeight: "bold", color: "#555" }}>🔄 Cargando producto...</p>
            ) : detail ? (
                <>
                    <h2>{detail.title}</h2>
                    <img
                        src={detail.image}
                        alt={detail.title}
                        style={{
                            width: "300px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            marginBottom: "20px",
                        }}
                    />
                    <p>{detail.description}</p>
                    <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>Precio: ${detail.price}</p>
                    <Counter limit={detail.limit} counter={counter} setCounter={setCounter} />
                    <button onClick={addCart}>Agregar al carrito 🛒</button>
                </>
            ) : (
                <p style={{ fontSize: "1.2em", fontWeight: "bold", color: "#555" }}>Producto no encontrado</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;