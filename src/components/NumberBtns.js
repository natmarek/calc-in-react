import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border-color: 0.5px gray;
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 30px;
  font-weight: bold;
  line-height: 2.0;
  padding: 0.5em 1em;
  width: ${props => props.primary ? "240px" : "120px"};
  background-color: ${props => props.promary ? "white" : "ebecf1"}
  text-align: center;
  wi
  :hover  {
    cursor: pointer;
  }


`;



const NumberBtns = (props) => {
        return (
            <div>
                
                
                <Button onClick={ ()=> props.onClick(1)}>1</Button>
                <Button onClick={ ()=> props.onClick(2)}>2</Button>
                <Button onClick={ ()=> props.onClick(3)}>3</Button>
                <Button onClick={ ()=> props.onClick('+')}>+</Button><br/>

                <Button onClick={ ()=> props.onClick(4)}>4</Button>
                <Button onClick={ ()=> props.onClick(5)}>5</Button>
                <Button onClick={ ()=> props.onClick(6)}>6</Button>
                <Button onClick={ ()=> props.onClick('-')}>-</Button><br/>

                <Button onClick={ ()=> props.onClick(7)}>7</Button>
                <Button onClick={ ()=> props.onClick(8)}>8</Button>
                <Button onClick={ ()=> props.onClick(9)}>9</Button>
                <Button onClick={ ()=> props.onClick('*')}>x</Button><br/>
                
                
                <Button primary onClick={ ()=> props.onClick(0)}>0</Button>
                <Button onClick={ ()=> props.onClick('.')}>.</Button>
                <Button onClick={ ()=> props.onClick('/')}> / </Button><br/>


        
            </div>


        )

}

export default NumberBtns