export const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export function todoReducer(state, action) {
  switch (action.type) {
    // Add Method
    case 'Add_Task':
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
    case 'Delete_Task':
      return state.filter(todo => todo.id !== action.payload);

    // Toggle Method
    case 'Toggle_Task':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // Edit Method
    case 'Update_Task':
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


