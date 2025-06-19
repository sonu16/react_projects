import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <header className="header">
            <h1>🇸hoppyGlobe</h1>
            <nav className="nav">
                <div className="home">
                    <p><Link to="/">Home</Link></p>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <PiShoppingCartBold style={{ fontSize: "2rem", color: "blueviolet" }} />
                        <span className="cart-count">{cartItems.length}</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;