import { Link } from 'react-router-dom';

import { useTaskContext } from '../contexts/TaskContext';

import Header from '../components/Header';
import BackToHome from '../components/BackToHome';
import TaskList from '../components/TaskList';
import './Todo.css';

function Todo() {
  const { tasks } = useTaskContext();

  return (
    <div>
      <Header />
      <BackToHome />
      <div className="todo__container">
        <div className="todo__header--container">
          <div className="todo__title">TODOリスト</div>
          <Link to="/todo/add">
            <div className="task__add--button">タスクの追加</div>
          </Link>
        </div>

        <div className="task__list--container">
          <TaskList taskList={tasks} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
