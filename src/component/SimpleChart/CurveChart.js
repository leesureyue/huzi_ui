import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend
} from "bizcharts";
import DataSet from "@antv/data-set";

class Curved extends React.Component {
  render() {
    const ds = new DataSet();
    const dv = ds.createView().source(this.props.dataSource);
    dv.transform({
      type: "fold",
      fields: ["orderCount", "clickCount"],
      // 展开字段集
      key: "city",
      // key字段
      value: "number" // value字段
    });
   
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart 
        height={400}  
        data={dv} scale={cols} forceFit>
          <Legend />
          <Axis name="name" />
          <Axis
            name="number"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="name*number"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="name*number"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Curved;