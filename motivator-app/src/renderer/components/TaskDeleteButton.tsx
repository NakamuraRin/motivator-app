import { useNavigate } from 'react-router-dom';

import { useTaskContext } from '../contexts/TaskContext';

interface TaskDeleteButtonProps {
  taskId: string;
}

function TaskDeleteButton({ taskId }: TaskDeleteButtonProps) {
  const { setTasks } = useTaskContext();

  const navigate = useNavigate();

  const handleDelete = () => {
    // 確認ダイアログを表示
    const isConfirmed = window.confirm('タスクを削除しますか？');

    if (isConfirmed) {
      // ユーザーがOKを押した場合、タスクを削除
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.filter((task) => task.taskId !== taskId);
        return updatedTasks;
      });

      // タスク削除後、/todoページに遷移
      navigate('/todo');
    } else {
      // ユーザーがキャンセルを押した場合、何もしない
    }
  };

  return (
    <div>
      <button
        className="delete__button"
        onClick={handleDelete}
        type="button"
        aria-label="タスクを削除"
      >
        削除
      </button>
    </div>
  );
}

export default TaskDeleteButton;
