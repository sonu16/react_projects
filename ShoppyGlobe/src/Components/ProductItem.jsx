import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "./ProductItem.css"


function ProductItem({ product }) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(product));
    };
    const price = product.price;
    const discounted_price = Math.round(
    price * (1 - product.discountPercentage / 100)
  );
    return (
        <div className="product-item">
            <div className="product-overview">
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                <h4><Link to={`/product/${product.id}`}>{product.title}</Link></h4>
                <p>Rating: {product.rating}</p>
                <p><span style={{color: "green"}}><FaArrowDownLong />-{product.discountPercentage} %</span> ${discounted_price}</p>
                <p>M.R.P.: $<s>{price}</s></p>
                <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}
export default ProductItem;