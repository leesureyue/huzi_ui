import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as React from 'react';
const scale = [{
  dataKey: 'aqi',
  tickInterval: 40,
}];

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={this.props.citydata} scale={scale}>
        <Tooltip />
        <Axis />
        <Bar position="add*aqi" color="add"/>
      </Chart>
    );
  }
}

