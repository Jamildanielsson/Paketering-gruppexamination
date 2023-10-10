import './MovieCard.scss';
import isFavoritePNG from '../../assets/images/favourite-filled.png';
import isNotFavoritePNG from '../../assets/images/favourite-not-filled.png';
import { favoriteClickHandler } from '../../utils/favoriteClickHandler';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import missing from '../../assets/images/missing.png';
import { getClickedMovieAndNavigate } from '../../utils/getClickedMovieAndNavigate';
import { useNavigate } from 'react-router-dom';

function MovieCard({ title, year, rating, thumbnail }: IMovieCardProps) {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='movie-card'>
      <div className='movie-card__blur-container'></div>
      <img
        aria-label="star image"
        alt='favorite star'
        className='movie-card__favoritePNG'
        onClick={() => favoriteClickHandler(title, favorites, dispatch)}
        src={favorites.includes(title) ? isFavoritePNG : isNotFavoritePNG}
      />
      <img
        onClick={() => getClickedMovieAndNavigate(title, navigate, dispatch)}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = missing;
        }}
        className='movie-card__thumbnail'
        src={thumbnail}
        alt='movie thumbnail'
      />

      <div className='movie-card__info'>
        <p className='movie-card__info__title'>{title}</p>
        <p className='movie-card__info__year'>{year}</p>
        <p className='movie-card__info__rating'>{rating}</p>
      </div>
    </div>
  );
}
export default MovieCard;
