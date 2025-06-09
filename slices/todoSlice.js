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
        state.todos.push({ id: Math.random().toString(), text: action.payload, date: date.toDateString() });
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      resetTodos: () => initialState,
    },
  }
);

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;