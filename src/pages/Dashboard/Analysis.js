import styles from './Monitor.less';
import React from 'react';
import {message,Divider,Col,Row} from 'antd';
import CurveChart from '../../component/SimpleChart/CurveChart';
import SimplePieChart from '../../component/SimpleChart/SimplePieChart';
import CricleListChart from '../../component/SimpleChart/CricleListChart';


class Analysis extends React.Component{

  constructor(props){
    super(props);
  }
  state={
    pieChartData:[],
    waterWave:[],
  }

  componentDidMount(){
    fetch('/chart/getPieChartData')
    .then(res=>res.json())
    .then(data=>{
      if(data.code!=200){
        message.error(data.msg);
      }
      this.setState({pieChartData:data.result})
    })


    fetch('/chart/getCricleListChart')
    .then(res=>res.json())
    .then(data=>{
      if(data!=200){
        message.error(data.msg);
      }

      this.setState({waterWave:data.result})
    })
  }

  render(){
    return (
      <div style={{minHeight:'800px',minWidth:'900px'}}>
        <h3><span>总下单数：1732</span>
        
        </h3>
        <Row>
          <Col span={12}>
            <SimplePieChart  dataSource={this.state.pieChartData}/>
          </Col>
          <Col span={12}>
            <CurveChart/>
          </Col>
        </Row>
        <Divider/>
        <h3>下单/支付 转换率</h3>
        <CricleListChart dataSource={this.state.waterWave}/>
  </div>)}
}

export default Analysis;