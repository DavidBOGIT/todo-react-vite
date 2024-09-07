import { createContext, useReducer, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { todoReducer, initialState } from '../reducers/TodoReducers';

interface TodoContextType {
  state: typeof initialState;
  loadTodos: () => void;
  selectTodo: (id: number) => void; 
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const loadTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      dispatch({ type: 'SET_TODOS', payload: response.data });
    } catch (error) {
      console.error('Error al cargar los todos:', error);
    }
  };
  const selectTodo = async (id: number) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      dispatch({ type: 'SET_SELECTED_TODO', payload: response.data });
    } catch (error) {
      console.error('Error al seleccionar el todo:', error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ state, loadTodos, selectTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
