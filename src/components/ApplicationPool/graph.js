import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'Sex Ratio'],
  ['S', 60],
  ['M', 38],
  ['T', 45],
  ['W', 73],
  ['T', 9],
  ['F', 22],
  ['S', 58],
]
const LineChartOptions = {
  hAxis: {
    title: 'Days',
  },
  vAxis: {
    title: 'Sex Ratio',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart extends Component {
  render() {
    return (
        <Chart
          width={'100%'}
          height={'100%'}
          alignItem={'center'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
    )
  }
}
export default MultiLineChart