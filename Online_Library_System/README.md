# Online Library System

This is a React-based web application for an online library system, created as a project assignment. It allows users to browse books, filter by category, view book details, and add new books to the collection.

## Features

* **Home Page:** A welcoming landing page with book categories and a list of popular books.
* **Browse Books:** View all books, filter by category, and search by title or author.
* **Dynamic Routing:** Separate pages for book categories and detailed book views.
* **Add Books:** A form to add new books to the library, with state managed by Redux.
* **Form Validation:** Ensures all required fields are filled correctly when adding a book.
* **404 Page:** A fallback page for any invalid URLs.

## Project Structure

```
online_library_system/
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
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       react.svg
    │
    ├───components
    │       AddBook.css
    │       AddBook.jsx
    │       BookDetails.css
    │       BookDetails.jsx
    │       BrowseBooks.css
    │       BrowseBooks.jsx
    │       HomePage.css
    │       HomePage.jsx
    │       Navbar.css
    │       Navbar.jsx
    │       NotFoundPage.jsx
    │
    ├───redux
    │       booksSlice.js
    │       store.js
    │
    └───utils
            dummyData.js

## Technologies Used

* React
* React Router
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
    cd react_projects/online_library_system
    ```

2.  **Navigate to the project directory** (if you haven't already):
    ```bash
    cd react_projects/online_library_system
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

#### Project link:- [https://github.com/sonu16/tree/main/online_library_system](https://github.com/sonu16/tree/main/online_library_system)