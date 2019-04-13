import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

class SimpleBarChart  extends React.Component {
  
  render() {
    const dv = new DataSet.View().source(this.props.dataSource);
    dv.transform({
      type: 'sort',
      callback(a, b) {
        return a.population - b.population > 0;
      },
    });
    const data = dv.rows;
    return (
      <Chart forceFit 
      height={320} 
      
      data={data}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Axis dataKey="country" label={{ offset: 12 }} />
        <Bar position="country*population" />
      </Chart>
    );
  }
}


export default SimpleBarChart;

