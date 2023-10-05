import { configureStore } from '@reduxjs/toolkit';
import latestMovieReducer from './latestMovieSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    lastestMovie: latestMovieReducer, // string.
    favorites: favoritesReducer, // [].
  },
});

// För att redux ska funka med ts...
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
