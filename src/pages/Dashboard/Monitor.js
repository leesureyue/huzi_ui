import styles from './Monitor.less';
import React from 'react';
import SimpleColumnChart from '../../component/SimpleChart/SimpleColumnChart';

//直方图分析页面
class Monitor extends React.Component{

  constructor(props){
    super(props);
  }
  state={
    pieChartkData:{}
  }

  componentDidMount(){
    fetch('/chart/getColumnChartData')
    .then(res=>res.json())
    .then(data=>{
      this.setState({pieChartData:data.result})
    })
    .catch(e=>console.log(e));
  }

  render(){
    return (
      <div>
        <SimpleColumnChart  data={this.state.pieChartData}/>
      </div>
    )
  }
}

export default Monitor;