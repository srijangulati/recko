import React from 'react';
import {AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';


export default class ReckoAreaChart extends React.Component{
  render(){
    return(
      <AreaChart width={this.props.width} height={this.props.height} data={this.props.data}
        margin={{ top: 30, right: 30, left: 30, bottom: 10 }}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="#AED6F1" />
      </AreaChart>
    );
  }
}
