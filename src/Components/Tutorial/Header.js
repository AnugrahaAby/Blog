import React from 'react';
import Button from '@mui/material/Button';

const Header = () => {
    const clickHandle=()=>{
        console.log("You Clicked Me")

    }
    const dbclickHandle=(name)=>{
        alert("Hello"+ name);

    }
    // const onchangeHandle=(name)=>{
    //     alert("Hello"+ name);

    // }
  return (
    <div>
      <h1>Component</h1>
      <button onClick={clickHandle}>Click me</button>
      <h1 onDoubleClick={()=> dbclickHandle("Shafi")}>Double Click</h1>
    </div>
  )
}

export default Header
