import { createSlice } from '@reduxjs/toolkit'

export const TotalSlice = createSlice({
  name: 'total',
  initialState: {
    total: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = TotalSlice.actions

export default TotalSlice.reducer