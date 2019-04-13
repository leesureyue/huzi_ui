import React from 'react';
import G2 from '@antv/g2';

//直方图
class SimpleColumnChart extends React.Component{
  constructor(props){
    super(props);
    this.containerRef=React.createRef();
  }

  componentDidMount(){
    this.chart = new G2.Chart({
      container: this.containerRef.current,
      width: 450,
      height: 320
    });
    this.refreshChart();
    
  }

  componentDidUpdate(prevProps){
    if(prevProps!=this.props.dataSource){
      this.refreshChart();
    }
  }
  componentWillUnmount(){
    if(this.chart){
      this.chart.destroy();
    }
  }

  refreshChart = () => {
    this.chart.source(this.props.dataSource);
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  };

  render(){
    return(
      <div ref={this.containerRef}></div>
    )
  }
}

export default SimpleColumnChart;
