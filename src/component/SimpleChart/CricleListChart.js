import * as React from 'react';
import { Chart, Guide, Tooltip, Interval } from 'viser-react';

const scale = [
  {
    dataKey: 'value',
    min: 0,
    max: 100,
  },
];

class CricleListChart extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <Chart
        container="mountNode"
        forceFit={true}
        height={200}
        width={300} 
        data={this.props.dataSource}
        padding={0}
        scale={scale}
      >
        <Tooltip />
        <Interval
          position="gender*value"
          color="gender"
          shape="liquid-fill-gauge"
          style={{
            lineWidth: 5,
            opacity: 0.8,
          }}
        />
        {this.props.dataSource.map((row, index) => {
           
          return (  
            <Guide
            key={index}
            type="text"
            top={true}
            position={{
              gender: row.gender,
              value: 50,
            }}
            content={row.value + '%'}
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}>
            </Guide>  
             
          );
        })}
      </Chart>
    );
  }
}

export default CricleListChart;


