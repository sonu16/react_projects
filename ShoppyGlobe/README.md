# ShoppyGlobe E-commerce Application

## Overview
ShoppyGlobe is a basic e-commerce application built with React and Redux. It allows users to browse products, view product details, add items to their cart, and manage their shopping experience seamlessly.

## Features
- **Product Listing**: Displays a list of products fetched from an external API.
- **Product Detail View**: Provides detailed information about a selected product.
- **Shopping Cart**: Users can add products to their cart, modify quantities, and remove items.
- **Search Functionality**: Filter products based on user input.
- **Responsive Design**: The application is designed to work well on various screen sizes.
- **Error Handling**: Graceful handling of data fetching errors.

## Project Structure
```
    ShoppyGlobe
    │   .gitignore
    │   eslint.config.js
    │   index.html
    │   package.json
    │   README.md
    │   vite.config.js
    │   
    ├───public
    │       favicon-32x32.png
    │       vite.svg
    │
    └───src
        │   App.css
        │   App.jsx
        │   main.jsx
        │
        ├───assets
        │       react.svg
        │       
        ├───Components
        │       Cart.css
        │       Cart.jsx
        │       CartItem.css
        │       CartItem.jsx
        │       CheckOut.css
        │       CheckOut.jsx
        │       Header.css
        │       Header.jsx
        │       NotFound.jsx
        │       ProductDetails.css
        │       ProductDetails.jsx
        │       ProductItem.css
        │       ProductItem.jsx
        │       ProductList.css
        │       ProductList.jsx
        │
        ├───hooks
        │       useFetchProducts.js
        │       
        └───redux
                cartSlice.js
                store.js
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ShoppyGlobe
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Technologies Used
- React
- Redux Toolkit
- React Router
- CSS for styling

