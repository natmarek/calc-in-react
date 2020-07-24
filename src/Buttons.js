import React from 'react'



export default (props) => {
        return (
            <div>
                
                <button onClick={ ()=> props.onClick(1)}>1</button>
                <button nClick={ ()=> props.onClick(2)}>2</button>
                <button onClick={ ()=> props.onClick(3)}>3</button>
                <button onClick={ ()=> props.onClick('+')}>+</button><br/>

                <button onClick={ ()=> props.onClick(4)}>4</button>
                <button onClick={ ()=> props.onClick(5)}>5</button>
                <button onClick={ ()=> props.onClick(6)}>6</button>
                <button onClick={ ()=> props.onClick('-')}>-</button><br/>

                <button onClick={ ()=> props.onClick(7)}>7</button>
                <button onClick={ ()=> props.onClick(8)}>8</button>
                <button onClick={ ()=> props.onClick(9)}>9</button>
                <button onClick={ ()=> props.onClick('*')}> x </button><br/>
        
            </div>


        )

}

