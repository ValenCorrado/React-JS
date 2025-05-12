import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener la categoría desde la URL
import { fetchProducts } from '../services/fetchProducts'; // Importación con nombre

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category } = useParams(); // Obtiene la categoría desde la URL

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                setLoading(true);
                const productos = await fetchProducts();
                setProducts(productos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, []);

    // Filtrar productos por categoría si se pasa un parámetro en la URL
    const filteredProducts = category 
        ? products.filter(product => product.category === category) 
        : products;

    return (
        <div>
            <h2>Lista de Productos</h2>
            {loading ? (
                <p>Cargando productos...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul>
                    {filteredProducts.map((product) => (
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