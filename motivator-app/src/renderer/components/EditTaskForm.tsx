import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useTaskContext } from '../contexts/TaskContext';
import { Task } from '../../types/Task';

import Header from './Header';

function EditTaskForm() {
  const { taskId } = useParams<{ taskId: string }>();
  const { tasks, setTasks } = useTaskContext();
  const [task, setTask] = useState<Task | null>(null);

  const [taskName, setTaskName] = useState('');
  const [limit, setLimit] = useState<string>();
  const [isDone, setIsDone] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (taskId) {
      const selectedTask = tasks.find((t) => t.taskId === taskId);
      if (selectedTask) {
        setTask(selectedTask);
        setTaskName(selectedTask.taskName);
        const taskLimit =
          selectedTask.limit instanceof Date
            ? selectedTask.limit
            : new Date(selectedTask.limit);
        setLimit(taskLimit.toISOString().split('T')[0]);
        setIsDone(selectedTask.isDone);
      }
    }
  }, [taskId, tasks]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!task) return;

    const updatedTask: Task = {
      ...task,
      taskName,
      limit: limit ? new Date(limit) : task.limit,
      isDone,
    };

    // タスクを更新
    setTasks((prev) =>
      prev.map((t) => (t.taskId === taskId ? updatedTask : t)),
    );

    navigate('/todo');
  };

  if (!task) {
    return <div>タスクが見つかりませんでした。</div>;
  }

  return (
    <>
      <Header />
      <div className="task__form--container">
        <div className="task__form--title">タスクの編集</div>
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
            タスクを更新
          </button>
        </form>
        <div className="back__todo--button">
          <Link to="/todo">&gt; 戻る</Link>
        </div>
      </div>
    </>
  );
}

export default EditTaskForm;
