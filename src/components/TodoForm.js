import { useState } from 'react';
import '../styles/TodoForm.css';

function TodoForm({ dispatch }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setError(true);
      return;
    }

    dispatch({ type: 'ADD_TASK', payload: text.trim() });
    setText("");
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          if (error && e.target.value.trim()) {
            setError(false); 
          }
        }}
        placeholder="Add A New Task"
        className={error ? 'error' : ''}
      />
      <button type="submit">Add Task</button>
      {error && <p className="error-message">Unfortunately, Task Cannot Be Empty!</p>}
    </form>
  );
}

export default TodoForm;

