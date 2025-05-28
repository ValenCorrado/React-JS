import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalStates } from "../components/Context/Context";
import Swal from "sweetalert2";
import "../components/css/ItemListContainer.css"; 

const ItemListContainer = ({ greeting }) => {
    const { category } = useParams();
    const { products, loading, addToCart } = useGlobalStates();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (category) {
            setFilteredProducts(products.filter(product => product.category.trim().toLowerCase() === category.trim().toLowerCase()));
        } else {
            setFilteredProducts(products);
        }
    }, [category, products]);

    if (loading) {
        return <p className="loading">🔄 Cargando productos...</p>;
    }

    return (
        <div className="container">
            <h1 className="title">{greeting}</h1>
            <h2 className="category">{category ? `Categoría: ${category}` : "Todos los productos"}</h2>
            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(prod => (
                        <div key={prod.id} className="product-card">
                            <img src={prod.image} alt={prod.title} className="product-image" />
                            <h2 className="product-title">{prod.title}</h2>
                            <p className="product-description">{prod.description}</p>
                            <p className="product-price">${prod.price}</p>
                            <button 
                                className="add-to-cart-button"
                                onClick={() => {
                                    addToCart(prod);
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: `"${prod.title}" agregado al carrito 🛒`,
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                }}
                            >
                                Agregar al carrito 🛒
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;