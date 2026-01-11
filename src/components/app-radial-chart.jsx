import { ChartContainer } from "@/components/ui/chart.jsx"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

const PROGRESS = [{ progress: 50, limit: 50 }]

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
  return (
    <ChartContainer config={chartConfig} className='w-16 h-16'>
      <RadialBarChart
        data={PROGRESS}
        innerRadius={20}
        outerRadius={30}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar 
          dataKey='limit'
          stackId='a'
          fill='var(--color-limit)'
          cornerRadius={20}
          className='stroke-transparent stroke-2'
        />

        <RadialBar 
          dataKey='progress'
          stackId='a'
          fill='var(--chart-3)'
          cornerRadius={20}
          className='stroke-transparent stroke-2'
        />
      </RadialBarChart>
    </ChartContainer>
  )
}