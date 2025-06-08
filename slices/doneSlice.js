import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doneTodos: [],
};


const doneSlice = createSlice({
  name: 'doneTodos',
  initialState,
  reducers:{
    addCompleted: (state, action) => {
      const { id, text } = action.payload
      state.doneTodos.push({ id, text, date: Date() })
    },
    resetDone: () => initialState,
  },
})

export const { addCompleted, resetDone } = doneSlice.actions;
export default doneSlice.reducer;