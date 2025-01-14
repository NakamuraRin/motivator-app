import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTaskContext } from '../contexts/TaskContext';
import { Task } from '../../types/Task';

function AddTaskForm() {
  const { setTasks } = useTaskContext();

  const [taskName, setTaskName] = useState('');
  const [limit, setLimit] = useState<string>('');
  const [isDone, setIsDone] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newTask: Task = {
      taskId: new Date().toISOString(),
      taskName,
      limit: new Date(limit),
      isDone,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTaskName('');
    setLimit('');
    setIsDone(false);

    navigate('/todo');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">
          タスク名:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="limit">
          期限:
          <input
            type="date"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="isDone">
          完了:
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => setIsDone(!isDone)}
          />
        </label>
        <br />
        <button type="submit">タスクを追加</button>
      </form>
      <Link to="/todo">Todo</Link>
      <Link to="/">Home</Link>
    </>
  );
}

export default AddTaskForm;
