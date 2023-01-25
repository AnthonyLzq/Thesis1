import type { FC } from 'react'
import { Bar } from 'react-chartjs-2'

type CustomBarChartProps = {
  label: string
  labels: string[]
  data: boolean[]
  titles: [xTitle: string, yTitle: string]
}

const CustomBarChart: FC<CustomBarChartProps> = props => {
  const { label, labels, data, titles } = props
  const dataForChart = data.reduce<[success: number, fail: number]>(
    (acc, curr) => {
      if (curr) acc[0]++
      else acc[1]++

      return acc
    },
    [0, 0]
  )

  return (
    <Bar
      options={{
        responsive: true,
        scales: {
          x: { title: { display: true, text: titles[0] } },
          y: { title: { display: true, text: titles[1] }, beginAtZero: true }
        }
      }}
      data={{
        labels,
        datasets: [
          {
            label,
            data: dataForChart,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 0.2,
            barThickness: 'flex'
          }
        ]
      }}
    />
  )
}

export { CustomBarChart }
