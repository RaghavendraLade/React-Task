import React, { Component } from 'react';
import { Chart } from "react-charts";
import './App.css';

class LineChart extends Component {
  render() {
    if (this.props.data.length > 0) {
      return <div style={{ width: "500px", height: "500px", margin: "10px auto"}}>
        <Chart 
          data={this.props.data}
          axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
          ]}
          tooltip
          primaryCursor
          secondaryCursor
        />
      </div>;
    } else {
      return "";
    }
  }
}

export default LineChart;
