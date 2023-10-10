import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../utils/localStorage';

const initialState: ILatestMovie = {
  latestMovie: loadFromLocalStorage('latestMovie') || '',
};

const latestMovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setLatestMovie: (state, action: PayloadAction<ILatestMovie>) => {
      state.latestMovie = action.payload.latestMovie;
      saveToLocalStorage('latestMovie', state.latestMovie); // save to localStorage
    },
  },
});

export const { setLatestMovie } = latestMovieSlice.actions;

export default latestMovieSlice.reducer;
