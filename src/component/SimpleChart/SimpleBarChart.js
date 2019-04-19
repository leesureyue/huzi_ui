import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

/**
 *  条形图
 */
class SimpleBarChart  extends React.Component {
  
  constructor(props){
    super(props)
  }
  state={
    dataSource:[]
  }
  componentDidMount(){
    fetch('/chart/getBarChartData')
    .then(res=>res.json())
    .then(data=>{
      this.setState({dataSource:data})
    }).catch(e=>console.log(e));
  }


  render() {
    const dv = new DataSet.View().source(this.state.dataSource);
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

