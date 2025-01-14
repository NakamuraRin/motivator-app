interface Window {
  db: {
    loadTaskList: () => Promise<any[]>;
    storeTaskList: (taskList: any[]) => Promise<void>;
  };
}
