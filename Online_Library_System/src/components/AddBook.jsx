import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";
import "./AddBook.css";

function AddBook() {
    const [formData, setFormData] = useState({ title: '', author: '', genre: '', description: '', rating: '', coverImage: '' });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function validateForm() {
        const newErrors = {};
        if (!formData.title) newErrors.title = "Title is required.";
        if (!formData.author) newErrors.author = "Author is required.";
        if (!formData.genre) newErrors.genre = "Genre is required.";
        if (!formData.description) newErrors.description = "Description is required.";
        if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) {
            newErrors.rating = "Rating must be a number between 0 and 5.";
        }
        if (!formData.coverImage) newErrors.coverImage = "Cover image URL is required.";
        else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(formData.coverImage)) {
            newErrors.coverImage = "Cover image must be a valid URL ending with .jpg, .jpeg, .png, or .gif.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            dispatch(addBook({...formData, coverImage: formData.coverImage, rating: parseFloat(formData.rating)}));
            navigate("/browse");
        }
    };
    
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="add-book">
            <h1>Add a New Book</h1>
            <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    {errors.title && <span className="error">{errors.title}</span>}
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} />
                    {errors.author && <span className="error">{errors.author}</span>}
                </div>
                <div className="form-group">
                    <label>Genre:</label>
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
                    {errors.genre && <span className="error">{errors.genre}</span>}
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <div className="form-group">
                    <label>Rating (0-5):</label>
                    <input type="number" name="rating" value={formData.rating} onChange={handleChange} step="0.1" min="0" max="5" />
                    {errors.rating && <span className="error">{errors.rating}</span>}
                </div>
                <div className="form-group">
                    <label>Cover Image URL:</label>
                    <input type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} />
                    {errors.coverImage && <span className="error">{errors.coverImage}</span>}
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
export default AddBook;
// This component allows users to add a new book to the library.