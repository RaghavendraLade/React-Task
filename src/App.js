import React, { Component } from 'react';
import './App.css';
import LineChart from './lineChart';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {data: [], showError: false};
  }
  
  handleChange(selectorFiles) {
    var file = selectorFiles[0];
    const showError = '.csv' !== (file.name).substring((file.name).lastIndexOf('.'));
    this.setState({
      data: [],
      showError: showError
    });
    if (!showError) {
      var reader = new FileReader();
      reader.onload = (function (event) {
        const result = event.target.result.split('\n');
        const chartData = [];
        result.forEach(ele => {
          const chartItems = ele.split(',');
          const chartItem = {
            label: chartItems.shift(),
          }
          chartItem['data'] = chartItems.map(e => e.split('|'))
                                            .sort((a, b) => (a[0] < b[0]) ? -1 : (a[0] > b[0]) ? 1 : 0 );
          chartData.push(chartItem);
        });
        this.setState({
          data: chartData
        });
      }).bind(this);
      reader.readAsText(file);
    }
  }

  render() {
    return (
      <div className="App">
        Choose a CSV file : <input type="file" accept=".csv" onChange={(e) => this.handleChange(e.target.files)} />
        <div style={{textAlign: "center", color:"red"}}>{(this.state.showError) && "Please choose a valid CSV file"}</div>
        <LineChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
