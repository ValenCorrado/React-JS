

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <Link to="/cart" className="cart-link">
            <img src="/images/cart.png" alt="Cart" />
            <span className="cart-count">0</span>
            </Link>
        </div>
    );
}