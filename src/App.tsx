import { Toaster } from 'react-hot-toast';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='flex flex-col items-center w-full h-screen p-40 pt-20 bg-slate-100 text-slate-900 '>
        <CreateTask />
        <ListTasks />
      </div>
    </DndProvider>
  );
};

export default App;
