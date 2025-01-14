import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Section from './Section';

const ListTasks: React.FC = () => {
  const { statuses } = useContext(AppContext)!;

  return (
    <div className='flex gap-10 mt-10 max-lg:flex-col'>
      {statuses.map((status, idx) => (
        <Section key={idx} status={status} />
      ))}
    </div>
  );
};

export default ListTasks;
