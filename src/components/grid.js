import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ChartDashboard from './chartDashboard';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Grid extends React.Component {

  state={
    resizing:false
  }

  onResize=(val)=>{
    this.setState({
      resizing:val
    })
  }

  saveResize(layout){
    localStorage.setItem("layout",JSON.stringify(layout));
  }

  renderDashboards(){
    return this.props.layout.map((l,index)=><div key={l.i}><ChartDashboard data={this.props.data} resizing={this.state.resizing} mapKey={l.i} removeLayout={this.props.removeLayout}/></div>)
  }

  render() {
    let layouts = {lg:this.props.layout}
    return (
      <ResponsiveGridLayout className="layout" layouts={layouts}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} onResizeStop={()=>{this.onResize(false)}} onResizeStart={()=>{this.onResize(true)}} onResize={this.saveResize}>
        {this.renderDashboards()}
      </ResponsiveGridLayout>
    )
  }
}
