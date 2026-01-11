import { Logo } from '@/assets/logo.jsx';
import { ThemeToggle } from '@/components/theme-toggle.jsx';

export const AppHeader = () => {
  return (
    <header className="flex justify-between gap-1 items-center p-3 border-b">
      <Logo />
      
      <div className='ml-auto'>
        <ThemeToggle />
      </div>
    </header>
  );
};
