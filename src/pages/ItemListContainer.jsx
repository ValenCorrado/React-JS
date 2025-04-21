import React, { useState, useEffect } from 'react';
import fetchProducts from '../services/fetchProducts';
import { products } from '../data/productos.js';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const productos = await fetchProducts(); // Llama a la función para obtener los productos
                setProducts(productos); // Guarda los productos en el estado
            } catch (error) {
                setError('Error al cargar los productos');
            }
        };

        cargarProductos();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Catálogo de Productos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {products.map((producto) => (
                    <div key={producto.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: {producto.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;