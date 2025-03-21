import React from 'react';

const Container = ({ greeting }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>{greeting}</h1>
            <p>Aquí irá el catálogo de productos</p>
            {/* Aca se agrega logica para manipular los productos */}
        </div>
    );
};

export default Container;
