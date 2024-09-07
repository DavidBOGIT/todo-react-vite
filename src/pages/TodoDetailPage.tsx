import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import TodoDetail from '../components/TodoDetail';

const TodoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const context = useContext(TodoContext);

  if (!context) {
    return <p>Error: El contexto de tareas no está disponible</p>;
  }

  const { state, selectTodo } = context;
  const { selectedTodo } = state;

  useEffect(() => {
    if (id) {
      selectTodo(parseInt(id));
    }
  }, [id, selectTodo]);

  return (
    <div>
      <h1>Detalle de la Tarea</h1>
      {selectedTodo ? (
        <TodoDetail todo={selectedTodo} />
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default TodoDetailPage;

