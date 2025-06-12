import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./BrowseBooks.css";

function BrowseBooks() {
    const { genre } = useParams();
    const books = useSelector((state) => state.books.items);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Filter books by genre
    const filteredBooks = useMemo(() => {
        return books.filter(book => {
            const matchesGenre = genre ? book.genre === genre : true;
            const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesGenre && matchesSearch;
        });
    }, [books, genre, searchTerm]);

    return (
        <div className="browse-books">
            <header className="browse-header">
                <h2>{genre ? `Books in ${genre} Genre` : "All Books"}</h2>
            </header>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search books by title or author ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="book-list">
                {filteredBooks.length > 0 ? filteredBooks.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.coverImage} alt={book.title} className="book-cover" />
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                        <Link to={`/view-details`} state={book}>View Details</Link>
                    </div>
                  )) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
}
export default BrowseBooks;
// This component allows users to browse books by genre or search for specific titles.