interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  interface State {
    todos: Todo[];
    selectedTodo: Todo | null;
  }
  
  interface Action {
    type: 'SET_TODOS' | 'SET_SELECTED_TODO';
    payload: Todo[] | Todo | null;
  }
  
  export const initialState: State = {
    todos: [],
    selectedTodo: null,
  };
  
  export const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'SET_TODOS':
        return { ...state, todos: action.payload as Todo[] };
      case 'SET_SELECTED_TODO':
        return { ...state, selectedTodo: action.payload as Todo };
      default:
        return state;
    }
  };
  