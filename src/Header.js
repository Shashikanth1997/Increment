import React, { Component } from 'react'

export class Header extends Component { 
    constructor(){
        super()
        this.state= {
            count:0,
        }
    } 
    HandleIncrement = () =>{
        this.setState({
            count:this.state.count+1,
        })
    }
    HandleDecrement = () =>{
        this.setState({
            count:this.state.count-1,
        })
    }
    HandleReset = () =>{
        this.setState({
            count:0,
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.HandleIncrement}>Increment</button> 
        <button onClick={this.HandleDecrement}>Decrement</button> 
        <button onClick={this.HandleReset}>Reset</button> 
         
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default Header