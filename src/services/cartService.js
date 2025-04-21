export const addToCart = (cart, product) => {
    return [...cart, product];
};

export const calculateTotal = (cart) => {
    return cart.reduce((total, product) => total + product.price, 0);
};