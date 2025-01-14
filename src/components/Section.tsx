import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Header from './Header';
import Task from './Task';
import { useDrop } from 'react-dnd';

interface SectionProps {
  status: string;
}

const Section: React.FC<SectionProps> = ({ status }) => {
  const { setTasks, tasks } = useContext(AppContext)!;

  const tasksInSection = tasks.filter((task) => task.status === status);

  let bg = 'bg-rose-300';
  if (status === 'inprogress') bg = 'bg-blue-300';
  if (status === 'completed') bg = 'bg-green-300';

  const [, dropTask] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: string }) => {
      moveTaskToSection(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveTaskToSection = (taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          task.status = status;
        }
        return task;
      });
      updatedTasks.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

      return updatedTasks;
    });
  };

  return (
    <div
      ref={dropTask}
      className='w-80 border-2 border-slate-300 rounded-md p-4 h-[400px] max-h-[400px] overflow-y-auto relative shadow-lg cursor-grab'
    >
      <Header text={status} bg={bg} count={tasksInSection.length} />
      {tasksInSection.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Section;
