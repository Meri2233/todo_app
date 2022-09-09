import { createSlice } from '@reduxjs/toolkit'

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [{
      id: 333434344,
      content: {
        taskname: "dance",
        mark: "", 
        color: "transparent",
        display: "flex"
      },
      isComplete: false
    }]
  },
  reducers: {
    addlist: (state, action) => {
      let obj = {
        id: new Date(),
        content: { taskname: action.payload, mark: "", color: "transparent", display: "flex" },
        isComplete: false
      }
      state.list.push(obj);
    },
    addcheck: (state, action) => {
      state.list.map(el => {
        if (el.id === action.payload) {
          el.content.mark = "✔";
          el.content.color = "green";
          el.isComplete = true;
          return el;
        }
      })
    },
    showall: (state, action) => {
      state.list.map(el => {
        el.content.display = "flex";
        return el;
      })
    },
    showcompleted: (state, action) => {
      state.list.map(el => {
        if (el.isComplete) {
          el.content.display = "flex";
        }
        else {
          el.content.display = "none";
        }
        return el;
      })
    },
    showactive: (state, action) => {
      state.list.map(el => {
        if (!el.isComplete) {
          el.content.display = "flex";
        }
        else {
          el.content.display = "none";
        }
        return el;
      })
    },
    clearcompleted: (state, action) => {
      state.list.map((el, index) => {
        if (el.isComplete) {
          state.list.splice(index, 1);
        }
        return el;
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addlist, addcheck, showall, showcompleted, showactive, clearcompleted } = TaskSlice.actions

export default TaskSlice.reducer