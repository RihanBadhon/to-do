import { useState } from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ todos, dispatch }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const submitEdit = (id) => {
    const trimmed = editText.trim();
    if (trimmed === "") return;
    dispatch({ type: 'Update_Task', payload: { id, text: trimmed } });
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          editText={editText}
          setEditText={setEditText}
          submitEdit={submitEdit}
          startEditing={() => startEditing(todo)}
          cancelEdit={cancelEdit}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}

export default TodoList;




