import React from 'react';
import Line from './charts/line';
import Area from './charts/area';
import Pie from './charts/pie';
import Bar from './charts/bar';

export default class Charts extends React.Component{
  state={
    height:10,
    width:30
  }
  static getDerivedStateFromProps(props,state){
    if(props.chartRef.current)
      return {
        width: props.chartRef.current.parentNode.clientWidth,
        height: props.chartRef.current.parentNode.clientHeight
      }
    return state;
  }

  render(){
    switch (this.props.type) {
      case '':
          return (<div/>);
      case 'line':
          return (<Line width={this.state.width} height={this.state.height} data={this.props.data}/>);
      case 'area':
          return(<Area width={this.state.width} height={this.state.height} data={this.props.data}/>);
      case 'pie':
          return(<Pie width={this.state.width} height={this.state.height} data={this.props.data}/>);
      case 'bar':
          return(<Bar width={this.state.width} height={this.state.height} data={this.props.data}/>);
      default:
        return (<div/>)

    }
  }
}
