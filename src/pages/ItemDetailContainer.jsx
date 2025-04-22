import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID desde la URL
import { fetchData, fetchProductById } from '../services/fetchData';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null); // Estado para el producto
    const { id } = useParams(); // Obtiene el ID del producto desde los parámetros de la URL
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const cargarProducto = async () => {
            try {
                const producto = await fetchProductById(id); // Llama a la función con el ID
                setDetail(producto); // Guarda el producto en el estado
            } catch (err) {
                setError(err.message); // Guarda el mensaje de error
            }
        };

        cargarProducto();
    }, [id]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>; // Mensaje de error si ocurre algo
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            {detail ? (
                <>
                    <h2>{detail.nombre}</h2>
                    <img
                        src={detail.imagen}
                        alt={detail.nombre}
                        style={{
                            width: '300px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            marginBottom: '20px'
                        }}
                    />
                    <p>{detail.descripcion}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Precio: {detail.precio}</p>
                </>
            ) : (
                <p>Cargando producto...</p> // Mensaje mientras se carga el producto
            )}
        </div>
    );
};

export default ItemDetailContainer;