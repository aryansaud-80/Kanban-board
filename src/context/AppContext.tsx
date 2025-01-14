import { createContext, useEffect, useState, ReactNode } from 'react';

interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

interface AppContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  task: Task;
  setTask: React.Dispatch<React.SetStateAction<Task>>;
  statuses: string[];
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    status: 'todo',
    createdAt: new Date().toISOString(),
  });
  const statuses = ['todo', 'inprogress', 'completed'];
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    if (Array.isArray(savedTasks)) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const value = {
    tasks,
    setTasks,
    task,
    setTask,
    statuses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
