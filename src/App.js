import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './components/grid';
import EditData from './components/editData';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const LAYOUTOBJECT = {i: '', x: 0, y: 0, w: 4, h: 2};

class App extends Component {
  state={
    layout:[
      {i: '0', x: 0, y: 0, w: 4, h: 2}
    ],
    data:[
      {
        label: 'Expected',
        value: 1000000,
      },
      {
        label: 'Reality',
        value: 200000,
      },
      {
        label: 'In Hand',
        value: 150000,
      }
    ],
    openEdit:false
  }

  layoutCount=0

  setData=(data)=>{
      this.setState({
        data:data
      });
      localStorage.setItem('data',JSON.stringify(data));
  }

  constructor(props){
    super(props);
    if(localStorage.layout){
      let layout = JSON.parse(localStorage.layout);
      this.layoutCount = parseInt(layout[layout.length-1].i)+1;
      this.state={
        layout:layout,
        data:(localStorage.data)?JSON.parse(localStorage.data):[
          {
            label: 'Expected',
            value: 1000000,
          },
          {
            label: 'Reality',
            value: 200000,
          },
          {
            label: 'In Hand',
            value: 150000,
          }
        ],
        openEdit:false
      }
    }
  }

  addLayout=()=>{
    this.layoutCount+=1;
    let dummyLayout = Object.assign({},LAYOUTOBJECT);
    dummyLayout.i = this.layoutCount.toString();
    this.state.layout.push(dummyLayout);
    this.setState({
      layout:this.state.layout,
    })
  }

  removeLayout=(id)=>{
    this.setState({
      layout:this.state.layout.filter((l)=>l.i!=id)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.addLayout}>ADD Dasboard</button>
          <button onClick={()=>{this.setState({openEdit:true})}}>ADD Chart Data</button>

        </header>
        <Grid layout={this.state.layout} removeLayout={this.removeLayout} data={this.state.data}/>
        <EditData open={this.state.openEdit} data={this.state.data} onClose={()=>{this.setState({openEdit:false})}} setData={this.setData}/>
      </div>
    );
  }
}

export default App;
