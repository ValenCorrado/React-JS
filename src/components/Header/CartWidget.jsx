import { Link } from "react-router-dom";
import React from "react";
import { useGlobalStates } from "../components/Context/Context";

const CartWidget = () => {
    const { calcularItems } = useGlobalStates(); // Obtiene el total de productos en el carrito

    return (
        <div className="cart-widget" style={{ position: "relative", display: "inline-block" }}>
            <Link to="/cart" className="cart-link">
                <img 
                    src="/images/cart.png" 
                    alt="Carrito" 
                    style={{ width: "40px" }} 
                />
                {calcularItems > 0 && (
                    <span 
                        className="cart-count" 
                        style={{
                            position: "absolute",
                            top: "-5px",
                            right: "-10px",
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "50%",
                            padding: "5px",
                            fontSize: "0.9em",
                            fontWeight: "bold"
                        }}
                    >
                        {calcularItems}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default CartWidget;