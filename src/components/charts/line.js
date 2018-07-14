import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';


export default class ReckoLineChart extends React.Component{
  render(){
    return(
      <LineChart width={this.props.width} height={this.props.height} data={this.props.data}
            margin={{top: 30, right: 30, left: 30, bottom: 10}}>
       <XAxis dataKey="label"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 0}}/>
      </LineChart>
    );
  }
}
