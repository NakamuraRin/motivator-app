import { Link } from 'react-router-dom';

interface TaskEditButtonProps {
  taskId: string;
}

function TaskEditButton({ taskId }: TaskEditButtonProps) {
  return (
    <Link to={`/todo/edit/${taskId}`}>
      <div className="edit__button">編集</div>
    </Link>
  );
}

export default TaskEditButton;
