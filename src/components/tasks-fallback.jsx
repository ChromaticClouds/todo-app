import { Logo } from '@/assets/logo.jsx';
import { Spinner } from '@/components/ui/spinner.js';

export const TasksFallback = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
      <Logo variant="icon" size={48} />
      <div className='flex flex-col items-center justify-center gap-2'>
        <p>Loading</p>
        <Spinner />
      </div>
    </div>
  );
};
