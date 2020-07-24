import React, { Component } from 'react';
import './App.css';
import { evaluate} from 'mathjs';
import NumberBtns from './components/NumberBtns'
import Display from "./components/Display"
import CalcBtn from './components/CalcBtn.';
import ResetBtn from './components/ResetBtn';
import styled from 'styled-components'



const Wrapper = styled.section`
  padding: 2em;
  background: #f2eaed;
`;

const Input = styled.input`
  border-radius: 3px;
  padding: 0rem 0;
  margin: 0.5rem 0rem;
  width: 680px;
  height: 170px;
  background: whitesmoke;
  color: black;
  border: 2px solid #192e5b;
  font-size: 70px
`;


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
      <Wrapper>
        {/* <Title>
          <Display result={this.state.result}/>
        </Title> */}
        
        <Input value={this.state.result}/><br/>
        <div className="container">
          <ResetBtn className="grid-item resetBtn" onClick={this.reset} />
          <CalcBtn className="grid-item calcBtn" onClick={this.calc}/>
          <NumberBtns className="grid-item" onClick = {this.handleDisplay} /> 
        </div>
             
      </Wrapper>
    )
  }
}

export default App;
