import { FaCheck, FaEdit, FaTrash, FaCalendarAlt, FaSave, FaTimes } from 'react-icons/fa';
import '../styles/TodoItem.css';

function TodoItem({ todo, isEditing, editText, setEditText, submitEdit, startEditing, cancelEdit, dispatch }) {
  
    return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {(() => {
        if (isEditing) {
          return (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <button className='save-btn' onClick={() => submitEdit(todo.id)}>
                <FaSave /> Save
              </button>
              <button className='cancel-btn' onClick={cancelEdit}>
                <FaTimes /> Cancel
              </button>
            </>
          );
        } else {
          return (
            <>
              <span>{todo.text}</span> - <small><FaCalendarAlt /> {todo.date}</small>
              <button className='toggle-btn' onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: todo.id })}>
                <FaCheck />
              </button>
              <button className='edit-btn' onClick={startEditing}>
                <FaEdit />
              </button>
              <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE_TASK', payload: todo.id })}>
                <FaTrash />
              </button>
              {todo.completed && <span className="done-indicator">✓</span>}
            </>
          );
        }
      })()}
    </li>
  );
}

export default TodoItem;
