import React,{Component} from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';

export default class ReckoPieChart extends Component{
  render(){
    return(
      <PieChart width={this.props.width} height={this.props.height}>
        <Tooltip />
        <Pie data={this.props.data} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    );
  }
}
