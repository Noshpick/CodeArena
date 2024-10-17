import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer'; // Импорт rootReducer

export const store = configureStore({
  reducer: rootReducer,
});

// Типы для использования в проекте
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
