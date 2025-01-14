import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import RemoveIcons from '../icons/RemoveIcons';
import toast from 'react-hot-toast';
import { useDrag } from 'react-dnd';

interface TaskProps {
  task: {
    id: string;
    title: string;
    status: string;
  };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const { tasks, setTasks } = useContext(AppContext)!;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleTaskRemove = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    toast('Task removed successfully', { icon: '🙅' });
  };

  return (
    <div
      ref={drag}
      className={`bg-white shadow-md rounded-md flex justify-between 
        h-16 items-center px-4 text-xl mt-3 cursor-grab
        ${isDragging ? 'opacity-10 ring-2 ring-rose-400' : 'opacity-100'}`}
    >
      <p>{task.title}</p>
      <button
        className='cursor-pointer'
        onClick={() => handleTaskRemove(task.id)}
      >
        <RemoveIcons />
      </button>
    </div>
  );
};

export default Task;
