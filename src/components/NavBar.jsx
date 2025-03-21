import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f8f8', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>MiEcommerce</div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', padding: '0', margin: '0' }}>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#catalogo">Catálogo</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <div style={{ fontSize: '1.2rem' }}>🛒 Carrito</div>
        </nav>
    );
};

export default Navbar;
