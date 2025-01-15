import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTaskContext } from '../contexts/TaskContext';
import { Task } from '../../types/Task';

import Header from './Header';

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
      <Header />
      <div className="task__form--container">
        <div className="task__form--title">タスクの追加</div>
        <form onSubmit={handleSubmit} className="task__form">
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
          <button type="submit" className="task__form--submit">
            タスクを追加
          </button>
        </form>
        <div className="back__todo--button">
          <Link to="/todo">&gt; 戻る</Link>
        </div>
      </div>
    </>
  );
}

export default AddTaskForm;
