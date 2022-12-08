import React, {useState} from 'react'
import {useDispatch, useSelector, } from 'react-redux'
import { decrement, increment, incrementByAmount, updateIncrementByAmount } from "../redux/slice/counterSlice";

const Counter = () => {
   const [incrementAmount, setIncrementAmount]= useState(33)
   const dispatch= useDispatch()
   const {count} = useSelector((state)=> state.counter)
   
   const handleUpdateAmount=(e)=>{
    setIncrementAmount(e.target.value)
    console.log('incrementAmount - ', incrementAmount)
   }

  return (
    <div>
         <h2> The count value is : {count} </h2>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(incrementAmount))}>Increment by {incrementAmount}</button><br/><br/>
        <input placeholder="update incrementByAmount"  type='number' onChange={handleUpdateAmount}/>
        <button onClick={()=> dispatch(updateIncrementByAmount(incrementAmount))}>Submit</button><br/><br/>

    </div>
  )
}

export default Counter