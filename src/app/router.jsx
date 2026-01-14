import { createBrowserRouter } from 'react-router-dom';

/**
 * Components
 */
import { App } from '@/app/app.jsx';
import { Home } from '@/pages/home.jsx';
import { AddTask } from '@/pages/add-task.jsx';
import { Register } from '@/pages/register.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <Register /> },
      { path: 'add', element: <AddTask /> },
    ],
  },
]);
