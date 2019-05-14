import styles from './Monitor.less';
import React from 'react';
import {DatePicker,Row,Col,Badge ,Tabs,Tag,Card,message} from 'antd';
import SimpleColumnChart from '../../component/SimpleChart/SimpleColumnChart';
import SimpleBarChart from '../../component/SimpleChart/SimpleBarChart';
import SimplePieChart from '../../component/SimpleChart/SimplePieChart';
import SmallTable from '../../component/SmallTable';

class TabCard extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){ 
    return(
      <Tabs className={styles.tabList}>
        <Tabs.TabPane tab="淮北市" 
        key="1">
        <Row>
          <Col span={16}>
            <SimpleColumnChart  
            dataSource={this.props.columnChartData}/>
          </Col>
          <Col span={8}>
            <h3>Session 访问时长排行榜</h3>
            <div>
              {
                this.props.sessionData && 
                (this.props.sessionData.map(item=>(
                  <div key={item.id} 
                  className={styles.sessionDiv}>
                  <Badge count={item.id}/>
                  <Tag className={styles.tagStyle}
                  color={item.id<4?"magenta":"geekblue"}>{item.genre}</Tag>
                  <span>{item.sold}</span>
                  </div>
                )))
              }
            </div>
          </Col>
        </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="徐州市" key="2">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="宿迁市" key="3">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="连云港市" key="4">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="枣庄市" key="5">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="济宁市" key="6">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="商丘市" key="7">
          <SimpleBarChart dataSource={this.props.barChartData}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="宿州市" key="8">
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
    sessionData:[],
    pieChartData:[],
    tableData:[]
  }

  getData=(city)=>{
    fetch('http://api.help.bj.cn/apis/aqi/?id='+city)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

  }
  
  
  componentDidMount(){ 
    this.getData('长春');
    fetch('/chart/getColumnChartData')
    .then(res=>res.json())
    .then(data=>{
      this.setState({columnChartData:data})
    }).catch(e=>console.log(e));

    fetch('/chart/getColumnChartData/rank')
    .then(res=>res.json())
    .then(data=>{
       
      this.setState({sessionData:data})
    }).catch(e=>console.log(e));


    fetch('/chart/getPieChartData')
    .then(res=>res.json())
    .then(data=>{ 
      this.setState({pieChartData:data})
    }).catch(e=>console.log(e));
  }

  render(){
     
    return (
      <div    
      className={styles.pageContent}>
        <TabCard 
        columnChartData={this.state.columnChartData}
        sessionData={this.state.sessionData}
        barChartData={this.state.barChartData}
        />

        <Row>
          <Col span={12} >
            <Card size='small'
            className={styles.smallTable}
              title="TOP 10热门品类"
              extra={<a href="#">更多</a>}>
              <SmallTable tableData={this.state.tableData}/>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small'
            className={styles.pieChart}
              title="TOP10商品点击占比"
              extra={<a href="#">More</a>}>
              <SimplePieChart 
              height={300}
              dataSource={this.state.pieChartData}/>
            </Card>
          </Col>
        </Row>
    </div>
    )
  }
}

export default Monitor;