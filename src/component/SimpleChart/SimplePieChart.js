import React from 'react';
import {Chart , Pie,Guide,Tooltip,Axis,Legend,Coord} from 'viser-react';

const DataSet = require('@antv/data-set');
const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

//饼图
class SimplePieChart extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){
    const dv = new DataSet.View().source(this.props.dataSource);
    dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const data = dv.rows;
    return(
      <Chart forceFit height={400} data={data} scale={scale}>
      <Tooltip showTitle={false} />
        <Axis />
        <Legend dataKey="item" />
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Pie position="percent" color="item" style={{ stroke: '#fff', lineWidth: 1 }}
          label={['percent', {
            formatter: (val, item) => {
              return item.point.item + ': ' + val;
            }
          }]}
        />
      </Chart>
    )
  }
}

export default SimplePieChart;