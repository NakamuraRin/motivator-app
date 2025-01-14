import { Task } from '../../types/Task';
import { useTaskContext } from '../contexts/TaskContext';
import TaskDeleteButton from './TaskDeleteButton';
import TaskEditButton from './TaskEditButton';

import '../pages/Todo.css';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const { setTasks } = useTaskContext();

  // 完了ステータスのトグル
  const handleToggleStatus = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.taskId === task.taskId ? { ...t, isDone: !t.isDone } : t,
      ),
    );
  };

  return (
    <div className="task__item">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleStatus}
        className="task__checkbox"
      />
      <span className="task__name">{task.taskName}</span>
      <span className="task__limit">
        {new Date(task.limit).toLocaleDateString()}
      </span>
      <div className="task__actions">
        <TaskEditButton taskId={task.taskId} />
        <TaskDeleteButton taskId={task.taskId} />
      </div>
    </div>
  );
}

export default TaskItem;
