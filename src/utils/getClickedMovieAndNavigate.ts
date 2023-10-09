import { setLatestMovie } from '../redux/latestMovieSlice';
import { Dispatch } from 'redux';

/**
 * A function that updates the latest movie in the Redux store and navigates to movie view page.
 * @param movieTitle {string} - The title of the movie to set as the latest movie.
 * @param navigate {Function} - A function used to navigate to other vievs
 * @param dispatch {Function} - A function used to dispatch Redux actions.
 */
export function getClickedMovieAndNavigate(
  movieTitle: string,
  navigate: (path: string) => void,
  dispatch: Dispatch
) {
  dispatch(setLatestMovie({ latestMovie: movieTitle }));

  navigate('/paketering-gruppexamination/movieview/');
}
