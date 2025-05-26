import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#f8f8f8", alignItems: "center" }}>
            {/* Logo */}
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Santilly</div>

            {/* Menú principal */}
            <ul style={{ display: "flex", listStyle: "none", gap: "15px", padding: "0", margin: "0" }}>
                <li><Link to="/">Inicio</Link></li>
                <li className="dropdown">
                    <Link to="/products">Catálogo ▼</Link>
                    <div className="dropdown-content">
                        <Link to="/products/tortas">Tortas</Link>
                        <Link to="/products/chocolates">Chocolates</Link>
                        <Link to="/products/cookies">Cookies</Link>
                    </div>
                </li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>

            {/* Carrito */}
            <div style={{ fontSize: "1.2rem" }}>
                <Link to="/cart">🛒 Carrito</Link>
            </div>
        </nav>
    );
};

export default Navbar;