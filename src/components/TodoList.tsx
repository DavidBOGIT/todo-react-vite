import React from 'react';
import { Link } from 'react-router-dom';

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <li key={todo.id} className="task-item">
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
