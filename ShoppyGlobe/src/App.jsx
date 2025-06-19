import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'
const ProductList = React.lazy(() => import('./Components/ProductList'))
const ProductDetails = React.lazy(() => import('./Components/ProductDetails'))
const Cart = React.lazy(() => import('./Components/Cart'))
const CheckOut = React.lazy(() => import('./Components/CheckOut'))
const NotFound = React.lazy(() => import('./Components/NotFound'))

function App() {
    return (
        <Router>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    {/* Fallback route for 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
