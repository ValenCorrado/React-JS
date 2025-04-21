const fetchProducts = async () => {
    try {
        const response = await fetch('https://api.mi-pasteleria.com/productos');
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default fetchProducts;