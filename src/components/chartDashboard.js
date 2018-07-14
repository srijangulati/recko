import React,{Component} from 'react';
import Charts from './charts';

const TYPES={
  Line:'line',
  Area:'area',
  Pie:'pie',
  Bar:'bar'
};

export default class ChartDashboard extends Component{
  state = {
    type:(localStorage.charts)?JSON.parse(localStorage.charts)[this.props.mapKey]:'',
    height:0,
    width:0
  }

  _chartRef = React.createRef()

  renderChart(){
    return (
      <Charts resizing={this.props.resizing} type={this.state.type} chartRef={this._chartRef} data={this.props.data}/>
    );
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        type:this.state.type
      })
    }, 0);
  }

  setChartType=(type)=>{
    this.setState({
      type:type
    })
    if(!localStorage.charts){
      localStorage.setItem('charts',"{}");
    }
    let charts = JSON.parse(localStorage.charts);
    charts[this.props.mapKey]=type;
    localStorage.setItem('charts',JSON.stringify(charts));
  }

  renderButtons(){
    return Object.keys(TYPES).map((k,i)=><button key={i} onClick={()=>{this.setChartType(TYPES[k])}}>{k}</button>)
  }

  render(){
    return (
      <div ref={this._chartRef}>
      {this.renderButtons()}
      <button onClick={()=>{this.props.removeLayout(this.props.mapKey)}}>Remove</button>
        {this.state.type?this.renderChart():''}
      </div>
    );
  }
}
