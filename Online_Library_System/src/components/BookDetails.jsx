import { Link, useLocation } from "react-router-dom";
import "./BookDetails.css";

function BookDetails() {
    const location = useLocation();
    const book = location.state;
    return (
        <div className="book-details">
            <div>
                <div className="book-cover">
                    <img src={book.coverImage} alt={book.title} className="book-cover-image" />
                </div>
                <header className="book-header">
                    <h2><em>{book.title}</em></h2>
                    <p><strong>by</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Rating:</strong> {book.rating}</p>
                </header>
            </div>
            
            <div className="book-info">
                
                <div className="book-description">
                    <h2>Description</h2>
                    <p>{book.description}</p>
                </div>
                <Link to="/browse" className="back-link">Back to All Books</Link>
            </div>
        </div>

    );
}
export default BookDetails;