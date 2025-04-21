import { products } from '../data/productos.js';

export function fetchdata () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000); // Simula un retraso de 2 segundos
    });
}

export function fetchProductById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = (products.find((prod) => prod.id === parseInt(id)));
            if (product) {
                resolve(product);
            } else {
                reject(new Error('Producto no encontrado'));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}