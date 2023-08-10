import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// initial state
const initialState = {
  tasks: [], // Initialize the tasks array here
};

// create slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      console.log('action.payload', action.payload);
      state.tasks.push(action.payload);
    },
    listTask: (state, action) => {
      console.log('action.payload', action.payload);
      state.tasks = action.payload;
    },
    deleteTask: (state, action) => {
      console.log('action.payload', action.payload);
      // delete state.tasks[action.payload];
      state.tasks = state.tasks.filter(
        (item, index) => index !== action.payload,
      );
    },
    updateTask: (state, action) => {
      console.log('action.payload', action.payload);
      // state.tasks[action.payload.index] = action.payload.task;
      state.tasks = state.tasks.map((item, index) => {
        if (index === action.payload.index) {
          return action.payload.task;
        }
        return item;
      });
    },
  },
});

// export actions
export const {addTask, listTask, deleteTask, updateTask} = taskSlice.actions;
// export reducer
export default taskSlice.reducer;
