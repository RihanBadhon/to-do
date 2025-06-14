export const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export function todoReducer(state, action) {
  switch (action.type) {
    // Add Method
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
          date: new Date().toLocaleString(),
        },
      ];

    // Delete Method
    case 'DELETE_TASK':
      return state.filter(todo => todo.id !== action.payload);

    // Toggle Method
    case 'TOGGLE_TASK':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // Edit Method
    case 'UPDATE_TASK':
      return state.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
              date: new Date().toLocaleString(),
            }
          : todo
      );
      
    default: return state;
  }
}


