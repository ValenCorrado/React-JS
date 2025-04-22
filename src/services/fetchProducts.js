import { products } from '../data/productos'; // Importa los datos locales

// Función para obtener todos los productos
const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(products); // Devuelve todos los productos
            } catch (error) {
                console.error('Error al cargar los productos:', error);
                reject(new Error('Error al obtener los productos'));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
};

// Función para obtener un producto por ID
const fetchProductById = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const product = products.find((prod) => prod.id === parseInt(id)); // Encuentra el producto por ID
                if (product) {
                    resolve(product); // Devuelve el producto si se encuentra
                } else {
                    reject(new Error(`Producto con ID ${id} no encontrado`)); // Error si no se encuentra
                }
            } catch (error) {
                console.error('Error al buscar el producto:', error);
                reject(new Error('Error al buscar el producto por ID'));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
};

export { fetchProducts, fetchProductById }; // Exporta ambas funciones