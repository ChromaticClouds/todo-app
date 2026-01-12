/**
 * Components
 */
import { TaskDropdown } from '@/components/task-dropdown';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Assets
 */
import { CheckIcon } from 'lucide-react';

/**
 * Hooks
 */
import { useTasks } from '@/components/tasks-provider.jsx';

export const AppTasks = () => {
  const tasks = useTasks();

  return (
    <div className="flex flex-col gap-3 w-full">
      {tasks.map(({ id, name, description, endDate, completed }) => (
        <Card key={id} className="p-4 rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-between gap-3 items-center">
                <CardTitle>{name}</CardTitle>
                {completed && (
                  <Badge>
                    <CheckIcon />
                    Completed
                  </Badge>
                )}
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xs">{endDate}</span>
                <TaskDropdown />
              </div>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>
        </Card>
      ))}
    </div>
  );
};
