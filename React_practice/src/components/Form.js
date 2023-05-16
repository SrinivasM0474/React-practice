import React from "react";
import { useNavigate } from "react-router-dom";
import FormData from "./FormData";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormData: [],
      userObj: {
        name: "",
        email: "",
        mobile: "",
        address: "",
      },
    };
  }

  // componentDidMount(){
  //   console.log('componentDidMount')
  // }

  // static getDerivedStateFromProps(){
  //   return true;
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }

  inputHandler(e) {
    this.setState({
      userObj: { ...this.state.userObj, [e.target.name]: e.target.value },
    });
  }
  clearInputFileds() {
    this.setState({
      userObj: { name: "", email: "", mobile: "", address: "" },
    });
  }
  submitHandler() {
    const obj = this.state.userObj;
    const userArr = this.state.FormData;
    userArr.push(obj);
    this.setState({ FormData: userArr });
    this.clearInputFileds();
  }
  render() {
    return (
      <>
        <h4>User Form</h4>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.userObj.name}
            onChange={(e) => {
              this.inputHandler(e);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={this.state.userObj.email}
            onChange={(e) => {
              this.inputHandler(e);
            }}
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="number"
            placeholder="mobile"
            name="mobile"
            value={this.state.userObj.mobile}
            onChange={(e) => {
              this.inputHandler(e);
            }}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="address"
            name="address"
            value={this.state.userObj.address}
            onChange={(e) => {
              this.inputHandler(e);
            }}
          />
        </div>
        <button onClick={this.submitHandler.bind(this)}>submit</button>
        {this.state.FormData && <FormData formData={this.state.FormData} />}
      </>
    );
  }
}

export default Form;
