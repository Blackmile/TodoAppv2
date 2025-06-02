import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  doneTodos: [],
};


const todoSlice = createSlice(
  {
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push({ id: Math.random().toString(), text: action.payload, date: Date() });
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      addCompleted: (state, action) => {
        const { id, text } = action.payload
        state.doneTodos.push({ id, text, date: Date() })
      },
    },
  }
);

export const { addTodo, deleteTodo, addCompleted } = todoSlice.actions;
export default todoSlice.reducer;