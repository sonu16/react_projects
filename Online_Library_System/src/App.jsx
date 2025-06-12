import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import BrowseBooks from './components/BrowseBooks'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'
import NotFoundPage from './components/NotFoundPage'
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/browse" element={<BrowseBooks />} />
                    <Route path="/browse/:genre" element={<BrowseBooks />} /> {/* Dynamic route for genre */}
                    <Route path="/view-details" element={<BookDetails />} /> 
                    <Route path="/add" element={<AddBook />} />
                    <Route path="*" element={<NotFoundPage />} />                     {/* 404 route */}
                </Routes>
            </main>
        </Router>
    );
}

export default App
