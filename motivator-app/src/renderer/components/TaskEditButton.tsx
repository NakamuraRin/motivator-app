import { Link } from 'react-router-dom';

interface TaskEditButtonProps {
  taskId: string;
}

function TaskEditButton({ taskId }: TaskEditButtonProps) {
  return (
    <Link to={`/todo/edit/${taskId}`}>
      <button
        className="task__edit--button"
        type="button"
        aria-label="タスクを編集"
      >
        編集
      </button>
    </Link>
  );
}

export default TaskEditButton;
