import { setLatestMovie } from '../redux/latestMovieSlice';
import { Dispatch } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

/**
 * A function that updates the latest movie in the Redux store and navigates to movie view page.
 * @param movieTitle {string} - The title of the movie to set as the latest movie.
 * @param navigate {Function} - A function used to navigate to other views
 * @param dispatch {Function} - A function used to dispatch Redux actions.
 */
export function getClickedMovieAndNavigate(
  movieTitle: string,
  navigate: (path: string) => void,
  dispatch: Dispatch<PayloadAction<ILatestMovie>>
) {
  try {
    dispatch(setLatestMovie({ latestMovie: movieTitle }));
  } catch (error) {
    console.error('Failed to dispatch setLatestMovie action...', error);
  }

  try {
    navigate('/paketering-gruppexamination/movieview/');
  } catch (error) {
    console.error('Failed to navigate...', error);
  }
}
