import { Link } from 'react-router-dom';

import { useTaskContext } from '../contexts/TaskContext';

import Header from '../components/Header';
import TaskList from '../components/TaskList';
import './Todo.css';

function Todo() {
  const { tasks } = useTaskContext();

  return (
    <div>
      <Header />
      <div className="todo__title">TODOリスト</div>
      <Link to="/">Home</Link>
      <div className="task__add--button">
        <Link to="/todo/add">タスクの追加</Link>
      </div>
      <div className="task__list--container">
        タスクの一覧表示エリア
        <TaskList taskList={tasks} />
      </div>
    </div>
  );
}

export default Todo;
