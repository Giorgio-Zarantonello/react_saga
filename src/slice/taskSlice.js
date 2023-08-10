import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    tasks : [],
}

// create slice
const taskSlice = createSlice({
    name : 'task',
    initialState, 
    reducers: {
        addTask : (state, action) => {
            state.tasks.push(action.payload);
        },
    },
})

// export actions
export const {addTask} = taskSlice.actions;
// export reducer
export default taskSlice.reducer;


