import React, { Component } from 'react';
import './App.css';
let chardata = [];
class LoadChat extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectorFiles) {
    var file = selectorFiles[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      // The file's text will be printed here
      console.log(event.target.result)
    };

    reader.readAsText(file);

    //console.log(selectorFiles);
  }
  getChatData() {
    var sin = [],
      cos = [];

    for (var i = 0; i < 100; i++) {
      sin.push({ x: i, y: Math.sin(i / 10) });
      cos.push({ x: i, y: .5 * Math.cos(i / 10) });
    }

    chardata = [
      {
        values: sin,
        key: 'Sine Wave',
        color: '#ff7f0e'
      },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#2ca02c'
      }
    ];
  }

  render() {
    return <div>
      <div id="lineChart"></div>
      <input type="file" onChange={(e) => this.handleChange(e.target.files)} />
      <NVD3Chart id="lineChart" type="lineChart" datum={chardata} x="label" y="value" />
    </div>;
  }
}

export default LoadChat;
