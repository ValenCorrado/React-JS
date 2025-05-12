import { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts, fetchProductById } from "../../services/fetchProducts"; // Importa las funciones de obtención de datos

const GlobalStates = createContext(); // Contexto global

export const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);                   // Estado del carrito
    const [total, setTotal] = useState(0);                  // Estado del total
    const [loading, setLoading] = useState(true);           // Estado de carga
    const [products, setProducts] = useState([]);           // Estado de productos
    const [error, setError] = useState(null);               // Estado de errores

    // Carga los productos al iniciar la app
    useEffect(() => {
        setLoading(true);
        const cargarProductos = async () => {
            try {
                const productos = await fetchProducts();
                setProducts(productos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, []);

    // Función para obtener un producto por ID
    const getProductById = async (id) => {
        try {
            return await fetchProductById(id);
        } catch (err) {
            throw new Error(err.message);
        }
    };

    return (
        <GlobalStates.Provider value={{ cart, setCart, total, setTotal, loading, setLoading, products, error, getProductById }}>
            {children}
        </GlobalStates.Provider>
    );
};

export const useGlobalStates = () => useContext(GlobalStates); // Hook personalizado