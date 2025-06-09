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
        emptyList: () => initialState,
    }
})

export const { recover, emptyList } = recoverSlice.actions;
export default recoverSlice.reducer