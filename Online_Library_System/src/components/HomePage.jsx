import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Homepage.css";

function HomePage() {
    const books = useSelector((state) => state.books.items);
    const popularBooks = books.slice(0, 5); // Display first 5 books as "popular"
    const genres = [...new Set(books.map(book => book.genre))];

    return (
        <div className="home-page">
        <header className="welcome-header">
            <h1>Welcome to the Online Library!</h1>
            <p>(Your one-stop destination for great books.)</p>
        </header>

        <section className="categories-section">
            <h2>Book Categories</h2>
            <div className="categories-list">
            {genres.map(genre => (
                <Link key={genre} to={`/browse/${encodeURIComponent(genre)}`} className="category-link">
                {genre}
                </Link>
            ))}
            </div>
        </section>

        <section className="popular-books">
            <h2>Popular Books</h2>
            <div className="book-list">
            {popularBooks.map(book => (
                <div key={book.id} className="book-card">
                <img src={book.coverImage} alt={book.title} className="book-cover" />
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <Link to={`/view-details`} state={book}>View Details</Link>
                </div>
            ))}
            </div>
        </section>
        </div>
  );
};

export default HomePage;
