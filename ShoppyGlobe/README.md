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

## Technologies Used

* React
* React Router Dom
* Redux Toolkit
* CSS for styling

## How to Run the Application

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/sonu16/react_projects.git](https://github.com/sonu16/react_projects.git)
    cd react_projects/ShoppyGlobe
    ```

2.  **Navigate to the project directory** (if you haven't already):
    ```bash
    cd react_projects/ShoppyGlobe
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the project files.
- `npm run preview`: Serves the production build locally for preview.

## Developed by Mohd Shahid

#### Project link:- [https://github.com/sonu16/tree/main/ShoppyGlobe.git](https://github.com/sonu16/tree/main/ShoppyGlobe.git)
