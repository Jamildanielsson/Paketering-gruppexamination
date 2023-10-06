import Header from '../../components/Header/Header';
import './MovieView.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { findMovie } from '../../utils/findMovie';
import { favoriteClickHandler } from '../../utils/favoriteClickHandler';
import missing from '../../assets/images/missing.png'

function MovieView() {
  const dispatch: AppDispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const [movie, setMovie] = useState<MovieData | undefined>(undefined);

  const latestClickedMovie: string = useSelector(
    (state: RootState) => state.lastestMovie.latestMovie
  );

  useEffect(() => {
    setMovie(findMovie(latestClickedMovie));
  }, [latestClickedMovie]);

  return (
    <div className='movie-view'>
      <Header />

      {movie ? (
        <section className='movie-view__card'>
          <div className='movie-view__card__container'>
            <div className='movie-view__card__container__thumbnail'>
              <img onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = missing;
                  }}
                className='movie-view__card__container__thumbnailIMG'
                src={movie.thumbnail}
                alt={movie.title}
              />
            </div>
            <div className='movie-view__card__container__info'>
              <div className='movie-view__card__container__main-info'>
                <h1 className='movie-view__card__container__title'>
                  {movie.title}
                </h1>
                <p className='movie-view__card__container__year'>
                  {movie.year} | {movie.genre} | {movie.rating}
                </p>
                <h4 className='movie-view__card__container__actors'>
                  {movie.actors.join(', ')}
                </h4>
              </div>
              <div>
                <p className='movie-view__synopsis'>{movie.synopsis}</p>
                <button
                  className='movie-view__add-and-delete-button'
                  onClick={() =>
                    favoriteClickHandler(movie.title, favorites, dispatch)
                  }
                >
                  {favorites.includes(movie.title)
                    ? 'Remove from favorites'
                    : 'Add to favorites'}
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        '' // Todo: Fixa någon snygg om det möjligtvis skulle crasha!
      )}
    </div>
  );
}

export default MovieView;
