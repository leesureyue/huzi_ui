import styles from './Analysis.less';
import React from 'react';
import {message,Card} from 'antd';
import CurveChart from '../../component/SimpleChart/CurveChart';
import CricleListChart from '../../component/SimpleChart/CricleListChart';


class Analysis extends React.Component{

  constructor(props){
    super(props);
  }
  state={
    curveChart:[],
    waterWave:[],
  }

  componentDidMount(){ 
    fetch('/chart/getCurveChart')
    .then(res=>res.json())
    .then(data=>{
      if(data.code!=200){
        message.error(data.msg);
      }
      this.setState({curveChart:data})
    })


    fetch('/get/pay/conversion/rate')
    .then(res=>res.json())
    .then(data=>{
      if(data!=200){
        message.error(data.msg);
      }
     this.setState({waterWave:data})
    })
  }

  render(){
    return (
      <div className={styles.pageContent} style={{minHeight:'800px',minWidth:'900px'}}>
          
      <Card
        title="下单转换率"
        extra={<a href="#">了解更多</a>}
        className={styles.curveChartStyle}
      >
        <CurveChart  
        dataSource={this.state.curveChart}/>
      </Card>
       <div className={styles.circleChartStyle}>
       <CricleListChart
        className={styles.chart}
        dataSource={this.state.waterWave}
        />
       </div>
    </div>)}
}

export default Analysis;