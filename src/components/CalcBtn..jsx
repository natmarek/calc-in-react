import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border-color: 0.5px gray;
  background-color: #0584f2;
  border-radius: 0.5rem;
  font-size: 30px;
  font-weight: bold;
  line-height: 2.0;
  padding: 0.5em 3.3em;
  text-align: center;
  width:240px;

  :hover  {
    cursor: pointer;
  }
  `



const CalcBtn = props => {
    return (
      <>
        <Button onClick={ ()=> props.onClick()}>=</Button>
      </>
    );
  };

  export default CalcBtn
  