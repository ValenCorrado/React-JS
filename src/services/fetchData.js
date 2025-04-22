import { products } from '../data/productos'; // Importa los datos

// Función para obtener todos los productos
export function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(products); // Simula una respuesta exitosa
            } catch (error) {
                reject(new Error('Error al obtener los productos')); // Simula un error
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Función para obtener un producto por ID
export function fetchProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const product = products.find((prod) => prod.id === parseInt(id)); // Busca el producto por ID
                if (product) {
                    resolve(product); // Simula una respuesta exitosa
                } else {
                    reject(new Error(`Producto con ID ${id} no encontrado`)); // Producto no encontrado
                }
            } catch (error) {
                reject(new Error('Error al buscar el producto por ID'));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}