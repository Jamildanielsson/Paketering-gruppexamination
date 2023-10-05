import Header from '../../components/Header/Header';
import './MovieView.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { findMovie } from '../../utils/findMovie';

function MovieView() {
  const isFavorited: boolean = false;
  const [movie, setMovie] = useState<MovieData | undefined>(undefined);

  const latestClickedMovie: string = useSelector(
    (state: RootState) => state.lastestMovie.latestMovie
  );

  useEffect(() => {
    setMovie(findMovie(latestClickedMovie));
  }, [latestClickedMovie]);

  function addToFavorites() {
    // TODO: Add the movie to favorites...
  }

  function removeFromFavorites() {
    // TODO: Remove the movie from favorites...
  }

  return (
    <div className='movie-view'>
      <Header />

      {movie ? (
        <section className='movie-view__card'>
          <div className='movie-view__card__container'>
            <div className='movie-view__card__container__thumbnail'>
              <img
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
                  {movie.year} | {movie.genre} |  {movie.rating}
                </p>
                <h4 className='movie-view__card__container__actors'>
                  {movie.actors.join(', ')}
                </h4>
              </div>
              <div>
                <p className='movie-view__synopsis'>{movie.synopsis}</p>

                {isFavorited ? (
                  <button
                    className='movie-view__delete-button'
                    onClick={() => removeFromFavorites()}
                  >
                    Remove from Favorites
                  </button>
                ) : (
                  <button
                    className='movie-view__add-button'
                    onClick={() => addToFavorites()}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        '' // Todo: Fixa någon snygg placeholder...

      )}




    </div >
  );
}

export default MovieView;
