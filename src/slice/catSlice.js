import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// initial state
const initialState = {
  cats: [], // Initialize the cats array here
};

// create slice
const catSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    addCat: (state, action) => {
      console.log('action.payload', action.payload);
      state.cats.push(action.payload);
    },
    listCat: (state, action) => {
      console.log('action.payload', action.payload);
      state.cats = action.payload;
    },
    deleteCat: (state, action) => {
      console.log('action.payload', action.payload);
      // delete state.cats[action.payload];
      state.cats = state.cats.filter(
        (item, index) => index !== action.payload,
      );
    },
    updateCat: (state, action) => {
      console.log('action.payload', action.payload);
      // state.cats[action.payload.index] = action.payload.cat;
      state.cats = state.cats.map((item, index) => {
        if (index === action.payload.index) {
          return action.payload.cat;
        }
        return item;
      });
    },
  },
});

// export actions
export const {addCat, listCat, deleteCat, updateCat} = catSlice.actions;
// export reducer
export default catSlice.reducer;
