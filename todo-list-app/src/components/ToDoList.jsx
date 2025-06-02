import ToDoItem from './ToDoItem';

function ToDoList({
  todos,
  toggleComplete,
  deleteTodo,
  startEdit,
  editingTodoId,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit
}) {
  if (todos.length === 0) {
    return <p className="empty-state">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEdit={startEdit}
          isEditing={editingTodoId === todo.id}
          editingText={editingTodoId === todo.id ? editingText : ''}
          setEditingText={setEditingText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;