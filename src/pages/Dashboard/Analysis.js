import styles from './Monitor.less';
import React from 'react';
import SimplePieChart from '../../component/SimpleChart/SimplePieChart';


class Analysis extends React.Component{

  constructor(props){
    super(props);
  }
  state={
    pieChartData:{}
  }

  componentDidMount(){
    fetch('/chart/getPieChartData')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      this.setState({pieChartData:data.result})
    })
    .catch(e=>console.log(e));
  }

  render(){
    return (
      <div>
        <SimplePieChart  data={this.state.pieChartData}/>
      </div>
    )
  }
}

export default Analysis;