import styles from './Monitor.less';
import React from 'react';
import {Row,Col ,Tabs} from 'antd';
import SimpleColumnChart from '../../component/SimpleChart/SimpleColumnChart';
import CurveChart from '../../component/SimpleChart/CurveChart';
import MeterShart from '../../component/SimpleChart/MeterChart';


const cities=["淮北",
    "徐州",
    "宿迁",
    "连云港",
    "枣庄",
    "济宁",
    "商丘",
    "宿州"];

//直方图分析页面
class Monitor extends React.Component{

  constructor(props){
    super(props);
  }
  state={ 
    aqi:0,
    citydata:[],
  }


  getData=(city)=>{
    fetch('http://api.help.bj.cn/apis/aqi/?id='+city)
    .then(res=>res.json())
    .then(data=>{
      data.data.map((value)=>{
         value.aqi= parseInt(value.aqi);
         value.pm25=parseInt(value.pm25);
         value.lv=parseInt(value.lv);
         return value;
      })
      this.setState({
        citydata:data.data,
        aqi:data.aqi});
    }) 
  } 

  callback=(key)=>{
    this.getData(cities[key])
  }
  componentDidMount(){ 
    this.getData('徐州');
  }

  render(){ 
    return (
      <div    
        className={styles.pageContent}> 
         <Tabs className={styles.tabList}
         onChange={this.callback}>
          {
            cities.map((data,i)=>{
              return (
                
                <Tabs.TabPane tab={data} 
                key={i}>
                <Row>
                  <Col span={8} >
                    <MeterShart aqi={this.state.aqi}/>
                  </Col>
                  <Col span={16} >
                    <h2>{data}市AQI指数直方图分析</h2>
                    <SimpleColumnChart  
                    citydata={this.state.citydata}/>
                  </Col>
                </Row>
                <h3>AQI与PM2.5分析图</h3>
                <CurveChart 
                dataSource={this.state.citydata}/>
                </Tabs.TabPane>
              )
            })
          } 
      </Tabs>
    </div>
    )
  }
}

export default Monitor;