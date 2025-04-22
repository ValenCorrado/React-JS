import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/fetchProducts'; // Importación con nombre

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const productos = await fetchProducts(); // Llama a la función de fetch
                setProducts(productos); // Guarda los productos en el estado
            } catch (err) {
                setError(err.message); // Manejo de errores
            }
        };

        cargarProductos();
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <strong>{product.nombre}</strong> - {product.precio}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemListContainer;