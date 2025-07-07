import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recoverTodo: [],
}

const recoverSlice = createSlice({
    name: 'recoverTodo',
    initialState,
    reducers: {
        recover: (state, action) => {
            const { id, text, date } = action.payload
            state.recoverTodo.push({ id, text, date })
        },
        deleteItem: (state, action) => {
        state.recoverTodo = state.recoverTodo.filter(item => item.id !== action.payload);
        },
        emptyList: () => initialState,
    }
})

export const { recover, deleteItem, emptyList } = recoverSlice.actions;
export default recoverSlice.reducer