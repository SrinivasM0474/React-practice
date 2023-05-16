import React, { Component } from 'react';
import ChildTable from './ChildTable';

export default class FormCmp extends Component {
    constructor(props){
        super(props);
       this.state = {
        formData:[],
        obj:{name:'',
             email:'',
            mobileNumber:0,
            address: ''
              }
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this)
    }
     handleChange =(e)=>{
        //console.log(e.target.name, e.target.value)
     this.setState({obj:{...this.state.obj,[e.target.name]:e.target.value}})
     
    }
    handleSubmit =(e)=>{
   e.preventDefault();
   const formArray = this.state.formData;
   formArray.push(this.state.obj);
   this.setState({FormData: formArray})
   this.setState({obj:{name:'',
   email:'',
  mobileNumber:0,
  address: ''
    }})
    }
  render() {
    //console.log(this.state.formData)
    return (
      <div>
        <p>Useing ClassComponent, FunctionComponent,Props,Stats,List,Keys, React Events, Data Handling</p>
        <h3>Employee Form</h3>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name: &nbsp; &nbsp; &nbsp; </label>
                <input type="text" value={this.state.obj.name} name='name' onChange={(e)=>this.handleChange(e)} />
            </div>
            <div>
                <label>email: &nbsp; &nbsp; &nbsp;</label>
                <input type="email" name='email' value={this.state.obj.email} onChange={(e)=>this.handleChange(e)} />
            </div>
            <div>
                <label>mobileNumber: &nbsp; &nbsp; &nbsp;</label>
                <input type="number" name='mobileNumber' value={this.state.obj.mobileNumber} onChange={(e)=>this.handleChange(e)} />
            </div>
            <div>
                <label>Address: &nbsp; &nbsp; &nbsp;</label>
                <textarea type='textArea' name='address' value={this.state.obj.address} col={3} onChange={(e)=>this.handleChange(e)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
        { this.state.formData?.length>0 &&
        <ChildTable data={this.state.formData} />
      }
      </div>
      

    )
  }
}
