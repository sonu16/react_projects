import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setProduct(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error fetching product details: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <div className="product-info">
        <img src={product.thumbnail} alt={product.title} className="product-image" style={{ width: "200px", height: "200px" }} />
        <h2 style={{ color: "#007bff" }}>{product.title}</h2>
        <p>Brand: {product.brand}</p>
        <p>{product.availabilityStatus}</p>
        <p>Price: <span style={{color: "green"}}><FaArrowDownLong />-{product.discountPercentage}%</span> ${Math.round(product.price * (1 - product.discountPercentage / 100))}</p>
        <p>M.R.P.: $<s>{product.price}</s></p>
        <p>Rating: {product.rating}</p>
        <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
        <h2>Product Details:</h2> <br />
        <p>{product.description}</p>
      </div>
      <div className="product-reviews">
        <h1>Customer Reviews:</h1>
        {product.reviews?.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.reviewerName}</h3>
            <p className="date">
              {review.date.slice(0, review.date.indexOf("T"))}
            </p>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;