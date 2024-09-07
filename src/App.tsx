import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import TodoDetailPage from './pages/TodoDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/:id" element={<TodoDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
