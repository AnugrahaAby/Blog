// UseEffect Hook is used to perform side effects in function components.(modify outside its body)
// eg: fetching Data, Update Domain,Console.log
// UseEffect do? component needs to do something after render.UseEffectruns after every render by default.


import React,{useState, useEffect} from 'react'

const Effects = () => {
    const[counter,setCounter]=useState(0)
    const[counter1,setCounter1]=useState(0)
    useEffect(()=>{
        {console.log("Side Effects")}
      },  [counter]) 
  return (
    <div>

   <div>
   <h1>{counter}</h1>
   <button onClick={()=>setCounter(counter+1)}type="button">+</button>
   {console.log("Side Effects")}
   </div>

   <div>
   <h1>{counter1}</h1>
   <button onClick={()=>setCounter1(counter1+1)}type="button">+</button>
   {console.log("Side Effects")}
   </div>

   </div>
  )
}
export default Effects;
