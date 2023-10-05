import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFromLocalStorage<string[]>('favorites') || [],
  reducers: {
    // ADD TO FAVORITES
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
      saveToLocalStorage('favorites', state);
    },

    // REMOVE FROM FAVORITES
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const filteredState = state.filter((id) => id !== action.payload);
      saveToLocalStorage('favorites', filteredState);
      return filteredState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
