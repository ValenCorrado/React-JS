import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/firebaseServices"; // Importamos la función de FirebaseServices

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const cargarProductos = async () => {
            try {
                const allProducts = await getProducts();
                const filteredProducts = category
                    ? allProducts.filter(product => product.category === category)
                    : allProducts;

                setProducts(filteredProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, [category]); // Se ejecuta cuando cambia la categoría

    return (
        <div>
            <h2>{category ? `Categoría: ${category}` : "Todos los productos"}</h2>
            {loading ? (
                <p style={{ fontSize: "1.2em", fontWeight: "bold", color: "#555" }}>🔄 Cargando productos...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : products.length === 0 ? (
                <p style={{ fontSize: "1.2em", fontWeight: "bold", color: "#555" }}>
                    No hay productos en esta categoría.
                </p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <strong>{product.nombre}</strong> - ${product.precio}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemListContainer;