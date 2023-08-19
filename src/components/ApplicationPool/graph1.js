import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'Team Size'],
  ['Jan', 20],
  ['Feb', 8],
  ['Mar', 22],
  ['Apr', 35],
  ['May', 28],
  ['Jun', 32],
  ['Jul', 38],
]
const LineChartOptions = {
  hAxis: {
    title: 'Months',
  },
  vAxis: {
    title: 'Team Size',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart1 extends Component {
  render() {
    return (
        <Chart
          width={'100%'}
          height={'250px'}
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
export default MultiLineChart1;