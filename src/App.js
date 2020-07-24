import React, { Component } from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import Buttons from './Buttons'
import Display from './Display'




class App extends Component {
  state ={
    result: ""
  }


  handleDisplay= (num) => {
    const {result}=this.state
    this.setState({ 
      result: result + String(num)
      
    })
  }
 
  reset = () => {
    this.setState({
      result: "0"
    })}



  calc = () => {
    const {result}=this.state
    this.setState({ result: evaluate(result)})
  }


  render() {
    // let value = this.state.result
    return (
      <div>
        {/* <h1>{value}</h1> */}
        <Display result={this.state.result}/>
        <input value={this.state.result}/><br/>
        <button onClick={() =>this.calc()}> = </button>
        <button onClick={()=>this.reset()}>C</button><br/>
        <Buttons onClick = {this.handleDisplay} />      
      </div>
    )
  }
}

export default App;
