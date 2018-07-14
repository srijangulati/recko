import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';


export default class ReckoBarChart extends React.Component{
  render(){
    return(
      <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
        margin={{top: 30, right: 30, left: 30, bottom: 10}}
      >
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  }
}
