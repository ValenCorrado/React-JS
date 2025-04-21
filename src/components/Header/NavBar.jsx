import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f8f8', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Santilly</div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', padding: '0', margin: '0' }}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Catálogo</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <div style={{ fontSize: '1.2rem' }}>🛒 Carrito</div>
        </nav>
    );
};

export default Navbar;
