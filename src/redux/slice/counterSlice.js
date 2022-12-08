import {createSlice} from "@reduxjs/toolkit"

export const counterSlice= createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment : (state)=>{
      state.count += 1
    },
    decrement : (state)=>{
        state.count -= 1
      },
    incrementByAmount : (state, action)=>{
        state.count += action.payload
      },
    updateIncrementByAmount : (state, action)=>{
      // console.log('reducers action.payload - ', action.payload)
      // console.log('reducers state.count - ', state.count)

          state.count += action.payload
      },
   }

})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, updateIncrementByAmount} = counterSlice.actions

export default counterSlice.reducer