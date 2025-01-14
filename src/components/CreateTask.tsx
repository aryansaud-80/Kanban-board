import { useContext, ChangeEvent, FormEvent } from 'react';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import AddIcons from '../icons/AddIcons';

const CreateTask: React.FC = () => {
  const { tasks, setTasks, task, setTask } = useContext(AppContext)!;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      id: uuidv4(),
      title: e.target.value.toUpperCase(),
    });
  };

  const handleCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    if (task.title.length < 4)
      return toast.error('Task title must be at least 4 characters long');
    if (task.title.length >= 100)
      return toast.error('Task title must be less than 100 characters long');
    if (tasks.some((t) => t.title.toLowerCase() === task.title.toLowerCase()))
      return toast.error('Task title must be unique');

    const updatedTask = [...tasks, task];
    setTasks(updatedTask);
    setTask({
      id: '',
      title: '',
      status: 'todo',
      createdAt: '',
    });

    toast.success('Task created successfully');
  };

  return (
    <div className='flex flex-col gap-4'>
      <form
        className='flex flex-col items-center justify-center w-full gap-4 '
        onSubmit={handleCreateTodo}
      >
        <div className='flex gap-4 max-sm:flex-col'>
          <input
            type='text'
            className='h-12 px-1 border-2 rounded-md outline-none w-80 border-slate-300 bg-slate-200'
            value={task.title}
            onChange={handleInputChange}
          />
          <button className='flex items-center h-12 gap-2 p-4 bg-blue-300 rounded-md'>
            <AddIcons />
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
