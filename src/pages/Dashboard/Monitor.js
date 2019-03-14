import styles from './Monitor.less';
import React from 'react';
import {DatePicker,Row,Col,Badge ,Tabs,Card,message} from 'antd';
import SimpleColumnChart from '../../component/SimpleChart/SimpleColumnChart';
import SimpleBarChart from '../../component/SimpleChart/SimpleBarChart';
import SimplePieChart from '../../component/SimpleChart/SimplePieChart';
import SmallTable from '../../component/SmallTable';

const {  RangePicker } = DatePicker;
class TabCard extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
     
    return(
      <Tabs tabBarExtraContent={<RangePicker/>}>
        <Tabs.TabPane tab="Session访问" key="1">
        <Row>
          <Col span={16}>
            <SimpleColumnChart  dataSource={this.props.columnChartData}/>
          </Col>
          <Col span={8}>
            <h3>Session 排行榜</h3>
            <div>
              {
                this.props.columnChartData && 
                (this.props.columnChartData.map(item=>(
                  <div key={item.id}>
                    <Badge count={item.id} />
                    <span>{item.genre}</span>
                    <span>{item.sold}</span>
                  </div>
                )))
              }
            </div>
          </Col>
        </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="页面单跳转换率" key="2">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
      </Tabs>
  )
} 
}

//直方图分析页面
class Monitor extends React.Component{

  constructor(props){
    super(props);
  }
  state={
    columnChartData:[],
    barChartData:[],
    pieChartData:[],
    tableData:[]
  }

  componentDidMount(){
    
    fetch('/chart/getColumnChartData')
    .then(res=>res.json())
    .then(data=>{
      this.setState({columnChartData:data.result})
    })
    .catch(e=>console.log(e));

    fetch('/chart/getBarChartData')
    .then(res=>res.json())
    .then(data=>{
      if(data.code!=200){
        message.error(data.msg);
      }
      this.setState({barChartData:data.result});
    })

    fetch('/chart/getPieChartData')
    .then(res=>res.json())
    .then(data=>{
      if(data.code!=200){
        message.error(data.msg);
      }
      this.setState({pieChartData:data.result})
    })
  }

  render(){
     
    return (
      <div style={{minHeight:'800px'}}>
        <TabCard columnChartData={this.state.columnChartData}
        barChartData={this.state.barChartData}/>
        <Row>
          <Col span={12}>
          <Card size='small'
              title="TOP 10热门品类"
              extra={<a href="#">More</a>}>
              <SmallTable tableData={this.state.tableData}/>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small'
              title="销售额类别占比"
              extra={<a href="#">More</a>}>
              <SimplePieChart dataSource={this.state.pieChartData}/>
            </Card>
          </Col>
        </Row>
    </div>
    )
  }
}

export default Monitor;