import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Todo from './pages/Todo';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import Dashboard from './pages/Dashboard';
import Achievement from './pages/Achievement';
import BackgroundSettings from './pages/BackgroundSettings';
import OptionSettings from './pages/OptionSettings';
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/settings/background" element={<BackgroundSettings />} />
          <Route path="/settings/option" element={<OptionSettings />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}
