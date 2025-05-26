import { db } from "../config/firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, getDoc } from "firebase/firestore";

// Obtener todos los productos
export const getProducts = async () => {
    try {
        const prodCollection = collection(db, "Productos");
        const productosSnapshot = await getDocs(prodCollection);
        return productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error al obtener productos:", error);
        throw new Error("No se pudieron cargar los productos.");
    }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
    try {
        const docRef = doc(db, "Productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("El producto no existe.");
        }
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw new Error("No se pudo cargar el producto.");
    }
};

// Filtrar productos por categoría
export const getByCategory = async (category) => {
    try {
        const prodCollection = collection(db, "Productos");
        const q = query(prodCollection, where("category", "==", category));
        const productosSnapshot = await getDocs(q);
        return productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error al filtrar productos por categoría:", error);
        throw new Error("No se pudieron obtener los productos de esta categoría.");
    }
};

// Crear una orden en Firestore
export const createOrder = async (newOrder) => {
    if (!newOrder || Object.keys(newOrder).length === 0) {
        throw new Error("La orden está vacía. No se puede procesar.");
    }

    try {
        const ordersCollection = collection(db, "orders");
        const orderDoc = await addDoc(ordersCollection, newOrder);
        return orderDoc.id; // Devuelve el ID de la orden creada
    } catch (error) {
        console.error("Error al crear la orden:", error);
        throw new Error(`Error al crear la orden: ${error.message}`);
    }
};

// Obtener una orden por ID
export const getOrderById = async (id) => {
    try {
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("La orden no existe.");
        }
    } catch (error) {
        console.error("Error al obtener la orden:", error);
        throw new Error("No se pudo cargar la orden.");
    }
};

