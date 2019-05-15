import { Chart, Tooltip, Axis, Legend, Line, Point } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  
  render() {
    const dv = new DataSet.View().source(this.props.dataSource);
    dv.transform({
      type: 'fold',
      fields: ['aqi', 'pm25'],
      key: 'city',
      value: 'temperature',
    });
    const data = dv.rows;

    const scale = [{
      dataKey: 'add',
      min: 0,
      max: 1,
    }];

    return (
      <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Legend />
        <Line position="add*temperature" color="city" />
        <Point position="add*temperature" color="city" size={4} style={{ stroke: '#fff', lineWidth: 1 }} shape="circle"/>
      </Chart>
    );
  }
}





