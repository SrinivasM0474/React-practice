
import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        alert("child component will be delete")
    }
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}
