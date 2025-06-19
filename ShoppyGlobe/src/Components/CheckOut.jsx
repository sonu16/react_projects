import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart } from "../redux/cartSlice";
import "./CheckOut.css";

function CheckOut() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cart);

  const total_price = cart.reduce((acc, item) => {
    return (acc += Math.round(
      item.price * (1 - item.discountPercentage / 100) * item.quantity
    ));
  }, 0);

  const handleOrder = () => {
    const isConfirmed = window.confirm("Do you want place your order?");
    if (isConfirmed) {
      dispatch(clearCart())
      navigate("/");
      window.alert("Item ordered successfully!");
    } else {
      window.alert("Your order is not placed!");
    }
  };

  return (
    <div className="checkout-container">
        <h2>Check Out</h2>
        <table className="checkout-table">
            <thead>
                <tr>
                    <th className="item-column">Item</th>
                    <th className="qty-column">Quantity</th>
                    <th className="price-column">Price</th>
                </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
                <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * Math.round(item.price * (1 - item.discountPercentage / 100))}</td>
                </tr>
            ))}
            </tbody>
      </table>

      <p className="total-price">
        <span className="label">Total Price: </span>${total_price}
      </p>

      {cart.length > 0 && (
        <div className="shipping-info">
          <h3>Shipping Information:</h3>
          <p>{cart[0]?.shippingInformation}</p>
        </div>
      )}
      <button className="order-button" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default CheckOut;