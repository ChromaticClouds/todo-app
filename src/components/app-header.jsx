import { Logo } from '@/assets/logo.jsx';
import { ThemeToggle } from '@/components/theme-toggle.jsx';

export const AppHeader = () => {
  return (
    <header className="w-full flex justify-between gap-1 items-center p-3 border-b sticky top-0 bg-background z-50">
      <Logo />
      
      <div className='ml-auto'>
        <ThemeToggle />
      </div>
    </header>
  );
};
