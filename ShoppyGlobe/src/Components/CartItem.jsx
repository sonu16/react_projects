import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import "./CartItem.css";

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);

    const handleRemoveFromCart = () => {
        dispatch(removeItem(item.id));
    };

    const handleQuantityChange = (newQuantity) => {
        const parsedQuantity = parseInt(newQuantity);
        if (parsedQuantity > 0) {
            setQuantity(parsedQuantity);
            dispatch(updateQuantity({
                id: item.id,
                quantity: parsedQuantity
            }));
        }
    };

    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} style={{ width: "100px", height: "100px" }} className="cart-item-image" />
            <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>Price: ${Math.round(item.price * (1 - item.discountPercentage / 100))}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={handleRemoveFromCart} className="remove-from-cart">Remove</button>
            </div>
            <div className="quantity-controls">
                <p>Update Quantity: </p>
                <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className="quantity-input"
                />
                <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="quantity-btn"
                >
                    +
                </button>
                <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="quantity-btn"
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default CartItem;