import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoList from '../components/TodoList';

const TodosPage: React.FC = () => {
  const context = useContext(TodoContext);
  if (!context) {
    return <p>Error: El contexto de tareas no está disponible</p>;
  }

  const { state } = context;
  const { todos } = state;

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {todos.length > 0 ? <TodoList todos={todos} /> : <p>No hay tareas disponibles</p>}
    </div>
  );
};

export default TodosPage;
