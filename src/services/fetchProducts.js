import { products } from '../data/productos'; // Importa los datos

// Función para obtener todos los productos
export const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(products); // Devuelve todos los productos
            } catch (error) {
                reject(new Error('Error al obtener los productos'));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
};

// Función para obtener un producto por ID
export const fetchProductById = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const product = products.find((prod) => prod.id === parseInt(id)); // Encuentra el producto por ID
                if (product) {
                    resolve(product); // Devuelve el producto si se encuentra
                } else {
                    reject(new Error(`Producto con ID ${id} no encontrado`)); // Producto no encontrado
                }
            } catch (error) {
                reject(new Error('Error al buscar el producto por ID'));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
};