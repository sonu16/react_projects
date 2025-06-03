# React To-Do List Application

This is a simple To-Do List application built with React and Vite. It allows users to add, delete, edit, and mark tasks as completed.

## Features

- Add new tasks
- Mark tasks as completed/incomplete
- Edit existing tasks
- Delete tasks
- Tasks are saved to local storage

## Project Structure
```
todo-list-app/
├── public/
├── src/
│   ├── components/  # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── ToDoList.jsx
│   │   └── ToDoItem.jsx
│   ├── App.jsx      # Main application component, manages state
│   ├── main.jsx     # Entry point of the React application
│   └── App.css      # Styles for the application
├── eslint.config.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Requirements Covered

1.  **Create a React Application:** Project set up using Vite.
2.  **Components:**
    * `App`: Main application logic and state management.
    * `Header`: Displays the application title.
    * `ToDoList`: Renders the list of to-do items.
    * `ToDoItem`: Represents a single to-do item with its actions.
3.  **State and Props:**
    * State for the list of to-do items, new task input, and editing state is managed in `App.jsx`.
    * Props are passed down to child components (`ToDoList`, `ToDoItem`) for data display and event handling.
4.  **Lists:**
    * The `ToDoList` component dynamically renders tasks using the `map` function.
    * Each `ToDoItem` is assigned a unique `key`.
5.  **Event Handling:**
    * Adding new tasks.
    * Marking tasks as complete/incomplete.
    * Deleting tasks.
    * Editing tasks (inline).
6.  **Styling and User Experience:**
    * Basic CSS (`App.css`) for a clean and user-friendly interface.
    * Visual feedback for task completion and actions.
    * Tasks persist in local storage.

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/sonu16/react_projects.git](https://github.com/sonu16/react_projects.git)
    cd react_projects/todo-list-app
    ```

2.  **Navigate to the project directory** (if you haven't already):
    ```bash
    cd react_projects/todo-list-app
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

#### Project link:- [https://github.com/sonu16/tree/main/todo-list-app](https://github.com/sonu16/tree/main/todo-list-app)
