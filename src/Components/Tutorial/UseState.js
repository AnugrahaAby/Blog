import React, { useState } from 'react';
import Button from '@mui/material/Button'

const UseState = () => {
const [colour,setColour]=useState("Green");
const [count,setCount]=useState(0);

const changeColour=()=>{
    setColour("Red");
};
const increment =()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
}


  return (
    <div>
      <h1>My favourite color is {colour}</h1>
      <Button onClick={changeColour}> Change Color</Button> 
      <br></br>

      <h1>Counter is{count}
        <Button  onClick={increment}className='m-2 bg-success'>+</Button>
        <Button onClick={decrement}className='m-2 bg-success'>-</Button>
      </h1>
    </div>
  )
}

export default UseState
