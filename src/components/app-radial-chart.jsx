import { ChartContainer } from "@/components/ui/chart.jsx"
import { RadialBar, RadialBarChart } from "recharts"
import { useTasks } from "@/components/tasks-provider.jsx"

const chartConfig = {
  progress: {
    label: 'Total progress',
    color: 'var(--chart-3)'
  },
  limit: {
    label: 'Limit',
    color: 'var(--color-secondary)'
  }
}

export const AppRadialChart = () => {
  const tasks = useTasks();

  const completed = tasks.filter(task => task.completed).length;
  const limit = tasks.length - completed || 0;

  const data = [{ limit, progress: completed }];

  return (
    <ChartContainer config={chartConfig} className='w-16 h-16'>
      <RadialBarChart
        data={data}
        innerRadius={20}
        outerRadius={30}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar 
          dataKey='progress'
          stackId='a'
          fill='var(--chart-3)'
          cornerRadius={20}
          className='stroke-transparent stroke-2'
        />
        
        <RadialBar 
          dataKey='limit'
          stackId='a'
          fill='var(--color-limit)'
          cornerRadius={20}
          className='stroke-transparent stroke-2'
          isAnimationActive={false}
        />

      </RadialBarChart>
    </ChartContainer>
  )
}