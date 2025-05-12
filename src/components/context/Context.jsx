import { createContext, useContext, useState } from "react";


const GlobalStates = createContext(); // Contexto global para el carrito de compras


const Constext = () => {
    const [cart, setCart] = useState([]); // Estado para el carrito de compras
    const [total, setTotal] = useState(0); // Estado para el total del carrito

    return (
        <GlobalStates.Provider value={{ cart, setCart, total, setTotal }}>
            {children}
        </GlobalStates.Provider>
    );
}

export default Constext; // Exporta el contexto para ser utilizado en otros componentes
export const useGlobalStates = () => {
    return useContext(GlobalStates); // Hook personalizado para acceder al contexto global
};