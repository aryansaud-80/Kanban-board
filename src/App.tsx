import { Toaster } from 'react-hot-toast';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='flex flex-col items-center w-full h-screen pt-5 bg-slate-100 text-slate-900 '>
        <h1 className='mb-10 text-2xl sm:text-4xl sm:text-center'>
          Kanban - Style Task Manager
        </h1>
        <CreateTask />
        <ListTasks />
      </div>
    </DndProvider>
  );
};

export default App;
