import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const GlobalStates = createContext();

export const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    // Cargar productos desde Firebase al iniciar
    useEffect(() => {
        setLoading(true);

        const cargarProductos = async () => {
            try {
                const prodCollection = collection(db, "Productos");
                const productosSnapshot = await getDocs(prodCollection);
                const productos = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                setProducts(productos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, []);

    // Obtener un producto por ID desde Firebase
    const getProductById = async (id) => {
        try {
            const docRef = doc(db, "Productos", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                throw new Error("El producto no existe.");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    };

    // Agregar productos al carrito
    const addToCart = (producto) => {
        setCart((prevCart) => {
            const existe = prevCart.find((item) => item.id === producto.id);
            return existe
                ? prevCart.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
                : [...prevCart, { ...producto, cantidad: 1 }];
        });
    };

    // Calcular total del carrito correctamente
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + ((item.price || item.precio) * item.cantidad || 0), 0));
    }, [cart]);

    // 🛒 Calcular cantidad total de productos en el carrito
    const calcularItems = cart.length > 0 
        ? cart.reduce((total, prod) => total + prod.cantidad, 0) 
        : 0;

    return (
        <GlobalStates.Provider value={{
            cart,
            setCart,
            total,
            setTotal,
            loading,
            products,
            error,
            getProductById,
            addToCart, 
            calcularItems,
            categoriaSeleccionada,
            setCategoriaSeleccionada
        }}>
            {children}
        </GlobalStates.Provider>
    );
};

export const useGlobalStates = () => useContext(GlobalStates);