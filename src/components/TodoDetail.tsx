// src/components/TodoDetail.tsx
import React from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

interface TodoDetailProps {
  todo: Todo;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ todo }) => {
  return (
    <div className="task-detail">
      <h2>{todo.title}</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Completado:</strong> {todo.completed ? 'Sí' : 'No'}</p>
      <p><strong>User ID:</strong> {todo.userId}</p>
    </div>
  );
};

export default TodoDetail;

  