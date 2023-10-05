import Header from '../../components/Header/Header';
import './FavoritesView.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../redux/store';
import Movies from '../../assets/movies.json'
import { isEmpty } from 'lodash';

function FavoritesView() {

  const favorites = useSelector((state: RootState) => state.favorites);
  
  const movieComponent = Movies.map((movie, index) => {
    if(favorites.includes(movie.title)) {
      return (
        <li className='favorites__list' key={index + 'list'}>
          <div className='favorites-image-container'><img className='favorites-thumbnail' src={movie.thumbnail}/></div>
          <div key={index} className='favorites-text-container'>
            <div className='favorites__title-year'>
              <h1 className='favorites-title'>{movie.title}</h1>
              <p className='favorites-year-genre-rating'>{movie.year} | {movie.genre} | {movie.rating}</p>
              <h4 className='favorites-actors'>{movie.actors ? movie.actors.join(', ') : ''}</h4>
            </div>
            <div key={index + 'synopsis'} className='favorites-synopsis-button'>
              <p className='favorites-synopsis-text'> {movie.synopsis} </p>
              <button className='favorites-remove-button' key={'button nr. ' + index}>Remove</button>
            </div>
          </div>
        </li>
      )
      } 
  })
  
  return (
    <div>
      <Header />
      <div className='favorites__container'>
        <section className={movieComponent && !isEmpty(favorites) ? 'favorites__section' : 'favorites__section-flex'}>
          { movieComponent && !isEmpty(favorites) ? movieComponent : <div className='favorites-empty'>Please add a favorite, this view is empty</div> }
        </section>
      </div>
    </div>
  );
}

export default FavoritesView;