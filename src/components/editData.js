import React,{Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class ReckoModal extends Component{
  state={
    data:JSON.stringify(this.props.data),
    error:''
  }

  isJson(str) {
    let res;
    try {
      res=JSON.parse(str);
    } catch (e) {
        return false;
    }
    return res;
  }
  save=()=>{
    let result = this.isJson(this.state.data);
    if(result){
      this.props.setData(result);
      this.props.onClose();
    }
    else{
      this.setState({
        error:'please set a valid JSON data'
      })
    }
  }
  onChange=(event)=>{
    this.setState({data: event.target.value});
  }
  render(){
    return(
      <Modal
            isOpen={this.props.open}
            onRequestClose={this.props.onClose}
            style={customStyles}
            contentLabel="Edit Data"
          >
          <div>
            <textarea rows="24" cols="50" value={this.state.data} onChange={this.onChange}>
            </textarea>
          </div>
          <div>
            <button onClick={this.save}>Save</button>
            {this.state.error}
          </div>
      </Modal>
    );
  }
}
