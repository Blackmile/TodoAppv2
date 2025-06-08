import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import doneReducer from './slices/doneSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);
const persistedDoneReducer = persistReducer(persistConfig, doneReducer);

export const store = configureStore({
  reducer: {
    todos: persistedTodoReducer,
    doneTodos: persistedDoneReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
