// @ts-check

import { AppHeader } from '@/components/app-header.jsx';
import { AppMain } from '@/components/app-main.jsx';
import { TasksErrorFallback } from '@/components/tasks-error-fallback.jsx';
import { TasksFallback } from '@/components/tasks-fallback.jsx';
import { TasksProvider } from '@/components/tasks-provider.jsx';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={TasksErrorFallback}>
      <Suspense fallback={<TasksFallback />}>
        <TasksProvider>
          <div className="flex flex-col h-screen">
            <AppHeader />
            <AppMain />
          </div>
        </TasksProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
