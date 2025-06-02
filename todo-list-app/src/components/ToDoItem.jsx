
function ToDoItem({
  todo,
  toggleComplete,
  deleteTodo,
  startEdit,
  isEditing,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit
}) {
  return (
    <li className="todo-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          disabled={isEditing} // Disable checkbox while editing
        />
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            autoFocus
          />
        ) : (
          <span className={`task-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="actions">
        {isEditing ? (
          <>
            <button onClick={() => saveEdit(todo.id)} className="save-button">Save</button>
            <button onClick={cancelEdit} className="cancel-button">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => startEdit(todo)} className="edit-button">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">❌</button>
          </>
        )}
      </div>
    </li>
  );
}

export default ToDoItem;