import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const date = new Date()

const todoSlice = createSlice(
  {
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.unshift({ id: Math.random().toString(), text: action.payload, date: date.toDateString() });
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      recoverAllTodo: (state, action) => {
        state.todos = [...state.todos, ...action.payload]
      },
    },
  }
);

export const { addTodo, deleteTodo, recoverAllTodo } = todoSlice.actions;
export default todoSlice.reducer;