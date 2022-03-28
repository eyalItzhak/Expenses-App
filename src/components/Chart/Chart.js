import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint =>dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue); //what (2,3,7,...) get arry and make it like that


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};
export default Chart;
