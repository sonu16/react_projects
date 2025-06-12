import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">Online Library</Link>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Books</Link>
            <Link to="/add">Add Book</Link>
        </div>
        </nav>
  );
};

export default Navbar;