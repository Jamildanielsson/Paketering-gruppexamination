import { addToFavorites, removeFromFavorites } from '../redux/favoritesSlice';
import { Dispatch } from 'redux';

/**
 *	Checks if your movie you click on is favorite and remove or add is depending on that.
 * @param movieTitle  The movie title we click on.
 * @param favorites The favorites array from redux
 * @param dispatch The dispatch function from redux
 */
export function favoriteClickHandler(
  movieTitle: string,
  favorites: string[],
  dispatch: Dispatch
) {
  if (favorites.includes(movieTitle)) {
    dispatch(removeFromFavorites(movieTitle));
  } else {
    dispatch(addToFavorites(movieTitle));
  }
}
