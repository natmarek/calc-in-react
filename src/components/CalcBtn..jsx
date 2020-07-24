import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border-color: 0.5px gray;
  background-color: #0584f2;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  line-height: 2.0;
  padding: 1.5em 5.3em;
  text-align: center;
  `



const CalcBtn = props => {
    return (
      <>
        <Button onClick={ ()=> props.onClick()}>=</Button>
      </>
    );
  };

  export default CalcBtn
  