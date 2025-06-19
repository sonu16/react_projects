import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return <h2>Your cart is empty</h2>;
    }
    return (
        <div className="cart-container">
            <div className="cart">
                <h2>Shopping Cart</h2>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <button className="checkout-button" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
    );
}
export default Cart;