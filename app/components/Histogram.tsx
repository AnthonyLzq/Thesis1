import type { FC } from 'react'
import { Chart } from 'react-chartjs-2'
import linspace from '@stdlib/array-linspace'

const makeOptions = ({
  titles,
  labels,
  mean,
  median,
  beginAtZero = false
}: {
  titles: [xTitle: string, yTitle: string]
  labels: number[]
  mean: number
  median: number
  beginAtZero?: boolean
}) => ({
  pan: {
    enabled: true,
    mode: 'xy'
  },
  zoom: {
    enabled: true,
    drag: false,
    mode: 'xy'
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      callbacks: {
        label: (context: {
          dataset: { label: string }
          parsed: { x: number; y: number }
          dataIndex: number
          label: string
        }) => {
          const previousLabel = labels[context.dataIndex]
          const currentLabel = labels[context.dataIndex + 1]

          return `${previousLabel} <= x < ${currentLabel}: ${context.parsed.y}`
        },
        title: () => ''
      }
    },
    annotation: {
      annotations: {
        mean: {
          type: 'line',
          value: mean,
          xMin: mean,
          xMax: mean,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          label: {
            enabled: true,
            display: true,
            content: `Media: ${mean}`,
            position: '25%',
            rotation: -90
          }
        },
        median: {
          type: 'line',
          value: median,
          xMin: median,
          xMax: median,
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          label: {
            enabled: true,
            display: true,
            content: `Mediana: ${median}`,
            position: '75%',
            rotation: -90
          }
        }
      }
    }
  },
  scales: {
    x: {
      offset: false,
      title: {
        display: true,
        text: titles[0]
      },
      type: 'linear',
      gridLines: {
        offsetGridLines: false
      },
      suggestedMin: labels[0],
      suggestedMax: labels[labels.length - 1],
      beginAtZero
    },
    y: {
      title: {
        display: true,
        text: titles[1]
      },
      beginAtZero: true
    }
  }
})

const generateDataForHistogram = (
  data: number[],
  labels: number[],
  debug = false
) => {
  const histogram: number[] = new Array(labels.length).fill(0)

  for (const datum of data) {
    for (let i = 1; i < labels.length; i++) {
      if (debug) console.log({ datum, l: labels[i - 1], u: labels[i], i })

      if (datum > labels[i - 1] && datum <= labels[i]) {
        histogram[i - 1]++
        break
      }
    }
  }

  return histogram
}

type HistogramProps = {
  data: number[]
  label: string
  titles: [xTitle: string, yTitle: string]
  debug?: boolean
  beginAtZero?: boolean
}

const Histogram: FC<HistogramProps> = props => {
  const { data, label, titles, debug = false, beginAtZero = false } = props
  const min = Math.min(...data)
  const max = Math.max(...data)
  const labels = Array.from(linspace(min, max, 11)).map(
    x => Math.round(x * 100) / 100
  )
  const dataForHistogram = generateDataForHistogram(data, labels, debug)
  const mean =
    Math.round((data.reduce((a, b) => a + b, 0) / data.length) * 100) / 100
  const median = data.concat().sort((a, b) => a - b)[
    Math.floor(data.length / 2)
  ]

  if (debug) {
    console.log('🚀 ~ file: Histogram.tsx:67 ~ min', min)
    console.log('🚀 ~ file: Histogram.tsx:68 ~ max', max)
    console.log('🚀 ~ file: Histogram.tsx:117 ~ mean', mean)
    console.log('🚀 ~ file: Histogram.tsx:119 ~ median', median)
    console.log('🚀 ~ file: Histogram.tsx:66 ~ label', label)
    console.log('🚀 ~ file: Histogram.tsx:70 ~ labels', labels)
    console.log(
      '🚀 ~ file: Histogram.tsx:71 ~ dataForHistogram',
      dataForHistogram
    )
  }

  return (
    <Chart
      options={
        makeOptions({ titles, labels, mean, median, beginAtZero }) as any
      }
      data={{
        labels,
        datasets: [
          {
            label,
            data: dataForHistogram,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            barPercentage: 1,
            categoryPercentage: 1,
            borderWidth: 0.2,
            barThickness: 'flex',
            type: 'bar'
          }
        ]
      }}
      type='bar'
    />
  )
}

export { Histogram }
