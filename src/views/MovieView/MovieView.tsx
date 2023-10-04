import Header from '../../components/Header/Header';

import './MovieView.scss';

function MovieView() {
  const isFavorited: boolean = false;

  const testMovie = {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 'R',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    genre: 'Drama',
    synopsis:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
  };

  function addToFavories() {
    // TODO: Lägga till film i favorites...
  }

  function removeFromFavorites() {
    //  TODO: Ta bort till film från favorites...
  }

  return (
    <div className='movie-view'>
      <Header />

      <section className='movie-view__card'>
        <div className='movie-view__card__container'>
          <div>
            <img
              className='movie-view__card__container__thumbnailIMG'
              src={testMovie.thumbnail}
              alt={testMovie.title}
            />
          </div>
          <div className='movie-view__card__container__info'>
            <h1 className='movie-view__card__container__title'>
              {testMovie.title}
            </h1>
            <h3 className='movie-view__card__container__year'>
              {testMovie.year}, {testMovie.genre}
            </h3>
            <h3 className='movie-view__card__container__actors'>
              {testMovie.actors.join(', ')}
            </h3>
            <h3 className='movie-view__card__container__rating'>
              {testMovie.rating}
            </h3>
          </div>
        </div>

        <p className='movie-view__synopsis'>{testMovie.synopsis}</p>

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
            onClick={() => addToFavories()}
          >
            Add to Favorites
          </button>
        )}
      </section>
    </div>
  );
}

export default MovieView;
