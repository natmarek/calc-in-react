import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  background-color: #0aaff1;
  border-color: 0.5px gray;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  line-height: 2.0;
  padding: 0.5em 3.3em;
  text-align: center;
  width: 240px;
  :hover  {
    cursor: pointer;
  }`




const ResetBtn = props => {
    return (
      <>
        <Button onClick={ ()=> props.onClick()}>C</Button>
      </>
    );
  };

  export default ResetBtn
  