import { Task } from '../../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  taskList: Task[];
}

function TaskList({ taskList }: TaskListProps) {
  return (
    <div className="task__list">
      {taskList.map((task) => (
        <TaskItem key={task.taskId} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
