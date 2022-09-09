import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from "./slice/TaskSlice"
import TotalReducer from "./slice/TotalSlice"

export default configureStore({
  reducer: {
    task: TaskReducer,
    total: TotalReducer
  },
})