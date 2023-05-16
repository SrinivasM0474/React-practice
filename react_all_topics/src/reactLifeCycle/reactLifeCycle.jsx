import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {
    constructor(props){
    super(props);
    this.state={
        favoriteColor:"red",
        delChild: true
    }
    }
    // static getDerivedStateFromProps(props,state){
    // return {favoriteColor : props.favcol}
    // }
    componentDidMount(){
    //this.handleChange("Green")
    console.log('componentDidMount')
    }
    shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoriteColor;
      }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoriteColor;
        console.log('componentDidUpdate')
      }
    handleChange=(color)=>{
        console.log("haiia")
   this.setState({favoriteColor:color})
    }
    deleteCmp=()=>{
        this.setState({delChild:false})
    }
    
  render() {
    const child =this.state.delChild ? <Child/>:" ";
    console.log(this.state.favoriteColor)

    return (
      <div style={{color:this.state.favoriteColor}}>
        color is {this.state.favoriteColor}
        <br></br>
        <button onClick={()=>this.handleChange("Green")}>changeColor</button>
        <div id="div1"></div>
      <div id="div2"></div>
      <div>{child}</div>
      <button onClick={()=>this.deleteCmp()}>deleteComponent</button>
      </div>
    )
  }
}
