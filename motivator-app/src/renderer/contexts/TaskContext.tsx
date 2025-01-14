import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { Task } from '../../types/Task';

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // 初期データのロード
  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await window.db.loadTaskList();
      if (storedTasks && Array.isArray(storedTasks)) {
        setTasks(storedTasks);
      }
    };
    loadTasks();
  }, []);

  // タスクが変更された時に保存
  useEffect(() => {
    if (tasks.length > 0) {
      window.db.storeTaskList(tasks);
    }
  }, [tasks]);

  const value = useMemo(() => ({ tasks, setTasks }), [tasks, setTasks]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

// useTaskContext は型がundefinedの場合にエラーを投げるように
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
