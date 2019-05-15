import styles from './Analysis.less';
import React from 'react';
import {message,Card} from 'antd';
import CurveChart from '../../component/SimpleChart/CurveChart';
import CricleListChart from '../../component/SimpleChart/CricleListChart';
import WorldMap from '../../component/SimpleChart/WorldMap';



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
      message.success('success')
      this.setState({curveChart:data})
    })


    fetch('/get/pay/conversion/rate')
    .then(res=>res.json())
    .then(data=>{
      
     this.setState({waterWave:data})
    })
  }

  render(){
    return (
      <div className={styles.pageContent} style={{minHeight:'800px',minWidth:'900px'}}>
          
      <Card
        title="AQI级别分布图"
        extra={<a href="#">了解更多</a>}
        className={styles.curveChartStyle}
      >
        <WorldMap/>
        </Card>
    </div>)}
}

export default Analysis;