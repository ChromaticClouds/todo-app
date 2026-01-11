/**
 * Components
 */
import { Card } from '@/components/ui/card.jsx';
import { AppRadialChart } from '@/components/app-radial-chart.jsx';
import { XIcon } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group.jsx';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { SortDescIcon } from 'lucide-react';
import { AppTasks } from '@/components/app-tasks.jsx';

export const AppMain = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center w-sm h-full gap-3">
        <Card className="w-full p-2 rounded-lg">
          <div className="flex justify-between items-center">
            <AppRadialChart />
            <div className="flex items-center flex-1 px-3 justify-between">
              <div className="text-sm">
                <p className="font-bold">You've completed 1 out of 2 tasks</p>
                <p>You're halfway there! Keep it up!</p>
              </div>
              <XIcon size={20} className="cursor-pointer" />
            </div>
          </div>
        </Card>
        <div className="w-full flex gap-3">
          <InputGroup>
            <InputGroupInput placeholder="Search for task..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Button variant="outline" size="icon">
            <SortDescIcon />
          </Button>
        </div>

        {/* Tasks */}
        <AppTasks />
      </section>
    </main>
  );
};
