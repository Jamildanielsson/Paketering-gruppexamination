import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ILatestMovie = {
  latestMovie: '',
};

const latestMovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setLatestMovie: (state, action: PayloadAction<ILatestMovie>) => {
      state.latestMovie = action.payload.latestMovie;
    },
  },
});

export const { setLatestMovie } = latestMovieSlice.actions;

export default latestMovieSlice.reducer;
