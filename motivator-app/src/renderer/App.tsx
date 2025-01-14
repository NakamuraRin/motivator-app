import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Todo from './pages/Todo';
import Settings from './pages/Settings';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import { TaskProvider } from './contexts/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo/add" element={<AddTaskForm />} />
          <Route path="/todo/edit/:taskId" element={<EditTaskForm />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}
