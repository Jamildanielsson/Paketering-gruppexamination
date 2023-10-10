import { configureStore } from '@reduxjs/toolkit';
import latestMovieReducer from './latestMovieSlice';
import favoritesReducer from './favoritesSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      lastestMovie: latestMovieReducer, // string.
      favorites: favoritesReducer, // [].
    },
  });
};

// För att redux ska funka med ts...
export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
