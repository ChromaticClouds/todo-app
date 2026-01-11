import { TaskDropdown } from '@/components/task-dropdown';
import { useTasks } from '@/components/tasks-provider.jsx';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

export const AppTasks = () => {
  const tasks = useTasks();

  return (
    <div className="flex flex-col gap-3 w-full">
      {tasks.map(({ id, name, description, endDate }) => (
        <Card key={id} className="p-4 rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between items-center">
              <CardTitle>{name}</CardTitle>
              <div className="flex gap-3">
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
